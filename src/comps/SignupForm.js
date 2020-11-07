import React from "react";
import { projectAuth } from "../firebase/config";
let uid;
const SignupForm = () => {
  const handleClick = () => {
    console.log("handle click");
    startAuth(
      document.getElementById("exampleInputEmailId").value,
      document.getElementById("exampleInputName").value,
      document.getElementById("exampleInputPassword").value,
      document.getElementById("exampleInputConfirmPassword").value
    );
  };
  const startAuth = (email, name, password, confPassword) => {
    if (email === "") {
      showMessage("Enter user email");
    } else if (name === "") {
      showMessage("Enter your full name");
    } else if (password === "") {
      showMessage("Enter password");
    } else if (confPassword === "") {
      showMessage("Enter password again");
    } else if (password !== confPassword) {
      showMessage("Both passwords are not same");
    } else {
      showMessage("Login started...please wait");
      console.log(email, password);
      console.log(typeof projectAuth);
      projectAuth
        .createUserWithEmailAndPassword(email, password)
        .then(function (user) {
          showMessage("Login success");
          projectAuth.onAuthStateChanged((user) => {
            if (user) {
              user
                .updateProfile({
                  displayName: name,
                })
                .then(function () {
                  // Update successful.
                  uid = user.uid;
                  console.log("UId", "stored->" + uid);
                  localStorage.setItem("uid", uid);
                  window.location.href = "/index.html";
                })
                .catch(function (error) {
                  // An error happened.
                  showMessage("Error occurred");
                });

              // User logged in already or has just logged in.
            } else {
              console.log("state change uid is null=" + user.uid);
              // User not logged in or has just logged out.
            }
          });
        })
        .catch(function (error) {
          uid = "";
          var errorMessage = error.message;
          showMessage(errorMessage);
        });
    }
  };
  const showMessage = (msg) => {
    console.log("msg executed " + msg);
    document.getElementById("root").innerHTML +=
      '<div className="alert alert-warning alert-dismissible fade show role="alert">' +
      msg +
      '<button   type="button"   className="close" data-dismiss="alert"  aria-label="Close"  >' +
      '<span aria-hidden="true">&times;</span>' +
      "</button>" +
      "</div>";
  };
  const openSignIn = () => {
    window.location.href = "/index.html?mode=signin";
  };
  return (
    <div className="card mb-0">
      <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-auth.js"></script>
      <div className="card-body">
        <div className="card-content p-3">
          <div className="text-center">
            <img width="43%" src="logo-big.png" alt="logo icon" />
          </div>
          <div className="card-title text-uppercase text-center py-3">
            Sign Up
          </div>
          <form onSubmit={handleClick}>
            <div className="form-group">
              <div className="position-relative has-icon-left">
                <label htmlFor="exampleInputName" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="exampleInputName"
                  className="form-control"
                  placeholder="Name"
                />
                <div className="form-control-position">
                  <i className="fa fa-user"></i>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="position-relative has-icon-left">
                <label htmlFor="exampleInputEmailId" className="sr-only">
                  Email ID
                </label>
                <input
                  type="text"
                  id="exampleInputEmailId"
                  className="form-control"
                  placeholder="Email ID"
                />
                <div className="form-control-position">
                  <i className="fa fa-envelope-open"></i>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="position-relative has-icon-left">
                <label htmlFor="exampleInputPassword" className="sr-only">
                  Password
                </label>
                <input
                  type="text"
                  id="exampleInputPassword"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="form-control-position">
                  <i className="fa fa-lock"></i>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="position-relative has-icon-left">
                <label
                  htmlFor="exampleInputConfirmPassword"
                  className="sr-only"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="exampleInputConfirmPassword"
                  className="form-control"
                  placeholder="Retry Password"
                />
                <div className="form-control-position">
                  <i className="fa fa-lock"></i>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="icheck-material-primary">
                <input type="checkbox" id="user-checkbox" checked="" />
                <label htmlFor="user-checkbox">
                  I Accept terms &amp; conditions
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary btn-block waves-effect waves-light"
            >
              Sign Up
            </button>
            <div className="text-center pt-3">
              <hr />

              <p className="text-dark">
                Already have an account?{" "}
                <a style={{ color: "var(--primary)" }} onClick={openSignIn}>
                  Sign In here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupForm;
