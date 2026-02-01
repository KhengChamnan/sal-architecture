import ProjectGrid, { Project } from '@/components/ProjectGrid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'Glass House',
    location: 'California, USA',
    imageUrl: '/project-1.png',
    slug: 'glass-house',
    featured: true,
  },
  {
    id: '2',
    title: 'Brutalist Tower',
    location: 'Berlin, Germany',
    imageUrl: '/project-2.png',
    slug: 'brutalist-tower',
  },
  {
    id: '3',
    title: 'Urban Apartments',
    location: 'Copenhagen, Denmark',
    imageUrl: '/project-3.png',
    slug: 'urban-apartments',
  },
  {
    id: '4',
    title: 'Cultural Center',
    location: 'Baku, Azerbaijan',
    imageUrl: '/project-4.png',
    slug: 'cultural-center',
    featured: true,
  },
  {
    id: '5',
    title: 'Glass House II',
    location: 'California, USA',
    imageUrl: '/project-1.png',
    slug: 'glass-house-2',
  },
  {
    id: '6',
    title: 'Concrete Tower',
    location: 'Tokyo, Japan',
    imageUrl: '/project-2.png',
    slug: 'concrete-tower',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Title Section */}
        <section className={styles.titleSection}>
          <h1 className={styles.mainTitle}>sal</h1>
        </section>

        {/* Quote Section */}
        <section className={styles.quoteSection}>
          <p className={styles.quoteParagraph}>
            is an architecture studio with a focus on contemporary residential and commercial design.
          </p>
          <p className={styles.quoteParagraph}>
            We create spaces that balance minimalist aesthetics with functional living, respecting the environment and local craftsmanship.
          </p>
          <p className={styles.quoteParagraph}>
            Inspired by modern culture, we design timeless architecture for the people who will inhabit these spaces for generations.
          </p>
        </section>

        {/* Project Grid */}
        <section className={styles.projectSection}>
          <ProjectGrid projects={featuredProjects} />
        </section>
      </main>
      <Footer />
    </>
  );
}
