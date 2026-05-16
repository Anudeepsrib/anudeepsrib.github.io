"use client";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function SplitText({
  text,
  className,
  as: Tag = "span",
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={{ display: "inline" }}>
      <span
        style={{
          overflow: "hidden",
          display: "inline-flex",
          flexWrap: "wrap",
          gap: "0.3em",
        }}
      >
        {words.map((word, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
