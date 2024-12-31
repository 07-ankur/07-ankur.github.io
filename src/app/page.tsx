"use client";
import { useNavigation } from "./context/NavigationContext";
import InfoPage from "./Info";
import WorkPage from "./Work";
import ProjectsPage from "./Projects";
import { useEffect } from "react";

export default function Home() {
  const { activeTab } = useNavigation();

  useEffect(() => {}, [activeTab]);

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
      <div className="transition-opacity duration-300 ease-in-out">
        {renderContent()}
      </div>
    </main>
  );
}