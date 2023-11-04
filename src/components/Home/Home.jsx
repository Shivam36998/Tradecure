import React from "react";
import styles from "./Home.module.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Fade left>
            <h1>You go to online Fitness Trainer and nutritonist.</h1>
          </Fade>
          <Fade right>
            <p>
              After getting a bechlors i nutrition and fitness training I
              started working with people all around and changing their lives
              forever.
            </p>
          </Fade>
          <Fade left>
            <button>Explore</button>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
