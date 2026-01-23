'use client';

import OrdersTimeline from "./OrdersTimeline";
import ProjectsTable from "./ProjectsTable";


export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-12 gap-[24px]">
      <div className="col-span-7">
        <ProjectsTable />
      </div>
      <div className="col-span-5">
        <OrdersTimeline />
      </div>
    </div>
  );
}