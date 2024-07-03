import React from "react";
import loadingAmongUs from "../../assets/animations/AmongUsLoading.json"
import loadingDot from "../../assets/animations/DotLoading.json"
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <div className="LoadingScreen">
      <Lottie animationData={loadingAmongUs} className="among-us-loading" />
      <Lottie animationData={loadingDot} className="dot-loading"/>
    </div>
  );
}

export default Loading