import React from "react";
import { Link } from "react-router-dom";

export default function EditConfirmed() {
  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h3>Post Edited.</h3>
        <Link to="/" className="btn btn-primary m-1">
          Back To Post List
        </Link>
      </div>
    </div>
  );
}
