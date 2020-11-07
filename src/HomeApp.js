import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Model from "./comps/Model";
import Title from "./comps/Title";
import "./index.css";
import UploadForm from "./comps/UploadForm";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <React.Fragment>
      <link rel="stylesheet" type="text/css" href="index.css" />
      <div className="App">
        <Title />
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
