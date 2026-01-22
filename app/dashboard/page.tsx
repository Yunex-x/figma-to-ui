export default function DashboardPage() {
    return (
        <div
            className="
        relative
        w-[1920px]
        h-[1580px]
        bg-[#F8F9FA]
      "
        >
            {/* ================= Sidebar ================= */}
            <div
                className="
          absolute
          left-[9px]
          top-[44px]
          w-[248.83px]
          h-[1015.5px]
        "
            >
                {/* ================= Logo ================= */}
                <div className="absolute left-[33.23px] top-0 w-[199.87px] h-[23px] flex items-center gap-3">
                    <div className="w-[22px] h-[22px] bg-gray-200 rounded" />
                    <span className="text-[14px] font-bold text-[#2D3748]">
                        PURITY UI DASHBOARD
                    </span>
                </div>

                {/* Divider */}
                <div className="absolute left-[15.56px] top-[94.5px] w-[235.46px] h-px bg-gray-200" />

                {/* ================= Menu ================= */}
                <div className="absolute left-[22.63px] top-[117px] w-[221.58px] h-[408px]">

                    {/* Dashboard (ACTIVE) */}
                    <div className="absolute left-0 top-0 w-[221.58px] h-[54px] bg-white rounded-[15px] shadow">
                        <div className="absolute left-[16.15px] top-[12px] w-[30.28px] h-[30px] bg-[#4FD1C5] rounded-[12px]" />
                        <span className="absolute left-[58.55px] top-[18px] text-[12px] font-bold text-[#2D3748]">
                            Dashboard
                        </span>
                    </div>

                    {/* Tables */}
                    <div className="absolute left-[16.15px] top-[66px] w-[80.25px] h-[30px]">
                        <div className="absolute w-[30.28px] h-[30px] bg-white rounded-[12px] shadow" />
                        <span className="absolute left-[42.4px] top-[6px] text-[12px] font-bold text-[#A0AEC0]">
                            Tables
                        </span>
                    </div>

                    {/* Billing */}
                    <div className="absolute left-[16.15px] top-[120px] w-[79.75px] h-[30px]">
                        <div className="absolute w-[30.28px] h-[30px] bg-white rounded-[12px] shadow" />
                        <span className="absolute left-[42.4px] top-[6px] text-[12px] font-bold text-[#A0AEC0]">
                            Billing
                        </span>
                    </div>

                    {/* RTL */}
                    <div className="absolute left-[16.15px] top-[174px] w-[66.12px] h-[30px]">
                        <div className="absolute w-[30.28px] h-[30px] bg-white rounded-[12px] shadow" />
                        <span className="absolute left-[42.4px] top-[6px] text-[12px] font-bold text-[#A0AEC0]">
                            RTL
                        </span>
                    </div>

                    {/* ACCOUNT PAGES */}
                    <div className="absolute left-[16.15px] top-[228px] text-[12px] font-bold text-[#2D3748]">
                        ACCOUNT PAGES
                    </div>

                    {/* Profile */}
                    <div className="absolute left-[16.15px] top-[270px] w-[80.25px] h-[30px]">
                        <div className="absolute w-[30.28px] h-[30px] bg-white rounded-[12px] shadow" />
                        <span className="absolute left-[42.4px] top-[6px] text-[12px] font-bold text-[#A0AEC0]">
                            Profile
                        </span>
                    </div>

                    {/* Sign In */}
                    <div className="absolute left-[16.15px] top-[324px] w-[83.28px] h-[30px]">
                        <div className="absolute w-[30.28px] h-[30px] bg-white rounded-[12px] shadow" />
                        <span className="absolute left-[42.4px] top-[6px] text-[12px] font-bold text-[#A0AEC0]">
                            Sign In
                        </span>
                    </div>

                    {/* Sign Up */}
                    <div className="absolute left-[16.15px] top-[378px] w-[88.33px] h-[30px]">
                        <div className="absolute w-[30.28px] h-[30px] bg-white rounded-[12px] shadow" />
                        <span className="absolute left-[42.4px] top-[6px] text-[12px] font-bold text-[#A0AEC0]">
                            Sign Up
                        </span>
                    </div>
                </div>

                {/* ================= Need Help ================= */}
                <div className="absolute left-0 top-[594.5px] w-[248.83px] h-[465px]">
                    <div className="absolute left-[26.16px] top-0 w-[220.06px] h-[169.5px] rounded-[15px] bg-gradient-to-br from-teal-400 to-indigo-500 p-4">
                        <div className="w-[35.33px] h-[35px] bg-white rounded-[12px] mb-4" />
                        <div className="text-white text-[14px] font-bold">Need help?</div>
                        <div className="text-white text-[12px] mt-1">Please check our docs</div>

                        <button className="mt-4 w-full bg-white text-[#2D3748] text-[10px] font-bold py-2 rounded-[12px]">
                            DOCUMENTATION
                        </button>
                    </div>

                    <div className="absolute left-0 top-[250px] w-[248.83px] h-[214.5px] bg-[#F8F9FA]" />
                </div>
            </div>

            {/* ================= Main Dashboard ================= */}
            <div
                className="
          absolute
          left-[259.85px]
          top-0
          w-full
          h-[1580px]
        bg-[#F8F9FA]"
            >
                {/* ================= Breadcrumb ================= */}
                <div
                    className="
    absolute
    left-[308.31px]
    top-[22.5px]
    w-[1572.74px]
    h-[52px]
    flex
    items-center
    justify-between
  "
                >
                    {/* ---------- Left (Pages / Dashboard) ---------- */}
                    <div className="flex flex-col gap-[5px]">
                        <span className="text-[12px] text-[#A0AEC0] leading-[18px]">
                            Pages / Dashboard
                        </span>
                        <span className="text-[14px] font-bold text-[#2D3748] leading-[19.6px]">
                            Dashboard
                        </span>
                    </div>

                    {/* ---------- Right Menu ---------- */}
                    <div className="flex items-center gap-[16px]">
                        {/* Search */}
                        <div
                            className="
        w-[185.51px]
        h-[39.5px]
        bg-white
        border
        border-[#E2E8F0]
        rounded-[15px]
        flex
        items-center
        px-[12px]
        gap-[8px]
      "
                        >
                            <div className="w-[15px] h-[15px] bg-[#718096] rounded-sm" />
                            <span className="text-[12px] text-[#A0AEC0]">
                                Type here...
                            </span>
                        </div>

                        {/* Sign In */}
                        <div className="flex items-center gap-[4px]">
                            <div className="w-[12px] h-[12px] bg-[#718096] rounded-sm" />
                            <span className="text-[12px] font-bold text-[#718096]">
                                Sign In
                            </span>
                        </div>

                        {/* Settings */}
                        <div className="w-[12px] h-[12px] bg-[#718096] rounded-sm" />

                        {/* Notifications */}
                        <div className="w-[12px] h-[12px] bg-[#718096] rounded-sm" />
                    </div>
                </div>



                {/* Analytics Cards */}
                <section className="absolute left-[291.65px] top-[103.5px] w-[1615.14px] h-[80px] grid grid-cols-4 gap-6">
                    {/* Today’s Money */}
                    <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6">
                        <div>
                            <p className="text-xs text-gray-400 font-semibold">Today’s Money</p>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-800">$53,000</span>
                                <span className="text-sm font-bold text-green-500">+55%</span>
                            </div>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-teal-400" />
                    </div>

                    {/* Today’s Users */}
                    <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6">
                        <div>
                            <p className="text-xs text-gray-400 font-semibold">Today’s Users</p>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-800">2,300</span>
                                <span className="text-sm font-bold text-green-500">+5%</span>
                            </div>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-teal-400" />
                    </div>

                    {/* New Clients */}
                    <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6">
                        <div>
                            <p className="text-xs text-gray-400 font-semibold">New Clients</p>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-800">+3,052</span>
                                <span className="text-sm font-bold text-red-500">-14%</span>
                            </div>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-teal-400" />
                    </div>

                    {/* Total Sales */}
                    <div className="flex items-center justify-between bg-white rounded-xl shadow-sm px-6">
                        <div>
                            <p className="text-xs text-gray-400 font-semibold">Total Sales</p>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-gray-800">$173,000</span>
                                <span className="text-sm font-bold text-green-500">+8%</span>
                            </div>
                        </div>
                        <div className="w-11 h-11 rounded-xl bg-teal-400" />
                    </div>
                </section>

                {/* ================= Big Cards ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[207px]
          w-[1615.14px]
          h-[291px]
          bg-white
        "
                />

                {/* ================= Analytics Cards (Charts area) ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[522px]
          w-[1615.14px]
          h-[445px]
          bg-white
        "
                />

                {/* ================= Content Cards ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[991px]
          w-[1615.14px]
          h-[519px]
          bg-white
        "
                />

                {/* ================= Footer Menu ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[1538.5px]
          w-[1615.14px]
          h-[18px]
          bg-transparent
        "
                />
            </div>
        </div>
    );
}
