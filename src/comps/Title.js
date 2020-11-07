import React from "react";

const Title = () => {
  const handleLogout = () => {
    localStorage.setItem("uid", "");
    window.location.href = "/index.html";
  };

  return (
    <div className="title">
      {/* <h1>FireGram</h1> */}

      <nav className="navbar sticky-top navbar-light">
        <h1 style={{ color: "#efb6b2" }} className="navbar-brand">
          FireGram
        </h1>
        <button
          className="btn btn-outline form-inline my-2 my-lg-0 text-dark"
          onClick={handleLogout}
        >
          <b>Logout</b>
        </button>
      </nav>
      <h2>Your Pictures</h2>
      <p>List of images uploaded are listed below</p>
    </div>
  );
};

export default Title;
