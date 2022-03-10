import React from "react";
// import { BeatLoader } from "react-spinners";
import { ThreeDots } from "react-loader-spinner";

function LoadSpinner() {
  return (
    <div
      className="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ThreeDots color={"#03A84E"} height={200} size={200} />
    </div>
  );
}

export default LoadSpinner;
