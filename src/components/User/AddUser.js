import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const usernameinputref = useRef()
  const ageinputref = useRef()
  const collegeinputref = useRef()



  const [error, seterror] = useState();
    
  const Errorhandler = () =>{
    seterror(null)
  }

  const adduserhandler = (event) => {
    event.preventDefault();
    const username = usernameinputref.current.value
    const age = ageinputref.current.value
    const college = collegeinputref.current.value
    
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
    props.onadduser(username, age, college);
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
            ref={usernameinputref}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageinputref}
          />
          <label htmlFor="College">College Name</label>
          <input
            id="college"
            type="text"
            ref={collegeinputref}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
