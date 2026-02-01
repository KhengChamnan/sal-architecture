'use client';

import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>SAL</Link>
                <Link href="/projects" className={styles.navLink}>PROJECTS</Link>
                <Link href="/residential" className={styles.navLink}>RESIDENTIAL</Link>
                <Link href="/commercial" className={styles.navLink}>COMMERCIAL</Link>
                <Link href="/about" className={styles.navLink}>ABOUT</Link>
                <Link href="/contact" className={styles.navLink}>CONTACT</Link>
            </nav>
        </header>
    );
}
