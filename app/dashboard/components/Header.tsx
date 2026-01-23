'use client';

import { usePathname } from 'next/navigation';
import { BellIcon, PersonIcon, SearchIcon, SettingsIcon } from './Icons';

export default function Header() {
  const pathname = usePathname();
  
  // Get page name from pathname
  const getPageName = () => {
    const segments = pathname.split('/').filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1) : 'Dashboard';
  };

  return (
    <header className="fixed top-0 left-[282px] right-0 bg-[#F8F9FA] h-[103.5px] flex items-center px-[31.65px] z-10">
      <div className="flex items-center justify-between w-full">
        {/* Breadcrumb */}
        <div>
          <div className="flex items-center gap-[8px] text-[12px] leading-[150%] mb-[4.5px]">
            <span className="text-[#A0AEC0]">Pages</span>
            <span className="text-[#A0AEC0]">/</span>
            <span className="text-[#2D3748] font-bold">{getPageName()}</span>
          </div>
          <h2 className="text-[14px] font-bold text-[#2D3748] leading-[140%]">
            {getPageName()}
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-[29px]">
          {/* Search */}
          <div className="flex items-center gap-[10.5px] bg-white border-[0.5px] border-[#E2E8F0] rounded-[15px] px-[18.75px] h-[39.5px]">
            <div className="w-[15px] h-[15px] text-[#2D3748]">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Type here..."
              className="text-[12px] text-[#A0AEC0] bg-transparent outline-none w-[148px] leading-[150%] placeholder:text-[#A0AEC0]"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-[29px]">
            <a 
              href="/auth/login" 
              className="flex items-center gap-[4px] text-[12px] font-bold text-[#718096] leading-[150%] hover:text-[#2D3748] transition-colors"
            >
              <div className="w-[12px] h-[12px]">
                <PersonIcon />
              </div>
              <span>Sign In</span>
            </a>
            <button className="w-[12px] h-[12px] text-[#718096] hover:text-[#2D3748] transition-colors">
              <SettingsIcon />
            </button>
            <button className="w-[12px] h-[12px] text-[#718096] hover:text-[#2D3748] transition-colors">
              <BellIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}