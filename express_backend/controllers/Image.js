const uploads = require("../utils/utils").uploadsdir;
const fs = require("fs");

//
// repeated from models/PostMongo.js
// need to put in a utils class
//
const HOST_URI = require("../utils/utils").HOST_URI;
const uuidv1 = require("uuid/v1");

exports.get_uploaded_images = (request, response, next) => {
  const img = {
    images: []
  };
  fs.readdir(uploads, (err, files) => {
    files.forEach(file => {
      img.images.push({ id: uuidv1(), path: `${HOST_URI}${uploads}${file}` });
    });
    response.json(img);
  });
};