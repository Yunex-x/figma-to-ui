import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="fixed top-11 left-[18px] h-[1016px] w-[246px] text-sm">
      {/* Logo */}
      <div className="ml-6 flex items-center gap-3">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.8795 0H1.1219C0.502293 0 0 0.502293 0 1.1219V10.5297C0 11.1493 0.502293 11.6516 1.1219 11.6516H5.17558V20.8795C5.17522 21.1769 5.29311 21.4623 5.50329 21.6727C5.71347 21.8831 5.99869 22.0014 6.29611 22.0014H15.7039C16.3235 22.0014 16.8258 21.4991 16.8258 20.8795V11.6557H20.8795C21.1769 11.6557 21.4621 11.5375 21.6723 11.327C21.8825 11.1166 22.0004 10.8312 22 10.5338V1.1219C22.0004 0.824482 21.8825 0.539118 21.6723 0.328681C21.4621 0.118244 21.1769 0 20.8795 0ZM1.30042 1.30179H10.3498V10.3512H1.30042V1.30179ZM15.5254 20.701H6.476V11.6557H15.5254V20.701ZM20.6996 10.3512H11.6502V1.30179H20.6996V10.3512Z" fill="#2D3748"/>
<path d="M7.44831 7.32455C7.70457 7.56505 8.10548 7.55869 8.35399 7.31018C8.60249 7.06167 8.60885 6.66077 8.36835 6.4045L6.2907 4.32686C6.03595 4.07448 5.62542 4.07448 5.37066 4.32686L3.28752 6.4045C3.11436 6.56701 3.04345 6.81092 3.10248 7.04093C3.16151 7.27094 3.34112 7.45055 3.57114 7.50959C3.80115 7.56862 4.04506 7.4977 4.20756 7.32455L5.82519 5.70692L7.44831 7.32455Z" fill="#2D3748"/>
<path d="M14.5573 7.32455L16.1749 5.70692L17.7925 7.32455C18.0488 7.56505 18.4497 7.55869 18.6982 7.31018C18.9467 7.06167 18.9531 6.66077 18.7126 6.40451L16.6349 4.32686C16.3801 4.07448 15.9696 4.07448 15.7149 4.32686L13.6372 6.40451C13.3967 6.66077 13.4031 7.06167 13.6516 7.31018C13.9001 7.55869 14.301 7.56505 14.5573 7.32455Z" fill="#2D3748"/>
<path d="M9.38152 14.6767C9.1249 14.4366 8.72399 14.4435 8.47585 14.6924C8.2277 14.9413 8.22195 15.3422 8.46285 15.5981L10.5405 17.6744C10.6624 17.7966 10.8279 17.8654 11.0005 17.8654C11.1731 17.8654 11.3387 17.7966 11.4605 17.6744L13.5382 15.5981C13.7028 15.4338 13.7672 15.1941 13.7072 14.9694C13.6471 14.7446 13.4718 14.569 13.2471 14.5087C13.0225 14.4483 12.7827 14.5123 12.6181 14.6767L11.0005 16.2957L9.38152 14.6767Z" fill="#2D3748"/>
</svg>

        <span className="font-bold text-gray-700">
          PURITY UI DASHBOARD
        </span>
      </div>

      <hr className="my-7 ml-[6.5px] w-[233px] border-slate-200" />

      {/* Menu */}
      <nav className="ml-[13.5px] flex flex-col gap-3">
        {/* Active */}
        <a className="flex items-center h-[54px] rounded-2xl bg-white shadow px-4">
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-xl bg-teal-300">
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_78)">
<path d="M7.66289 2.96748C7.61927 2.92575 7.56124 2.90247 7.50088 2.90247C7.44052 2.90247 7.38248 2.92575 7.33887 2.96748L1.94531 8.11992C1.92241 8.14183 1.90418 8.16816 1.89175 8.19731C1.87931 8.22647 1.87291 8.25785 1.87295 8.28955L1.87207 13.1253C1.87207 13.3739 1.97084 13.6124 2.14666 13.7882C2.32247 13.964 2.56093 14.0628 2.80957 14.0628H5.625C5.74932 14.0628 5.86855 14.0134 5.95645 13.9255C6.04436 13.8376 6.09375 13.7184 6.09375 13.594V9.60966C6.09375 9.5475 6.11844 9.48789 6.1624 9.44393C6.20635 9.39998 6.26596 9.37529 6.32812 9.37529H8.67187C8.73403 9.37529 8.79365 9.39998 8.8376 9.44393C8.88156 9.48789 8.90625 9.5475 8.90625 9.60966V13.594C8.90625 13.7184 8.95563 13.8376 9.04354 13.9255C9.13145 14.0134 9.25068 14.0628 9.375 14.0628H12.1893C12.4379 14.0628 12.6764 13.964 12.8522 13.7882C13.028 13.6124 13.1268 13.3739 13.1268 13.1253V8.28955C13.1268 8.25785 13.1204 8.22647 13.108 8.19731C13.0955 8.16816 13.0773 8.14183 13.0544 8.11992L7.66289 2.96748Z" fill="white"/>
<path d="M14.3824 7.15369L12.191 5.0572V1.87585C12.191 1.75153 12.1416 1.63231 12.0537 1.5444C11.9658 1.45649 11.8465 1.4071 11.7222 1.4071H10.316C10.1917 1.4071 10.0724 1.45649 9.98452 1.5444C9.89661 1.63231 9.84722 1.75153 9.84722 1.87585V2.81335L8.15035 1.19089C7.99156 1.03035 7.75543 0.938354 7.50025 0.938354C7.24596 0.938354 7.01041 1.03035 6.85162 1.19119L0.620177 7.1531C0.437951 7.32888 0.415099 7.61804 0.580919 7.80847C0.622559 7.85654 0.673545 7.89563 0.730772 7.92337C0.788 7.9511 0.850273 7.9669 0.913802 7.96981C0.977331 7.97271 1.04079 7.96266 1.10031 7.94026C1.15983 7.91787 1.21417 7.88359 1.26002 7.83952L7.33912 2.03054C7.38274 1.98882 7.44077 1.96553 7.50113 1.96553C7.56149 1.96553 7.61953 1.98882 7.66314 2.03054L13.7428 7.83952C13.8324 7.92541 13.9523 7.97228 14.0764 7.96986C14.2005 7.96745 14.3185 7.91594 14.4046 7.82663C14.5845 7.64031 14.5696 7.33269 14.3824 7.15369Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2_78">
<rect width="15" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
          </div>
          <span className="ml-3 font-bold text-gray-700">
            Dashboard
          </span>
        </a>

        {/* Item */}
        {[
          { label: "Tables", icon: "/chart.svg" },
          { label: "Billing", icon: "/default.svg" },
          { label: "RTL", icon: "/default1.svg" },
        ].map((item) => (
          <a
            key={item.label}
            className="ml-4 flex items-center gap-3"
          >
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-xl bg-white shadow">
              <Image src={item.icon} alt="" width={15} height={15} />
            </div>
            <span className="font-bold text-slate-400">
              {item.label}
            </span>
          </a>
        ))}

        {/* Section */}
        <span className="ml-4 mt-6 text-xs font-bold text-gray-700">
          ACCOUNT PAGES
        </span>

        {[
          { label: "Profile", icon: "/profile.svg" },
          { label: "Sign In", icon: "/sign.svg" },
          { label: "Sign Up", icon: "/log.svg" },
        ].map((item) => (
          <a
            key={item.label}
            className="ml-4 flex items-center gap-3"
          >
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-xl bg-white shadow">
              <Image src={item.icon} alt="" width={15} height={15} />
            </div>
            <span className="font-bold text-slate-400">
              {item.label}
            </span>
          </a>
        ))}
      </nav>

      {/* Help card */}
      <div className="relative mt-16 h-[214px] px-4">
        <div className="absolute inset-x-4 top-0 rounded-2xl bg-gradient-to-br from-teal-300 to-indigo-400 p-4 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white mb-3">
            <img src="/Icon.svg"  />
          </div>

          <h3 className="font-bold">Need help?</h3>
          <p className="text-xs">Please check our docs</p>

          <button className="mt-4 w-full rounded-xl bg-white py-2 text-[10px] font-bold text-gray-700">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </aside>
  );
}
