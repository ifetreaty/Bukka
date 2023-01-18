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
const joi = require("joi");
const validation = joi.object({
    mealId: joi.string().alphanum().min(3).max(100).trim(true).required(),
    quantity: joi.number().integer().min(1).max(10),
    price: joi.number().integer().min(100).max(30000),
    total: joi.number().integer().min(100).max(300000),
});
const cartValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        total: req.body.total,
    };
    console.log(payload);
    const { error } = validation.validate(req.body);
    if (error) {
        res.status(406);
        console.log(error);
        return res.json(`Error in Cart Data: ${error.message}`);
    }
    else {
        next();
    }
});
module.exports = cartValidation;
