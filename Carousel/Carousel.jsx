import React, {useState} from "react";
import styles from '../Carousel/Carousel.module.css';

const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];



  export default function Carousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    const previousSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
     <div>
        <h1>A Simple Carousel</h1>
        <div className={styles.carousel}>
        <div className={styles.leftArrow} onClick={previousSlide}>
            👈
        </div>
        <div className={styles.rightArrow} onClick={nextSlide}>
            👉
        </div>
         {images.map((image, index) => 
         current === index && (
            <div key={image} className={styles.slide}>
              <img src={image} alt="images" />
            </div>
         )

        )}

        </div>
     </div>
    );
  }
  