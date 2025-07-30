"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

export default function HomePage() {
  const router = useRouter();
  const directionRef = React.useRef(1);
  const [isNavigating, setIsNavigating] = React.useState(false);
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isNavigating) return;
      if (e.deltaY > 0) {
        directionRef.current = 1;
        setIsNavigating(true);
        router.push("/features");
        setTimeout(() => setIsNavigating(false), 300);
      }
    },
    [router, isNavigating]
  );

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100vw" : "-100vw",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? "100vw" : "-100vw",
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen">
      <Header />
      <motion.section
        custom={directionRef.current}
        variants={variants}
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
        onWheel={handleWheel}
      >
        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: -100, x: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight "
            >
              MAX I & US
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -500 }} // 🔹 bắt đầu từ trái (-x)
              animate={{ opacity: 1, x: 0 }} // 🔹 trượt về 0
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Maxius is the only self-developed semiconductor company that
              focuses on developing High-Performance Servers. We provide
              specialized solutions tailored towards different sectors of the IT
              industry and strive to break into the global market as a leader in
              server technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Together, we will be the best in value and speed.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
