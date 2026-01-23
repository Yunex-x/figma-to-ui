'use client';

import { EditIcon, MoreVertIcon } from './Icons';

interface Author {
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'online' | 'offline';
  employed: string;
  avatar: string;
}

const authors: Author[] = [
  {
    name: 'Esthera Jackson',
    email: 'esthera@simmmple.com',
    role: 'Manager',
    department: 'Organization',
    status: 'online',
    employed: '14/06/21',
    avatar: '#4FD1C5'
  },
  {
    name: 'Alexa Liras',
    email: 'alexa@simmmple.com',
    role: 'Programmer',
    department: 'Developer',
    status: 'offline',
    employed: '14/06/21',
    avatar: '#4FD1C5'
  },
  {
    name: 'Laurent Michael',
    email: 'laurent@simmmple.com',
    role: 'Executive',
    department: 'Projects',
    status: 'online',
    employed: '14/06/21',
    avatar: '#4FD1C5'
  },
  {
    name: 'Freduardo Hill',
    email: 'freduardo@simmmple.com',
    role: 'Manager',
    department: 'Organization',
    status: 'online',
    employed: '14/06/21',
    avatar: '#4FD1C5'
  },
  {
    name: 'Daniel Thomas',
    email: 'daniel@simmmple.com',
    role: 'Programmer',
    department: 'Developer',
    status: 'offline',
    employed: '14/06/21',
    avatar: '#4FD1C5'
  },
  {
    name: 'Mark Wilson',
    email: 'mark@simmmple.com',
    role: 'Designer',
    department: 'UI/UX Design',
    status: 'offline',
    employed: '14/06/21',
    avatar: '#4FD1C5'
  }
];

export default function AuthorsTable() {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[22.5px]">
      {/* Header */}
      <div className="mb-[24px]">
        <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-0">
          Authors Table
        </h3>
      </div>

      {/* Table */}
      <div className="w-full">
        {/* Table Headers */}
        <div className="flex items-center pb-[11px] border-b border-[#E2E8F0] mb-[11px]">
          <div className="w-[724.5px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              AUTHOR
            </span>
          </div>
          <div className="w-[273px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              FUNCTION
            </span>
          </div>
          <div className="w-[247.5px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              STATUS
            </span>
          </div>
          <div className="w-[247px]">
            <span className="text-[10px] font-bold text-[#A0AEC0] leading-[150%]">
              EMPLOYED
            </span>
          </div>
          <div className="w-[63px]"></div>
        </div>

        {/* Table Rows */}
        {authors.map((author, index) => (
          <div 
            key={index} 
            className="flex items-center py-[15.5px] border-b border-[#E2E8F0] last:border-b-0"
          >
            {/* Author */}
            <div className="w-[724.5px] flex items-center gap-[15px]">
              <div 
                className="w-[40px] h-[40px] rounded-[12px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]"
                style={{ background: author.avatar }}
              />
              <div>
                <p className="text-[14px] font-bold text-[#2D3748] leading-[140%]">
                  {author.name}
                </p>
                <p className="text-[14px] text-[#718096] leading-[140%]">
                  {author.email}
                </p>
              </div>
            </div>

            {/* Function */}
            <div className="w-[273px]">
              <p className="text-[14px] font-bold text-[#2D3748] leading-[140%]">
                {author.role}
              </p>
              <p className="text-[14px] text-[#718096] leading-[140%]">
                {author.department}
              </p>
            </div>

            {/* Status */}
            <div className="w-[247.5px]">
              <span 
                className={`inline-flex items-center justify-center px-[10.5px] h-[25px] rounded-[8px] text-[14px] font-bold leading-[140%] text-white ${
                  author.status === 'online' ? 'bg-[#48BB78]' : 'bg-[#CBD5E0]'
                }`}
              >
                {author.status === 'online' ? 'Online' : 'Offline'}
              </span>
            </div>

            {/* Employed */}
            <div className="w-[247px]">
              <p className="text-[14px] font-bold text-[#2D3748] leading-[140%] text-center">
                {author.employed}
              </p>
            </div>

            {/* Action */}
            <div className="w-[63px] flex justify-end">
              <button className="text-[12px] font-bold text-[#718096] leading-[150%] hover:text-[#2D3748] transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}