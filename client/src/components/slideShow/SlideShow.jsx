import React, { useState, useEffect } from 'react';
import slide1 from '../../assets/Images/header-images/Slide1.png';
import slide2 from '../../assets/Images/header-images/Slide2.png';
import slide3 from '../../assets/Images/header-images/Slide3.png';
import styles from './slideshow.module.scss'

export const SlideShow = () => {
    const slideImages = [
        { url: slide1, caption: 'Slide 1' },
        { url: slide2, caption: 'Slide 2' },
        { url: slide3, caption: 'Slide 3' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slideImages.length]);

    return (
        <div className={styles.slideshowcontainer}>
            <div
                className={styles.slides}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slideImages.map((slide, index) => (
                    <div className={styles.slide} key={index}>
                        <img src={slide.url} alt={slide.caption} />
                    </div>
                ))}
            </div>
        </div>
    );
};