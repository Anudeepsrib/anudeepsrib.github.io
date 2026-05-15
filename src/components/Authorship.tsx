'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import MotionWrapper from '@/components/ui/MotionWrapper';
import PublicationCard from '@/components/ui/PublicationCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { fadeUp, scaleIn, stagger } from '@/lib/animation';

const publications = [
    {
        title: 'Transfer Learning for Groundfish Recognition',
        venue: 'UMass Dartmouth, 2024',
        description:
            'Cross-database recognition using YOLOv8 and ResNet50, achieving 94.10% mAP for sustainable fisheries management.',
        link: 'https://doi.org/10.62791/20352',
    },
    {
        title: 'Blueprint of IoT for Smart Cities',
        venue: 'CRC Press / Taylor & Francis, 2024',
        description:
            'Co-authored handbook chapter on IoT blueprinting and management challenges for smart city development.',
        link: 'https://doi.org/10.1201/9781003225317',
    },
];

export default function Authorship() {
    return (
        <section className="premium-section relative z-10" id="research">
            <div className="section-divider" />
            <Container>
                <MotionWrapper variants={fadeUp}>
                    <SectionHeader
                        title="Research"
                        description="Peer-reviewed publications in computer vision and IoT."
                    />
                </MotionWrapper>

                <MotionWrapper
                    staggerChildren
                    variants={stagger}
                    className="grid gap-3 md:grid-cols-2"
                >
                    {publications.map((publication) => (
                        <motion.div key={publication.title} variants={scaleIn}>
                            <PublicationCard {...publication} />
                        </motion.div>
                    ))}
                </MotionWrapper>
            </Container>
        </section>
    );
}
