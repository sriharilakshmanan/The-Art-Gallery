import React, { Component } from "react";

class PostPicture extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center" }}>Post a Picture</h1>
          <div style={{ width: "30%", margin: "25px auto" }}>
            <form action="/" method="POST">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Image url"
                  name="image"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  name="description"
                />
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block">
                  Submit
                </button>
              </div>
            </form>
            <a href="/">Go Back</a>
          </div>
        </div>
      </div>
    );
  }
}

export default PostPicture;
