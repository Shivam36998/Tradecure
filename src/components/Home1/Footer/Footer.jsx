import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>TradCure</h3>
        </div>
        <div className={styles.info}>
          <div className={styles.infohead}>
            <h3>Connect with us</h3>
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
