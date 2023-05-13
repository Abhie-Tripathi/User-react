import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [username, setusername] = useState("");
  const [age, setage] = useState("");
  const [error, seterror] = useState();
    
  const Errorhandler = () =>{
    seterror(null)
  }

  const adduserhandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      seterror({
        title: "Invalid Input",
        message: "Please Enter a valid Name and Age.",
      });
      return;
    }
    if (+age < 1) {
      seterror({
        title: "Invalid Input",
        message: "Please Enter Valid Age (>0).",
      });
      return;
    }
    props.onadduser(username, age);
    setusername("");
    setage("");
  };

  const usernamechangehandler = (event) => {
    setusername(event.target.value);
  };

  const agechangehandler = (event) => {
    setage(event.target.value);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onconfirm={Errorhandler}/>}
      <Card className={classes.input}>
        <form onSubmit={adduserhandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernamechangehandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={agechangehandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
