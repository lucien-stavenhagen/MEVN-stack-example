import React, { Component } from "react";
import { Link } from "react-router-dom";
import utils from "../../utils/utils";
import axios from "axios";
import MenuBar from "../layout/MenuBar";

export default class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.proxyurl = `${utils.proxyurl_api}/posts`;
    this.state = {
      title: "",
      author: "",
      category: "",
      posttext: ""
    };
  }
  componentDidMount() {
    this.getPostById();
  }
  getPostById = () => {
    axios
      .get(this.proxyurl + "/" + this.props.match.params.id)
      .then(res => {
        console.log("headers: " + JSON.stringify(res.headers));
        this.setState(res.data);
      })
      .catch(err => console.log("HOMEY ERROR: " + err));
  };
  render() {
    return (
      <div className="container">
        <MenuBar />
        <div className="border jumbotron text-center mb-0">
          <h1>Single Post View</h1>
        </div>
        <div className="border card">
          <h3 className="card-title text-center">{this.state.title}</h3>
          <div className="card-body">
            <p className="card-text">
              <span>
                by: {this.state.author} on {this.state.date}
              </span>
              <br />
              <span>category: {this.state.category}</span>
              <br />
              <span>{this.state.posttext}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
