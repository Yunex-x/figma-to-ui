'use client';

import { BellIcon, CartIcon, CheckCircleIcon, CreditCardIcon, DocumentTextIcon } from './Icons';
const orders = [
  { icon: BellIcon, color: '#4FD1C5', title: '$2400, Design changes', time: '22 DEC 7:20 PM' },
  { icon: DocumentTextIcon, color: '#E53E3E', title: 'New order #4219423', time: '21 DEC 11:21 PM' },
  { icon: CartIcon, color: '#4299E1', title: 'Server Payments for April', time: '21 DEC 9:28 PM' },
  { icon: CreditCardIcon, color: '#F6AD55', title: 'New card added for order #3210145', time: '20 DEC 3:52 PM' },
  { icon: DocumentTextIcon, color: '#9F7AEA', title: 'Unlock packages for Development', time: '19 DEC 11:35 PM' },
  { icon: DocumentTextIcon, color: '#470137', title: 'New order #9851258', time: '18 DEC 4:41 PM' },
];

export default function OrdersTimeline() {
  return (
    <div className="bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[32px] h-[550px]">
      <div className="mb-[24px]">
        <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[4px]">Orders overview</h3>
        <p className="text-[14px] font-bold text-[#48BB78] leading-[140%] flex items-center gap-[4px]">
          <span className="text-[#68D391]"><CheckCircleIcon /></span>
          <span>+30% this month</span>
        </p>
      </div>

      <div className="space-y-[24px]">
        {orders.map((order, i) => (
          <div key={i} className="flex gap-[16px]">
            <div className="flex flex-col items-center">
              <div 
                className="w-[16.15px] h-[16px] rounded flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: order.color }}
              >
                <div className="w-[8px] h-[8px] text-white">
                  <order.icon />
                </div>
              </div>
              {i < orders.length - 1 && (
                <div className="w-[2px] flex-1 bg-[#E2E8F0] mt-[8px] mb-[8px] h-[37px]"></div>
              )}
            </div>
            <div className="flex-1 pb-[13px]">
              <h4 className="text-[14px] font-bold text-[#2D3748] leading-[140%] mb-[4px]">{order.title}</h4>
              <p className="text-[12px] font-bold text-[#A0AEC0] leading-[150%]">{order.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}