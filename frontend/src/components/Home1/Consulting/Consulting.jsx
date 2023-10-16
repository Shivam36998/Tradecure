import React from "react";
import styles from "./Consulting.module.css";
import image from "../../assets/coach.png";
import Fade from "react-reveal/Fade";

const Consulting = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.cards}>
            <Fade left>
              <div className={styles.cardsImg}>
                <img src={image} alt="img" />
              </div>
              <div className={styles.cardsName}>
                <h3>Dr. Hemanth Gupta</h3>
              </div>
            </Fade>
          </div>
        </div>
        <div className={styles.right}>
          <Fade right>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem molestias omnis, eveniet fugiat at optio similique.
            </p>
          </Fade>
          <Fade bottom>
            <button>Get Online Coach</button>
            <ul>
              <li>
                <a href="#">tag for a category</a>
              </li>
              <li>
                <a href="#">tag for a category</a>
              </li>
              <li>
                <a href="#">tag for a category</a>
              </li>
              <li>
                <a href="#">tag for a category</a>
              </li>
            </ul>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Consulting;
