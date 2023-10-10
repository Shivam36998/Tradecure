import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button className={styles.btn} type={props.type || "button"}>
        Sign In
      </button>
    </>
  );
};

export default Button;
