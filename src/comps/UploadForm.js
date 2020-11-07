import React, { useState } from "react";
import Progressbar from "./progressbar";
const UploadForm = () => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };
  return (
    <form>
      <label className="home-label">
        <input
          type="file"
          onChange={changeHandler}
          style={{ fontSize: "0px" }}
        />
        <span>+</span>
      </label>{" "}
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && (
          <div>
            <Progressbar file={file} setFile={setFile} />
          </div>
        )}
      </div>
    </form>
  );
};
export default UploadForm;
