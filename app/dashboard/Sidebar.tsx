'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { HomeIcon, StatsChartIcon, CreditCardIcon, BuildIcon, PersonIcon, DocumentTextIcon, RocketIcon, HelpCircleIcon } from "./Icons";

interface NavItem {
  name: string;
  icon: React.ComponentType;
  path: string;
}

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const mainNavItems: NavItem[] = [
    { name: 'Dashboard', icon: HomeIcon, path: '/dashboard' },
    { name: 'Tables', icon: StatsChartIcon, path: '/dashboard/tables' },
    { name: 'Billing', icon: CreditCardIcon, path: '/dashboard/billing' },
    { name: 'RTL', icon: BuildIcon, path: '/dashboard/rtl' },
  ];

  const accountNavItems: NavItem[] = [
    { name: 'Profile', icon: PersonIcon, path: '/dashboard/profile' },
    { name: 'Sign In', icon: DocumentTextIcon, path: '/auth/login' },
    { name: 'Sign Up', icon: RocketIcon, path: '/auth/signup' },
  ];

  const isActive = (path: string) => pathname === path;

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleDocumentation = () => {
    window.open('https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus', '_blank');
  };
  return (
    <aside className="w-[248.83px] bg-[#F8F9FA]  ">
      {/* Logo */}
      <div className="h-[94.5px] flex items-center px-[22.63px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[23px] h-[23px] bg-[#2D3748] rounded"></div>
          <span className="text-[14px] font-bold text-[#2D3748] leading-[150%] tracking-[-0.02em]">
            PURITY UI DASHBOARD
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#E2E8F0]"></div>

      {/* Navigation */}
      <nav className="flex-1 px-[16px] pt-[22.5px] space-y-[8px]">
        {/* Main Navigation Items */}
        {mainNavItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-full flex items-center gap-[12px] px-[16px] h-[54px] rounded-[15px] transition-all ${active
                  ? 'bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]'
                  : hoveredItem === item.name
                    ? 'bg-white/50'
                    : ''
                }`}
            >
              <div className={`w-[30.28px] h-[30px] rounded-[12px] flex items-center justify-center transition-colors ${active
                  ? 'bg-[#4FD1C5] text-white'
                  : 'bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] text-[#4FD1C5]'
                }`}>
                <Icon />
              </div>
              <span className={`text-[12px] font-bold leading-[150%] ${active ? 'text-[#2D3748]' : 'text-[#A0AEC0]'
                }`}>
                {item.name}
              </span>
            </button>
          );
        })}

        {/* Account Pages Section */}
        <div className="pt-[24px]">
          <h3 className="px-[16px] text-[12px] font-bold text-[#2D3748] leading-[150%] mb-[8px]">
            ACCOUNT PAGES
          </h3>

          {accountNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`w-full flex items-center gap-[12px] px-[16px] h-[54px] rounded-[15px] transition-all ${active
                    ? 'bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)]'
                    : hoveredItem === item.name
                      ? 'bg-white/50'
                      : ''
                  }`}
              >
                <div className={`w-[30.28px] h-[30px] rounded-[12px] flex items-center justify-center transition-colors ${active
                    ? 'bg-[#4FD1C5] text-white'
                    : 'bg-white shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] text-[#4FD1C5]'
                  }`}>
                  <Icon />
                </div>
                <span className={`text-[12px] font-bold leading-[150%] ${active ? 'text-[#2D3748]' : 'text-[#A0AEC0]'
                  }`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Help Card - positioned at bottom */}
      <div className="px-[16px] pb-[24px] ">
        <div className="w-[220.06px] h-[169.5px] bg-[#4FD1C5] rounded-[15px] p-[24px] relative overflow-hidden">
          {/* Background Circles */}
          <div className="relative z-10 ">
            <div className="w-[35.33px] h-[35px] bg-white rounded-[12px] flex items-center justify-center mb-[16px] text-[#4FD1C5]">
              <HelpCircleIcon />
            </div>
            <h3 className="text-[14px] font-bold text-white leading-[140%] mb-[4px]">Need help?</h3>
            <p className="text-[12px] text-white leading-[150%] mb-[16px]">Please check our docs</p>
            <button
              onClick={handleDocumentation}
              className="bg-white ml-6  text-[#2D3748] text-[10px] font-bold px-[12px] py-[6px] rounded-[12px] leading-[150%] text-center hover:bg-gray-50 transition-colors"
            >
              DOCUMENTATION
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}