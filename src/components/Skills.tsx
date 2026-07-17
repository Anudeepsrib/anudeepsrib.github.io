"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Database, Shield, Code2, Cloud, BarChart3 } from "lucide-react";
import Container from "@/components/ui/Container";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import SkillCategoryCard from "@/components/ui/SkillCategoryCard";
import { fadeUp, scaleIn, stagger } from "@/lib/animation";
import { skillCategories } from "@/data/skills";

const categoryIcons = [Bot, Database, Shield, Code2, Cloud, BarChart3];

export default function Skills() {
  return (
    <section className="premium-section relative z-10" id="skills">
      <div className="section-divider" />
      <Container>
        <MotionWrapper variants={fadeUp}>
          <SectionHeader
            title="Depth where production gets difficult."
            description="The tools matter. The architectural judgment behind retrieval, evaluation, safety, infrastructure, and data flow matters more."
          />
        </MotionWrapper>

        <MotionWrapper
          staggerChildren
          variants={stagger}
          className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.name} variants={scaleIn}>
              <SkillCategoryCard
                icon={categoryIcons[index]}
                title={category.name}
                description={category.description}
                techs={category.skills.map((skill) => skill.name)}
              />
            </motion.div>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  );
}
