import React, { Component } from "react";

const Input = () => {
  return (
    <div className="mb-3">
      <input className="input input-bordered w-full" />
    </div>
  );
};

const TextArea = () => {
  return (
    <div className="mb-3">
      <textarea className="input input-bordered w-full" />
    </div>
  );
};

export { Input, TextArea };
