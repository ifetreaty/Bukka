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
const Cart = require("../models/cart.model");
exports.cart = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const carts = yield Cart.findOne({ userId }).populate({
        path: "items.mealId",
        select: "name price total",
    });
    return carts;
});
exports.cartItemById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield Cart.findById(id);
    return item;
});
exports.addItem = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newItem = yield Cart.create(payload);
    return newItem;
});
exports.removeItem = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield Cart.findByIdAndRemove(id);
    return item;
});
