'use client';

export default function Footer() {
  return (
    <footer className="flex items-center justify-between pt-[32px]">
      <p className="text-[12px] text-[#A0AEC0] leading-[150%]">
        @ 2021, Made with ❤️ by Creative Tim & Simmmple for a better web
      </p>
      <div className="flex gap-[24px]">
        {['Creative Tim', 'Simmmple', 'Blog', 'License'].map((link) => (
          <a 
            key={link} 
            href="#" 
            className="text-[12px] font-bold text-[#A0AEC0] leading-[150%] hover:text-[#2D3748]"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}