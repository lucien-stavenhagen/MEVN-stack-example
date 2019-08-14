import React from "react";
import { Link } from "react-router-dom";
import utils from "../../utils/utils";

export default function UserLogoff() {
  utils.clearAllAuthFromLocal();
  return (
    <div>
      <div className="container">
        <div className="jumbotron text-center">
          <h3>User logged out</h3>
          <Link to="/">
            <button className="btn btn-primary m-1">Home</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary m-1">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
