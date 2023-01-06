import React, { Component } from "react";
import Lottie from "lottie-react";

import MovieAnimation from "../assets/cinema-animation.json";

export const SkeletonLoading = () => {
  return (
    <div className="flex grow flex-col justify-between p-3">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-5 py-1">
          <div className="h-52 rounded bg-slate-700" />
          <div className="space-y-2">
            <div className="h-6 rounded bg-slate-700" />
            <div className="h-6 rounded bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingAnimation = () => {
  return <Lottie animationData={MovieAnimation} loop={true} autoplay />;
};
