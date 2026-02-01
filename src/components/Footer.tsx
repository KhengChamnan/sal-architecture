import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover-underline">
                    Instagram
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-underline">
                    LinkedIn
                </Link>
            </div>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} SAL Architecture. All rights reserved.
            </div>
        </footer>
    );
}
