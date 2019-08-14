import React, { Component } from "react";
import axios from "axios";
import utils from "../../utils/utils";
import { Link } from "react-router-dom";

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.proxyurl = `${utils.proxyurl_api}/users`;
    this.state = {
      username: "",
      password: ""
    };
  }
  addUser = () => {
    const addstub = "/addnew";
    axios
      .post(`${this.proxyurl}${addstub}`, this.state)
      .then(doc => {
        console.log(doc);
        this.props.history.push("/useraddedok");
      })
      .catch();
  };
  handleUsername = event => {
    this.setState({ username: event.target.value });
  };
  handlePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.addUser();
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title text-center">Blog Application</h2>
            <h4 className="card-subtitle text-center text-muted">Register</h4>
            <Link to="/">
              <h5 className="card-subtitle text-center text-muted mt-2">
                Back to blog
              </h5>
            </Link>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleUsername}
                />
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
                <input
                  type="submit"
                  className="btn btn-primary mt-2"
                  value="Submit New User"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
