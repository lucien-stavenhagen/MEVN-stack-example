const jwt = require("jsonwebtoken");

// verify the authorization header, format should be
// Authorizaton: Bearer sldkfjlsdjfl....
//
// token sent in Authorization header in request
// pattern is "Bearer abcd45467l"
//
// Brad says in https://www.youtube.com/watch?v=7nafaH9SddU
// authorization: Bearer asdflkjslkdf...
//
// Max does it by by spltting on whitespace
//  const token = request.header.authorization.split()[1];
//
// Brad does
// const bearerHeader = request.header["Authorization"];
// which is a typo he probably fixes later in the vid
// it should be "authorization"
//

exports.verifyUser = (request, response, next) => {
  // need to do an ugly nested check with else's so we don't crash.
  // the stringy if-else-if-else thing is needed because
  // this is all done asychronously

  //
  // possibly overly anal checks
  // probably not needed in production app
  // where the headers will be properly controlled
  // for in the front end that creates the request.
  //
  // WARNING: THE SPECIFIC 403 RESPONSES HERE ARE INSECURE.
  // IN PRODUCTION, MAKE THEM OPAQUE WITH NO HINT
  // AS TO WHAT THE PROBLEM IS.
  //
  // check to see if Authorization header is even sent
  // if not send back forbidden
  //
  const authHeader = request.headers["authorization"];
  if (typeof authHeader === "undefined") {
    response.status(403).json({ error: '"authorization" header not found' });
  } else {
    //
    //Now check that header is properly formed
    // as "Bearer sldfsdfsd"
    // if not send back forbidden
    //
    const token = authHeader.split(" ")[1];
    if (typeof token === "undefined") {
      response.status(403).json({ error: "auth header malformed" });
    } else {
      //
      // the truly needed check with jwt.verify()
      //
      jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
        if (err) {
          response.status(403).json({ error: "forbidden, bad token" });
        } else {
          next();
        }
      });
    }
  }
};
