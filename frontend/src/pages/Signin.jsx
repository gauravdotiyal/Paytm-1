import React, { useState } from 'react'
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "./BottomWarning";
import axios from 'axios'

const Signin = () => {
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");

  return (
    <div className="bg-slate-300 flex h-screen justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your signin details below"} />
            
          <InputBox
            label={"Email"}
            placeholder={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"Password"}
            onChange={(e) => {
              setPassword(e.target.value); 
            }}
          /> 
          {/* <div className="pt-4">
            <Button label={"Sing In"}></Button>
           </div> */}
        <BottomWarning label={"Don't Have an Account?"} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
      </div>
    </div>
  )
}

export default Signin
