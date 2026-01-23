'use client';

import Image from 'next/image';
import { MoreVertIcon } from './Icons';
interface Project {
  name: string;
  logo: string;
  logoType: 'image' | 'color';
  budget: string;
  status: string;
  completion: number;
}

const projects: Project[] = [
  {
    name: 'Chakra Soft UI Version',
    logo: '#FF61F6', // Adobe XD color
    logoType: 'color',
    budget: '$14,000',
    status: 'Working',
    completion: 60
  },
  {
    name: 'Add Progress Track',
    logo: '#2684FF', // Jira color
    logoType: 'color',
    budget: '$3,000',
    status: 'Canceled',
    completion: 10
  },
  {
    name: 'Fix Platform Errors',
    logo: 'slack', // Slack logo
    logoType: 'image',
    budget: 'Not set',
    status: 'Done',
    completion: 100
  },
  {
    name: 'Launch our Mobile App',
    logo: '#2EBD59', // Spotify color
    logoType: 'color',
    budget: '$32,000',
    status: 'Done',
    completion: 100
  },
  {
    name: 'Add the New Pricing Page',
    logo: '#2684FF', // Jira color
    logoType: 'color',
    budget: '$400',
    status: 'Working',
    completion: 25
  }
];

export default function ProjectsTable() {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[22.5px]">
      {/* Header */}
      <div className="mb-[24px]">
        <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[8px]">
          Projects
        </h3>
        <div className="flex items-center gap-[4px]">
          <div className="w-[15px] h-[15px] flex items-center justify-center">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M7.5 0C3.36 0 0 3.36 0 7.5C0 11.64 3.36 15 7.5 15C11.64 15 15 11.64 15 7.5C15 3.36 11.64 0 7.5 0ZM6 11.25L2.25 7.5L3.3075 6.4425L6 9.1275L11.6925 3.435L12.75 4.5L6 11.25Z" fill="#68D391"/>
            </svg>
          </div>
          <span className="text-[14px] font-bold text-[#A0AEC0] leading-[140%]">
            30 done this month
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="w-full">
        {/* Table Headers */}
        <div className="flex items-center pb-[11px] border-b border-[#E2E8F0] mb-[11px]">
          <div className="w-[664px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              COMPANIES
            </span>
          </div>
          <div className="w-[276.5px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              BUDGET
            </span>
          </div>
          <div className="w-[285.5px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              STATUS
            </span>
          </div>
          <div className="w-[264.5px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              COMPLETION
            </span>
          </div>
          <div className="w-[64.5px]"></div>
        </div>

        {/* Table Rows */}
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex items-center py-[11.5px] border-b border-[#E2E8F0] last:border-b-0"
          >
            {/* Company */}
            <div className="w-[664px] flex items-center gap-[17px]">
              <div 
                className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center"
                style={{ 
                  background: project.logoType === 'color' ? project.logo : 'transparent' 
                }}
              >
                {project.logoType === 'image' && (
                  <div className="w-full h-full bg-gray-200 rounded-[4px]" />
                )}
              </div>
              <p className="text-[14px] font-bold text-[#2D3748] leading-[140%]">
                {project.name}
              </p>
            </div>

            {/* Budget */}
            <div className="w-[276.5px]">
              <p className="text-[14px] font-bold text-[#2D3748] leading-[140%]">
                {project.budget}
              </p>
            </div>

            {/* Status */}
            <div className="w-[285.5px]">
              <p className="text-[14px] font-bold text-[#2D3748] leading-[140%] text-center">
                {project.status}
              </p>
            </div>

            {/* Completion */}
            <div className="w-[264.5px]">
              <div className="flex items-start gap-[8px]">
                <span className="text-[14px] font-bold text-[#4FD1C5] leading-[140%]">
                  {project.completion}%
                </span>
                <div className="flex-1 pt-[8px]">
                  <div className="w-[125px] h-[6px] bg-[#E2E8F0] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#4FD1C5] rounded-full"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="w-[64.5px] flex justify-end">
              <button className="w-[20px] h-[20px] text-[#A0AEC0] hover:text-[#2D3748] transition-colors">
                <MoreVertIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}