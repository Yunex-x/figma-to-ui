'use client';

import { WalletIcon, GlobeIcon, DocumentTextIcon, CartIcon } from "./Icons";
const stats = [
  { label: "Today's Money", value: '$53,000', change: '+55%', positive: true, icon: WalletIcon },
  { label: "Today's Users", value: '2,300', change: '+5%', positive: true, icon: GlobeIcon },
  { label: 'New Clients', value: '+3,052', change: '-14%', positive: false, icon: DocumentTextIcon },
  { label: 'Total Sales', value: '$173,000', change: '+8%', positive: true, icon: CartIcon },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-[24px] mt-20">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[24px] h-[80px]"
        >
          <div className="flex items-start justify-between h-full">
            <div className="flex flex-col justify-between h-full">
              <p className="text-[12px] font-bold text-[#A0AEC0] leading-[150%]">{stat.label}</p>
             <div className="flex items-center gap-[8px]">
              <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%]">{stat.value}</h3>
              <p className={`text-[14px] font-bold leading-[140%] ${stat.positive ? 'text-[#48BB78]' : 'text-[#E53E3E]'}`}>
                {stat.change}
              </p>
                </div>
            </div>
            <div className="w-[45.43px] h-[45px] bg-[#4FD1C5] rounded-[12px] flex items-center justify-center shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] text-white">
              <stat.icon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}