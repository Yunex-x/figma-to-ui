'use client';

import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { BuildIcon, CartIcon, RocketIcon, WalletIcon } from './Icons';

const barData = [
  { value: 100 },
  { value: 71 },
  { value: 38 },
  { value: 89 },
  { value: 153 },
  { value: 126 },
  { value: 144 },
  { value: 89 },
  { value: 50 },
];

const stats = [
  { icon: WalletIcon, label: 'Users', value: '32,984', progress: 66 },
  { icon: RocketIcon, label: 'Clicks', value: '2,42m', progress: 85 },
  { icon: CartIcon, label: 'Sales', value: '2,400$', progress: 40 },
  { icon: BuildIcon, label: 'Items', value: '320', progress: 60 },
];

export default function ActiveUsersChart() {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[32px] h-[500px]">
      <div className="mb-[24px]">
        <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[4px]">Active Users</h3>
        <p className="text-[14px] font-bold text-[#48BB78] leading-[140%]">(+23) than last week</p>
      </div>

      {/* Chart */}
      <div className="bg-gradient-to-br from-[#313860] to-[#151928] rounded-[12px] p-[24px] mb-[24px] h-[222px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <Bar dataKey="value" fill="#ffffff" radius={[15, 15, 0, 0]} barSize={7} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-[16px]">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-start gap-[12px]">
            <div className="w-[25.24px] h-[25px] bg-[#4FD1C5] rounded-[6px] flex items-center justify-center shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] text-white flex-shrink-0">
              <stat.icon />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-[#A0AEC0] leading-[150%] mb-[4px]">{stat.label}</p>
              <h4 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[8px]">{stat.value}</h4>
              <div className="h-[3px] bg-[#E2E8F0] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#4FD1C5] rounded-full" 
                  style={{ width: `${stat.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}