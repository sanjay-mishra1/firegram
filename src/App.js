import React from "react";
import LoginApp from "./LoginApp";
import HomeApp from "./HomeApp";
function App() {
  const uid = localStorage.getItem("uid");

  return (
    <React.Fragment>
      {uid && <HomeApp />}
      {!uid && <LoginApp />}
    </React.Fragment>
  );
}

export default App;
