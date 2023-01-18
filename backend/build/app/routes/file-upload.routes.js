"use strict";
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const uploader = require("../utils/cloudinary");
router.post("/upload", uploader.single("file"), (req, res, next) => {
    cloudinary.uploader
        .upload(req.file.path)
        .then((result) => {
        res.status(200).send({
            message: "success",
            result,
        });
    })
        .catch((error) => {
        res.status(500).send({
            message: "failure",
            error,
        });
    });
    if (!req.file) {
        next(new Error("No file uploaded!"));
        return;
    }
});
module.exports = router;
