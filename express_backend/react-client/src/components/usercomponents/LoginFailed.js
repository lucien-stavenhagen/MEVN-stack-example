import React from "react";
import { Link } from "react-router-dom";

export default function LoginFailed() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h3>Login failed</h3>
        <Link to="/login" className="btn btn-primary m-1">
          Back To Login
        </Link>
      </div>
    </div>
  );
}
