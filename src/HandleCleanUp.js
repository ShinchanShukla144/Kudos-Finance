import React, { useState } from "react";
import CleanUp from "./CleanUp";

const HandleCleanUp = () => {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showPost}>Show Posts</button>
      {show && <CleanUp />}
    </div>
  );
};
export default HandleCleanUp;