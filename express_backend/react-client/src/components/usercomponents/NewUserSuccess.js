import React from "react";
import { Link } from "react-router-dom";

export default function NewUserSuccess() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h3>You are now signed up! Please login now</h3>
        <Link to="/login" className="btn btn-primary m-1">
          Back To Login
        </Link>
      </div>
    </div>
  );
}
