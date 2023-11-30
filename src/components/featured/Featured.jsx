import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <b>Hey Everyone! </b> Discover my stories and creative ideas.
      </h2>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/food_blog.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Divine Decadence: Baking Tales and Sweet Escapades
          </h1>
          <p className={styles.postDesc}>
            Indulge your senses in the delectable world of Divine Decadence,
            where each post is a journey through baking tales and sweet
            escapades. From the heavenly aromas of freshly baked confections to
            the delightful stories behind iconic desserts, join us on a culinary
            adventure that celebrates the art of creating and savoring
            irresistible treats. Whether you're a seasoned baker seeking
            inspiration or a dessert enthusiast with a penchant for decadence,
            Divine Decadence is your go-to destination for all things sweet,
            whimsical, and utterly delicious.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
