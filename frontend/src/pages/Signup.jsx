import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

const Signup = () => {
  return (
    <div className="bg-slate-300 flex h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Register"} /> 
          <SubHeading label={"Enter your signup details below"} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
