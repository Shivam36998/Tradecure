import React from 'react'
import styles from "./NewsArea.module.css"

const Card = () => {
  return(
    <div className={styles.container}>
      <div className={styles.cardArea}>
        {/* <div className={styles.newsImg}></div> */}
        <div className={styles.newsContent}>
          <h3>Shilpa Shetty’s daily health secret </h3>
          <p className={styles.tags}> #fitness #diet #shilpa227</p>
          <p className={styles.newstext}>
            Shilpa Shetty shared her daily health secret -- endorsing noni juice.
            She explained, "I have 4 concentrated drops of noni juice, and it
            gives me a lot of strength in the morning to do all of the crazy stuff
            I do for the rest of the day." Noni juice, derived from the fruit of
            the Morinda citrifolia tree, has a long history of use in Polynesian
            folk medicine — spanning over 2,000 years. Known for its rich heritage
            of health applications, noni juice is now capturing the attention of
            fitness enthusiasts, including our very own Shilpa Shetty.
          </p>
        </div>
        <div className={styles.footer}>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};
const NewsArea = () => {
  return (
    <div className={styles.newsArea}>
      <div className={styles.upperRow}>
        <h1>Trending Health</h1>
        <button>Read More</button>
      </div>
      <div className={styles.lowerRow}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  );
}

export default NewsArea
