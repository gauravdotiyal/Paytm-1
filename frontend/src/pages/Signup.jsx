import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "./BottomWarning";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <div className="bg-slate-300 flex h-screen justify-center">
    
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Register"} />
          <SubHeading label={"Enter your signup details below"} />
          <InputBox
            label={"First Name"}
            placeholder={"FirstName"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"LastName"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            label={"Username"}
            placeholder={"Username"}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <InputBox
            label={"Password"}
            placeholder={"Password"}
            onChange={(e) => {
              setPassword(e.target.value); 
            }}
          /> 
          <div className="pt-4">
          <Button
  onClick={async () => { 
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password,
      }); 
      localStorage.setItem("token",response.data.token)
  }}
  label={"Register"}
></Button>
           </div>
        <BottomWarning label={"Already Have an Account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
