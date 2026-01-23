'use client';

import ChartsSection from "./ChartsSection";
import FeatureCards from "./FeatureCards";
import Footer from "./Footer";
import Header from "./Header";
import ProjectsSection from "./ProjectsSection";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden">
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