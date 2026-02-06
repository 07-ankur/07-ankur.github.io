"use client";
import { useNavigation } from "./context/NavigationContext";
import InfoPage from "./Info";
import WorkPage from "./Work";
import ProjectsPage from "./Projects";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageVariants } from "./animations";

export default function Home() {
  const { activeTab } = useNavigation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <InfoPage />;
      case "work":
        return <WorkPage />;
      case "projects":
        return <ProjectsPage />;
      default:
        return <InfoPage />;
    }
  };

  return (
    <main className="container mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}