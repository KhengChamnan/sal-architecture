'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

interface HeroImage {
    src: string;
    alt: string;
}

interface HeroSectionProps {
    images: HeroImage[];
    autoPlayInterval?: number;
}

export default function HeroSection({ images, autoPlayInterval = 5000 }: HeroSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [images.length, autoPlayInterval]);

    return (
        <section className={styles.hero}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        quality={90}
                        className={styles.image}
                    />
                </div>
            ))}
            <div className={styles.overlay}>
                <h1 className={styles.title}>SAL ARCHITECTURE</h1>
            </div>
        </section>
    );
}
