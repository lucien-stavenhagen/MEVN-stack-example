const express = require("express");
const router = express.Router();

const imagesController = require("../controllers/Image");
const upload = require("../middleware/multer/multerSetup").upload;
const verifyUser = require("../middleware/auth/verifyUser").verifyUser;

router.get("/getall", imagesController.get_uploaded_images);
router.post(
  "/upload",
  verifyUser,
  upload.single("newimage"),
  imagesController.upload_image
);
module.exports = router;
