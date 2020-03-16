"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class MongoConnect {
    static connect() {
        const mongoDBConn = process.env.MONGODB_URL || '';
        return mongoose.connect(mongoDBConn, { useNewUrlParser: true });
    }
}
exports.MongoConnect = MongoConnect;
