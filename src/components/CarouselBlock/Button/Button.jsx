import React from "react";
import classes from "./Button.css";

export const Button = React.memo((props) => {
  if (props.infinity) {
    return (
      <div>
        <div className={`${classes.leftSlide} ${classes.button}`} onClick={props.leftSlide}></div>
        <div className={`${classes.rightSlide} ${classes.button}`} onClick={props.rightSlide}></div>
      </div>
    );
  }
  return (
    <>
      <div
        className={`${classes.leftSlide} ${classes.button} ${props.end.prev ? classes.disabled : ""}`}
        onClick={props.end.prev ? null : props.leftSlide}
      ></div>
      <div
        className={`${classes.rightSlide} ${classes.button} ${props.end.next ? classes.disabled : ""}`}
        onClick={props.end.next ? null : props.rightSlide}
      ></div>
    </>
  );
});