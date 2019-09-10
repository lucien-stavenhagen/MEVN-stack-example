exports.uploadsdir = "uploads/";
exports.HOST_URI = process.env.VUE_APP_HOST_NAME
  ? `${process.env.VUE_APP_HOST_NAME}/`
  : `${process.env.HOST}:${process.env.PORT}/`;
