"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import Header from "@/components/header";
import ExpandableColumns from "@/components/expandableColumns";

export default function AboutPage() {
  const router = useRouter();
  const directionRef = useRef(1);
  const [isNavigating, setIsNavigating] = useState(false);
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (isNavigating) return;
      if (e.deltaY > 0) {
        directionRef.current = 1;
        setIsNavigating(true);
        router.push("/contact");
        setTimeout(() => setIsNavigating(false), 500);
      }
      if (e.deltaY < 0) {
        directionRef.current = -1;
        setIsNavigating(true);
        router.push("/features");
        setTimeout(() => setIsNavigating(false), 500);
      }
    },
    [router, isNavigating]
  );

  const columnsData = [
    {
      title: "Performance",
      description:
        "Blazing fast server speeds to handle all workloads effortlessly.",
    },
    {
      title: "Security",
      description: "Advanced security measures to protect your valuable data.",
    },
    {
      title: "Cloud Ready",
      description: "Scalable cloud infrastructure to grow with your business.",
    },
    {
      title: "Fast Deployment",
      description: "Quick setup and deployment for minimal downtime.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden mx-0 lg:mx-50"
        onWheel={handleWheel}
      >
        <ExpandableColumns columns={columnsData} />
      </motion.section>
    </main>
  );
}
