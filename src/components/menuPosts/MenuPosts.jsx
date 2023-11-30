import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            BeyondBeaches: A Global Odyssey of Sun, Sand, and Culture
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Emily Thompson</span>
            <span className={styles.date}> - 10.02.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            A Cultural Carnival Across Continents
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Liam Smith</span>
            <span className={styles.date}> - 16.05.2020</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>Serenade of Sweet Traditions</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Harper Johnson</span>
            <span className={styles.date}> - 23.08.2021</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Couture Chronicles: A Symphony of Style and Craftsmanship
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Oliver Miller</span>
            <span className={styles.date}> - 09.11.2022</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
