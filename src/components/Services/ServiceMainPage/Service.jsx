import React from "react";
import styles from "./Service.module.css";
import Fade from "react-reveal/Fade";

export default function Service() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Services we offer</h3>
        </div>
        <div className={styles.mainBtns}>
          <Fade left>
            <div className={styles.leftBtns}>
              <button className={styles.btns}>
                Lorem ipsum dolor sit, amet consectetur.
              </button>
              <button className={styles.btns}>
                Lorem ipsum dolor sit, amet consectetur.
              </button>
              <button className={styles.btns}>
                Lorem ipsum dolor sit, amet consectetur.
              </button>
            </div>
          </Fade>

          <Fade right>
            <div className={styles.rightBtns}>
              <button className={styles.btns}>
                Lorem ipsum dolor sit, amet consectetur.
              </button>
              <button className={styles.btns}>
                Lorem ipsum dolor sit, amet consectetur.
              </button>
              <button className={styles.btns}>
                Lorem ipsum dolor sit, amet consectetur.
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
