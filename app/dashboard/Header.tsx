'use client';

import { BellIcon, PersonIcon, SearchIcon, SettingsIcon } from './Icons';
export default function Header() {
  return (
    <header className="bg-[#F8F9FA] border-b border-[#E2E8F0] px-[31.65px] h-[103.5px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-[8px] text-[12px] leading-[150%] mb-[4px]">
            <span className="text-[#A0AEC0]">Pages</span>
            <span className="text-[#A0AEC0]">/</span>
            <span className="text-[#2D3748] font-bold">Dashboard</span>
          </div>
          <h2 className="text-[14px] font-bold text-[#2D3748] leading-[140%]">Dashboard</h2>
        </div>

        <div className="flex items-center gap-[16px]">
          {/* Search */}
          <div className="flex items-center gap-[8px] bg-white border-[0.5px] border-[#E2E8F0] rounded-[15px] px-[16px] h-[39.5px]">
            <div className="text-[#2D3748]">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Type here..."
              className="text-[12px] text-[#A0AEC0] bg-transparent outline-none w-[120px] leading-[150%] placeholder:text-[#A0AEC0]"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-[16px]">
            <a href="#" className="flex items-center gap-[4px] text-[12px] font-bold text-[#718096] leading-[150%]">
              <PersonIcon />
              <span>Sign In</span>
            </a>
            <button className="text-[#718096] w-[12px] h-[12px]">
              <SettingsIcon />
            </button>
            <button className="text-[#718096] w-[12px] h-[12px]">
              <BellIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}