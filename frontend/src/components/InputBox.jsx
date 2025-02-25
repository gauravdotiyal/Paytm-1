import React from "react";

const InputBox = ({ label, onChange, placeholder }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2 ">{label} </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounder border-slate-200"
      />
    </div>
  );
};

export default InputBox;
