'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectGrid.module.css';

export interface Project {
    id: string;
    title: string;
    location?: string;
    imageUrl: string;
    slug: string;
    featured?: boolean;
}

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className={styles.gridSection}>
            <div className={styles.grid}>
                {projects.map((project, index) => {
                    // Create masonry effect: every 3rd item is full-width
                    const isFullWidth = index % 5 === 0 && index !== 0;

                    return (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`}
                            className={`${styles.gridItem} ${isFullWidth ? styles.fullWidth : ''}`}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className={styles.image}
                                />
                                <div
                                    className={`${styles.overlay} ${hoveredId === project.id ? styles.visible : ''}`}
                                >
                                    <div className={styles.projectInfo}>
                                        <h3 className={styles.title}>{project.title}</h3>
                                        {project.location && (
                                            <p className={styles.location}>{project.location}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
