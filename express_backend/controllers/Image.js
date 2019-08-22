const uploads = require("../utils/utils").uploadsdir;
const fs = require("fs");
const HOST_URI = require("../utils/utils").HOST_URI;
const uuidv1 = require("uuid/v1");

exports.upload_image = (request, response) => {
  response.json({ msg: "upload completed" });
};
exports.get_uploaded_images = (request, response, next) => {
  const img = {
    images: []
  };
  fs.readdir(uploads, (err, files) => {
    files.forEach(file => {
      img.images.push({
        id: uuidv1(),
        path: `${HOST_URI}${uploads}${file}`,
        name: file
      });
    });
    response.json(img);
  });
};
exports.delete_image = (request, response, next) => {
  const delme = `${uploads}/${request.body.filename}`;
  try {
    fs.unlinkSync(delme);
    response.json({ msg: `${delme} deleted successfully` });
  } catch {
    response.status(409).json({ error: `could not delete ${delme}` });
  }
};
