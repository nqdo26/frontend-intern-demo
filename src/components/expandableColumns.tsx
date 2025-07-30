"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ColumnItem {
  title: string;
  description: string;
  bgColor?: string;
}

interface ExpandableColumnsProps {
  columns: ColumnItem[];
}

export default function ExpandableColumns({ columns }: ExpandableColumnsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="flex flex-col lg:flex-row w-screen h-screen mt-16 lg:mt-0">
      {columns.map((col, index) => {
        const isActive = hovered === index;
        const isFirst = index === 0;
        const isLast = index === columns.length - 1;
        const borderClass =
          !isFirst && !isLast ? "sm:border-x border-gray-200" : "";

        return (
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative flex items-center justify-center cursor-pointer
                        overflow-hidden transition-all duration-500 z-10 ${borderClass}`}
            style={{
              flex: isActive ? 3 : 1,
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <div className="relative flex flex-col items-center justify-center text-center p-6 h-full w-full">
              <motion.h2 className="text-3xl font-bold transition-transform duration-500">
                {col.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : 500,
                }}
                transition={{ duration: 0.1 }}
                className="w-3/4 text-lg"
              >
                {col.description}
              </motion.p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
