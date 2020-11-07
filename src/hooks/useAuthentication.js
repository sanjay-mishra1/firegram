import { Component } from "react";
import { projectAuth } from "../firebase/config";
import React from "react";

class useAuthentication extends Component {
  uid;
  state = {};
  constructor(props) {
    console.log("use auth");
  }
  startAuth = (email, password) => {
    if (email === "") {
      this.showMessage("Enter user email");
    } else if (password === "") {
      this.showMessage("Enter password");
    } else if (email.includes(" ")) {
      this.showMessage(
        "email sholud not contains any spaces or special characters"
      );
    } else {
      this.showMessage("Login started...please wait");
      projectAuth
        .signInWithemailAndPassword(email, password)
        .then(function (user) {
          this.showMessage("Login success");
          this.uid = user.uid;
          localStorage.setItem("uid", this.uid);
          window.location.href = "/index.html";
          //    localStorage.setItem("uid", uid);
        })
        .catch(function (error) {
          this.uid = "";
          var errorMessage = error.message;
          this.showMessage(errorMessage);
        });
    }
  };
  showMessage = (msg) => {
    return (
      '<div className="alert alert-warning alert-dismissible fade show role="alert">' +
      msg +
      '<button   type="button"   className="close" data-dismiss="alert"  aria-label="Close"  >' +
      '<span aria-hidden="true">&times;</span>' +
      "</button>" +
      "</div>"
    );
  };

  render() {
    console.log("useAuth rendered");
    const { onSubmit, email, password } = this.props;
    return (
      <React.Fragment
        onSubmit={this.startAuth(email, password)}
      ></React.Fragment>
    );
  }
}

export default useAuthentication;
