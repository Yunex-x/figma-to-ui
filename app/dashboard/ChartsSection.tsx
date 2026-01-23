'use client';

import ActiveUsersChart from "./ActiveUsersChart";
import SalesOverviewChart from "./SalesOverviewChart";


export default function ChartsSection() {
  return (
    <div className="grid grid-cols-12 gap-[24px]">
      <div className="col-span-5">
        <ActiveUsersChart />
      </div>
      <div className="col-span-7">
        <SalesOverviewChart />
      </div>
    </div>
  );
}