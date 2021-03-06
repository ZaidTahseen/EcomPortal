"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cart_1 = require("../models/Cart");
const mongoose_1 = require("mongoose");
class CartController {
    static getUserCart(req, res, next) {
        Cart_1.Cart.aggregate([
            {
                $match: { userId: new mongoose_1.Types.ObjectId(req.body.userId), status: 'A' }
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'productId',
                    foreignField: '_id',
                    as: 'UserCart'
                }
            }
        ], (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'User Cart!', data: result });
            }
        });
    }
    static saveToCart(req, res, next) {
        const wishlist = new Cart_1.Cart(req.body);
        Cart_1.Cart.create(wishlist, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Product added to Cart!', data: {} });
            }
        });
    }
    static updateCart(req, res, next) {
        Cart_1.Cart.updateMany({ _id: { $in: [req.body.productId], userId: req.body.userId } }, (err, result) => {
            if (err) {
                res.status(500).json({ status: 'failed', message: err });
            }
            else {
                res.json({ status: 'success', message: 'Cart Updated!', data: result });
            }
        });
    }
    static deleteFromCart(req, res, next) {
        let productId = req.params.id;
        let userId = req.body.userId;
        Cart_1.Cart.findOneAndDelete({ productId: new mongoose_1.Types.ObjectId(productId), userId: new mongoose_1.Types.ObjectId(userId) }).then(data => {
            res.json({ status: 'success', message: 'Cart deleted!' });
        }).catch(err => {
            res.status(500).json({ status: 'failed', message: err });
        });
    }
}
exports.CartController = CartController;
