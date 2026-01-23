import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AuthorsTable from "./components/AuthorsTable";
import ProjectsTable from "./components/ProjectsTable";

export default function TablesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Sidebar />
      
      <div className="ml-[282px] min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 pt-[103.5px] px-[31.65px] pb-[66px]">
          <div className="max-w-[1600px] mx-auto space-y-[24px]">
            {/* Authors Table */}
            <AuthorsTable />
            
            {/* Projects Table */}
            <ProjectsTable />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}