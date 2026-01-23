'use client';

import ChartsSection from "./components/ChartsSection";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import Sidebar from "./components/Sidebar";
import StatsCards from "./components/StatsCards";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      <Sidebar />
      <main className="ml-[282px]  flex-1 overflow-x-hidden">
        <Header />
        <div className="px-[31.65px] py-[24px] space-y-[24px]">
          <StatsCards />
          <FeatureCards />
          <ChartsSection />
          <ProjectsSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}