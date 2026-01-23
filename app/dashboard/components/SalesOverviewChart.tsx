'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', dark: 50, teal: 80 },
  { month: 'Feb', dark: 100, teal: 100 },
  { month: 'Mar', dark: 75, teal: 120 },
  { month: 'Apr', dark: 150, teal: 140 },
  { month: 'May', dark: 200, teal: 180 },
  { month: 'Jun', dark: 175, teal: 200 },
  { month: 'Jul', dark: 220, teal: 230 },
  { month: 'Aug', dark: 240, teal: 260 },
  { month: 'Sep', dark: 200, teal: 240 },
  { month: 'Oct', dark: 260, teal: 280 },
  { month: 'Nov', dark: 300, teal: 320 },
  { month: 'Dec', dark: 350, teal: 360 },
];

export default function SalesOverviewChart() {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[32px] h-[500px]">
      <div className="mb-[24px]">
        <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[4px]">Sales overview</h3>
        <p className="text-[14px] font-bold text-[#48BB78] leading-[140%]">(+5) more in 2021</p>
      </div>

      <div className="h-[296.5px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorTeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.54} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3748" stopOpacity={0.36} />
                <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 10, fill: '#CBD5E0', fontWeight: 700 }} 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10, fill: '#CBD5E0', fontWeight: 700 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 500]}
              ticks={[0, 100, 200, 300, 400, 500]}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="dark"
              stroke="#2D3748"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorDark)"
            />
            <Area
              type="monotone"
              dataKey="teal"
              stroke="#4FD1C5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorTeal)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}