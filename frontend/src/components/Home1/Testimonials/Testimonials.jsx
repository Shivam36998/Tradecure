import React from 'react'
import styles from "./Testimonials.module.css"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperRow}>
        <h1>Testimonials</h1>
        <button>See All</button>
      </div>
      <div className={styles.midRow}>
        <IoIosArrowBack
          size={100}
          color="blue"
          className={styles.icon}
        />
        <div className={styles.testimonialArea}>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f802150-66ea-43cc-8f5b-a0ceb24350ea/dg408gf-42cc2d79-4067-4c59-99c2-67aa529e4d06.png/v1/fill/w_1280,h_1024,q_80,strp/cute_hinata_by_elffyie_dg408gf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzFmODAyMTUwLTY2ZWEtNDNjYy04ZjViLWEwY2ViMjQzNTBlYVwvZGc0MDhnZi00MmNjMmQ3OS00MDY3LTRjNTktOTljMi02N2FhNTI5ZTRkMDYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.v3wg_jq1wpsSSCzYMhCgM5RrE0Et94A6MaGstfrPg8w"
            alt=""
          />
          <div className={styles.main}>
            <h2>Hinata Hyuga</h2>
            <p>Byakugon Princess</p>
            <span>
              This site is a fitness haven! It offers a diverse range of
              high-quality fitness products and connects you with experienced
              trainers and knowledgeable fitness doctors. It's your all-in-one
              destination for a healthier, fitter you
            </span>
            <button>Upvote it! <span>(933 till now)</span></button>
          </div>
        </div>
        <IoIosArrowForward
          size={100}
          color="blue"
          className={styles.icon}
        />
      </div>
      <button className={styles.ownTestimonial}>Leave Your Own Testimonial</button>
    </div>
  );
}

export default Testimonials
