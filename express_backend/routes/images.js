const express = require("express");
const router = express.Router();

const imagesController = require("../controllers/Image");

router.get("/getall", imagesController.get_uploaded_images);

module.exports = router;
