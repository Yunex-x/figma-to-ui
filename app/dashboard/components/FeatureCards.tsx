'use client';

import { ArrowForwardIcon } from "./Icons";


export default function FeatureCards() {
  return (
    <div className="grid grid-cols-12 gap-[24px]">
      {/* Purity UI Card */}
      <div className="col-span-7 bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] p-[32px] h-[290.5px]">
        <div className="flex gap-[32px] h-full">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-[12px] font-bold text-[#A0AEC0] leading-[150%] mb-[8px]">
                Built by developers
              </p>
              <h3 className="text-[18px] font-bold text-[#2D3748] leading-[140%] mb-[12px]">
                Purity UI Dashboard
              </h3>
              <p className="text-[14px] text-[#A0AEC0] leading-[140%]">
                From colors, cards, typography to complex elements, you will find the full documentation.
              </p>
            </div>
            <a href="#" className="inline-flex items-center gap-[8px] text-[10px] font-bold text-[#2D3748] leading-[150%]">
              READ MORE
              <ArrowForwardIcon />
            </a>
          </div>
          <div className="w-[363.41px] h-[255.5px] bg-[#4FD1C5] rounded-[12px] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#313860] to-[#151928] flex items-center justify-center">
              <div className="text-[48px] font-bold text-white opacity-20">PURITY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Work with Rockets Card */}
      <div className="col-span-5 bg-white rounded-[15px] shadow-[0px_3.5px_5.5px_rgba(0,0,0,0.02)] overflow-hidden h-[290.5px]">
        <div className="w-full h-full bg-gradient-to-b from-[#313860] to-[#151928] p-[32px] flex flex-col justify-end relative">
          <div className="absolute inset-0 bg-[url('/api/placeholder/660/290')] bg-cover bg-center opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-[18px] font-bold text-white leading-[140%] mb-[12px]">
              Work with the Rockets
            </h3>
            <p className="text-[14px] text-white leading-[140%] mb-[24px]">
              Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.
            </p>
            <a href="#" className="inline-flex items-center gap-[8px] text-[10px] font-bold text-white leading-[150%]">
              READ MORE
              <ArrowForwardIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}