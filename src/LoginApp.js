import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LoginLeftComponent from "./comps/LoginLeftComponent";
import "./assets/css/app-style.css";
import LoginForm from "./comps/LoginForm";
import SignupForm from "./comps/SignupForm";
function LoginApp() {
  const url = window.location.href;
  console.log(url);
  const checkMode = () => {
    if (url.includes("register")) return <SignupForm />;
    else return <LoginForm />;
  };
  return (
    <div id="wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card-authentication2 mx-auto my-5">
        <div className="card-group">
          <LoginLeftComponent />
          {checkMode()}
        </div>
      </div>
    </div>
  );
}

export default LoginApp;
