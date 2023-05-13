import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom"

const ErrorModal = (props) => {
  const Backdrop = (props) =>{
    return(
      <div className={classes.backdrop} onClick={props.onconfirm}/>

    )
  } 

  const Modaloverlay = (props) => {
    return(
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onclick={props.onconfirm}>Okay</Button>
        </footer>
      </Card>

    )
  }
  return (
    <div>
      {ReactDOM.createPortal(<Modaloverlay title={props.title} message={props.message} onconfirm={props.onconfirm}/>,document.getElementById("modal-overlay"))}
      {ReactDOM.createPortal(<Backdrop onconfirm={props.onconfirm}/>,document.getElementById("backdrop"))}
    </div>
  );
};

export default ErrorModal;
