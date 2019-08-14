import React, { Component } from "react";
import { Link } from "react-router-dom";
import utils from "../../utils/utils";

const logo = require("../../img/LSwebdevLogo.png");

console.log(logo);
export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkclass: ""
    };
  }
  componentDidMount() {
    const auth_info = utils.getTokenFromLocal();
    if (auth_info.loggedin) {
      this.setState({ linkclass: "nav-link" });
    } else {
      this.setState({ linkclass: "nav-link disabled" });
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <Link to="/" className="navbar-brand">
            <img src={logo} width="80" height="80" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/create" className={this.state.linkclass}>
                  Create New Post
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
