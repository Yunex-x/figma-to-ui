'use client';

import { CheckCircleIcon } from "./Icons";
import { MoreVerticalIcon } from "./Icons";
const projects = [
  { name: 'Chakra Soft UI Version', budget: '$14,000', completion: 60, color: '#470137' },
  { name: 'Add Progress Track', budget: '$3,000', completion: 10, color: '#2684FF' },
  { name: 'Fix Platform Errors', budget: 'Not set', completion: 100, color: '#2EBD59' },
  { name: 'Launch our Mobile App', budget: '$32,000', completion: 100, color: '#2EBD59' },
  { name: 'Add the New Pricing Page', budget: '$400', completion: 25, color: '#DC395F' },
  { name: 'Redesign New Online Shop', budget: '$7,600', completion: 40, color: '#470137' },
];

export default function ProjectsTable() {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[32px] h-[550px]">
      <div className="flex items-center justify-between mb-[24px]">
        <div>
          <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[4px]">Projects</h3>
          <p className="text-[14px] font-bold text-[#A0AEC0] leading-[140%] flex items-center gap-[8px]">
            <span className="text-[#68D391]"><CheckCircleIcon /></span>
            <span>30 done this month</span>
          </p>
        </div>
        <button className="text-[#A0AEC0] w-[20px] h-[20px]">
          <MoreVerticalIcon />
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-[16px] text-[10px] font-bold text-[#A0AEC0] leading-[150%] pb-[12px] border-b border-[#E2E8F0] mb-[16px]">
        <div className="col-span-4">COMPANIES</div>
        <div className="col-span-3">MEMBERS</div>
        <div className="col-span-2">BUDGET</div>
        <div className="col-span-3">COMPLETION</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-0">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="grid grid-cols-12 gap-[16px] items-center py-[12px] border-b border-[#E2E8F0] last:border-0"
          >
            <div className="col-span-4 flex items-center gap-[12px]">
              <div 
                className="w-[20.19px] h-[19.5px] rounded flex-shrink-0" 
                style={{ backgroundColor: project.color }}
              ></div>
              <span className="text-[14px] font-bold text-[#2D3748] leading-[140%] truncate">
                {project.name}
              </span>
            </div>
            <div className="col-span-3">
              <div className="flex -space-x-[4px]">
                <div className="w-[23px] h-[23px] rounded-full bg-[#4318FF] border-2 border-white"></div>
                <div className="w-[23px] h-[23px] rounded-full bg-[#4318FF] border-2 border-white"></div>
              </div>
            </div>
            <div className="col-span-2">
              <span className="text-[14px] font-bold text-[#2D3748] leading-[140%]">{project.budget}</span>
            </div>
            <div className="col-span-3">
              <div className="flex items-center gap-[8px]">
                <span className="text-[14px] font-bold text-[#4FD1C5] leading-[140%] w-[36px]">
                  {project.completion}%
                </span>
                <div className="flex-1 h-[3px] bg-[#E2E8F0] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#4FD1C5] rounded-full" 
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}