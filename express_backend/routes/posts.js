const express = require("express");
const router = express.Router();
const postscontroller = require("../controllers/Post");
const verifyUser = require("../middleware/auth/verifyUser").verifyUser;
const upload = require("../middleware/multer/multerSetup").upload;

router.get("/", postscontroller.get_all_posts);

router.get("/:id", postscontroller.get_post_by_id);

//router.post("/create", verifyUser, postscontroller.create_post);
router.post("/create", upload.single("postimage"), postscontroller.create_post);

router.patch("/edit/:id", verifyUser, postscontroller.update_post);

router.delete("/delete/:id", verifyUser, postscontroller.delete_post);

module.exports = router;
