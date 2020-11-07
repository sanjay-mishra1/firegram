import React from "react";
import { projectAuth } from "../firebase/config";
let uid;
const LoginForm = () => {
  const handleClick = () => {
    console.log("handle click");
    startAuth(
      document.getElementById("inputUserEmail").value,
      document.getElementById("inputPassword").value
    );
  };
  const startAuth = (email, password) => {
    if (email === "") {
      showMessage("Enter user email");
    } else if (password === "") {
      showMessage("Enter password");
    } else if (email === " ") {
      showMessage("email sholud not contains any spaces or special characters");
    } else {
      showMessage("Login started...please wait");
      console.log(email, password);
      console.log(typeof projectAuth);
      projectAuth
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          showMessage("Login success");
          projectAuth.onAuthStateChanged((user) => {
            if (user) {
              uid = user.uid;
              console.log("UId", "stored->" + uid);
              localStorage.setItem("uid", uid);
              window.location.href = "/index.html";

              // User logged in already or has just logged in.
            } else {
              console.log("state change uid is null=" + user.uid);
              // User not logged in or has just logged out.
            }
          });
          //    localStorage.setItem("uid", uid);
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
  const openSignUp = () => {
    window.location.href = "/index.html?mode=register";
  };
  return (
    <div className="card mb-0 ">
      <script src="https://www.gstatic.com/firebasejs/7.6.0/firebase-auth.js"></script>
      <div className="card-body">
        <div className="card-content p-3">
          <div className="text-center">
            <img src="logo-big.png" width="43%" alt="logo icon" />
          </div>
          <div className="card-title text-uppercase text-center py-3">
            Sign In
          </div>
          <form onSubmit={handleClick}>
            <div className="form-group">
              <div className="position-relative has-icon-left">
                <label
                  className="login-label"
                  htmlFor="exampleInputEmail"
                  className="sr-only"
                >
                  Name
                </label>
                <input
                  type="email"
                  id="inputUserEmail"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="form-control-position">
                  <i className="fa fa-user"></i>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="position-relative has-icon-left">
                <label
                  className="login-label"
                  htmlFor="exampleInputPassword"
                  className="sr-only"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="form-control-position">
                  <i className="fa fa-lock"></i>
                </div>
              </div>
            </div>
            <p id="message"></p>
            <div className="form-row mr-0 ml-0">
              <div className="form-group col-6">
                <div className="icheck-material-primary">
                  <input type="checkbox" id="user-checkbox" defaultValue="" />
                  <label
                    className="login-label"
                    htmlFor="user-checkbox"
                    style={{ width: "149px", paddingLeft: "30px" }}
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center pt-3">
              <hr />

              <p className="text-dark">
                Not have an account?{" "}
                <a
                  href={openSignUp}
                  style={{ color: "var(--primary)" }}
                  onClick={openSignUp}
                >
                  Register here
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block waves-effect waves-light"
              onClick={handleClick}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
