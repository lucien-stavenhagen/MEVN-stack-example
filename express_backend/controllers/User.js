const User = require("../models/UsersMongo").User;
const initUser = require("../models/UsersMongo").initUser;

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.add_user = (request, response, next) => {
  User.findOne({ username: request.body.username })
    .then(user => {
      if (user) {
        response.status(409).json(`${request.body.username} already in db`);
      } else {
        bcrypt.hash(request.body.password, 10, (err, hash) => {
          if (err) {
            response.status(400).json({ error: err });
          } else {
            const newUser = new User(initUser(request.body.username, hash));
            newUser
              .save()
              .then(doc =>
                response.json({
                  msg: `added new user ${request.body.username}`,
                  doc
                })
              )
              .catch(err => response.status(400).json({ error: err }));
          }
        });
      }
    })
    .catch(err =>
      response
        .status(400)
        .json({ msg: `general error looking up ${request.body.username}`, err })
    );
};
exports.user_login = (request, response, next) => {
  User.findOne({ username: request.body.username })
    .then(doc => {
      if (doc === null) {
        response.status(401).json({
          msg: "auth failed, user not in DB",
          token: null,
          username: null
        });
      } else {
        bcrypt
          .compare(request.body.password, doc.password)
          .then(doc => {
            if (doc) {
              jwt.sign(
                { username: request.body.username, userID: request.body._id },
                process.env.PRIVATE_KEY,
                { expiresIn: "1 day" },
                (err, jwttoken) => {
                  if (err) {
                    response.status(400).json({
                      msg: "auth failed err in jwt.sign()",
                      token: null,
                      username: null
                    });
                  } else {
                    response.json({
                      msg: "auth ok",
                      token: jwttoken,
                      username: request.body.username
                    });
                  }
                }
              );
            } else {
              response.status(401).json({
                msg: "auth failed, passwords mismatch",
                token: null,
                username: null
              });
            }
          })
          .catch(err =>
            response.status(401).json({
              msg: "auth failed, problem in bcrypt.compare()",
              token: null,
              username: null
            })
          );
      }
    })
    .catch(err =>
      response
        .status(401)
        .json({ msg: "auth failed in find", token: null, username: null })
    );
};
