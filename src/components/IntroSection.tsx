import styles from './IntroSection.module.css';

interface IntroSectionProps {
    text: string;
}

export default function IntroSection({ text }: IntroSectionProps) {
    return (
        <section className={styles.intro}>
            <div className={styles.container}>
                <p className={styles.text}>{text}</p>
            </div>
        </section>
    );
}
