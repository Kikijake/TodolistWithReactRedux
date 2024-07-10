import React from "react";
import Lottie from "lottie-react";
import loadingAmongUs from "../../assets/animations/AmongUsLoading.json";
import loadingDot from "../../assets/animations/DotLoading.json";

const Loading = () => {
  return (
    <div className="LoadingScreen">
      <Lottie animationData={loadingAmongUs} className="among-us-loading" />
      <Lottie animationData={loadingDot} className="dot-loading" />
    </div>
  );
};

export default Loading;
