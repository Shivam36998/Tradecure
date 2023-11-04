import React from "react";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subcontainer1}>
          <img src="" alt="" />
        </div>
        <div className={styles.subContainer2}>
          <Fade left>
            <div className={styles.headingText}>
              <h1>You go to online Fitness Trainer and nutritonist.</h1>
            </div>
          </Fade>
          <Fade right>
            <div className={styles.text}>
              <p>
                After getting a bechlors i nutrition and fitness training I
                started working with people all around and changing their lives
                forever.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className={styles.btn}>
              <button>Explore</button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
