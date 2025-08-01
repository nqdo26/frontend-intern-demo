"use client";

import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

export default function ContactPage() {
  const router = useRouter();
  const directionRef = React.useRef(1);
  const [isNavigating, setIsNavigating] = React.useState(false);
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isNavigating) return;
      if (e.deltaY < 0) {
        directionRef.current = -1;
        setIsNavigating(true);
        router.push("/about");
        setTimeout(() => setIsNavigating(false), 500);
      }
    },
    [router, isNavigating]
  );

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100vh" : "-100vh",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: number) => ({
      y: direction < 0 ? "100vh" : "-100vh",
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen">
      <Header />
      <motion.section
        custom={directionRef.current}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-100"
        onWheel={handleWheel}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -100, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Get in touch with us for more information about our products and
            services.
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}
