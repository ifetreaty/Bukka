"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = require("../models");
const User = db.user;
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};
exports.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = User.find();
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.limit) || 8;
        const skip = (page - 1) * pageSize;
        const total = yield User.countDocuments();
        const pages = Math.ceil(total / pageSize);
        query = query.skip(skip).limit(pageSize);
        if (page > pages) {
            return res.status(404).json({
                status: "fail",
                message: "No page found",
            });
        }
        const result = yield query;
        res.status(200).json({
            status: "success",
            count: result.length,
            page,
            pages,
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Some error occurred while retrieving users.",
        });
    }
});
