//
// max's tutorial at
// https://www.youtube.com/watch?v=srPXMt1Q0nY&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=10
//
const uploadsdir = require("../../utils/utils").uploadsdir;
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(request, file, callback) {
    callback(null, uploadsdir);
  },
  filename: function(request, file, callback) {
    callback(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (request, file, callback) => {
  //reject
  if (file.mimetype === "image/jpg" || file.mimetype === "image/png") {
    callback(null, true);
  } else {
    //accept
    callback(null, true);
  }
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
