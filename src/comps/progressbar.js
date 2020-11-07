import React, { useEffect } from "react";
import userStorage from "../hooks/userStorage";
import { motion } from "framer-motion";
const Progressbar = ({ file, setFile }) => {
  let { url, progress } = userStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  if (file !== null && progress === 0) progress = 5;
  console.log(progress, url);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};
export default Progressbar;
