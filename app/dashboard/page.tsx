"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
} from "recharts";

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
        "
                >
                    <div className="flex gap-6 w-full">
  {/* FIRST CARD */}
  <div className="relative flex w-[930px] h-[290px] rounded-2xl bg-white shadow-sm px-6 py-6">
    {/* Text */}
    <div className="flex flex-col justify-between max-w-[340px]">
      <div>
        <p className="text-xs font-bold text-gray-400 mb-1">
          Built by developers
        </p>

        <h3 className="text-lg font-bold text-gray-700 mb-2">
          Purity UI Dashboard
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed">
          From colors, cards, typography to complex elements,
          you will find the full documentation.
        </p>
      </div>

      <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:underline">
        Read more
        <span>→</span>
      </button>
    </div>

    {/* Image placeholder */}
    <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[360px] h-[255px] rounded-xl bg-teal-400 flex items-center justify-center">
      <span className="text-white font-bold text-xl">chakra</span>
    </div>
  </div>

  {/* SECOND CARD */}
  <div className="relative w-[660px] h-[290px] rounded-2xl overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30" />

    {/* Text */}
    <div className="relative z-10 h-full flex flex-col justify-between px-6 py-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          Work with the Rockets
        </h3>

        <p className="text-sm text-white/80 leading-relaxed max-w-[390px]">
          Wealth creation is an evolutionarily recent positive-sum game.
          It is all about who take the opportunity first.
        </p>
      </div>

      <button className="flex items-center gap-1 text-sm font-semibold text-white hover:underline">
        Read more
        <span>→</span>
      </button>
    </div>
  </div>
</div>

</div>
                {/* ================= Analytics Cards (Charts area) ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[522px]
          w-[1615.14px]
          h-[445px]
        "
                >
                    <div className="flex gap-6 w-full mt-6">
      {/* 🟦 LEFT CARD — Active Users */}
      <div className="w-[658px] h-[445px] bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
        {/* Graph */}
        <div className="w-full h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[
                { name: "Jan", v: 300 },
                { name: "Feb", v: 250 },
                { name: "Mar", v: 200 },
                { name: "Apr", v: 350 },
                { name: "May", v: 400 },
                { name: "Jun", v: 380 },
                { name: "Jul", v: 450 },
                { name: "Aug", v: 420 },
                { name: "Sep", v: 300 },
              ]}
            >
              <YAxis hide />
              <XAxis hide />
              <Bar dataKey="v" radius={6} fill="#1A202C" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg font-bold text-gray-700">
            Active Users
          </h3>
          <p className="text-sm font-bold text-green-400">
            (+23) than last week
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {[
            { label: "Users", value: "32,984" },
            { label: "Clicks", value: "2.42m" },
            { label: "Sales", value: "$2,400" },
            { label: "Items", value: "320" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-lg font-bold text-gray-700">
                {item.value}
              </p>
              <div className="h-[2px] bg-teal-400 mt-2 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* 🟩 RIGHT CARD — Sales Overview */}
      <div className="w-[933px] h-[445px] bg-white rounded-2xl shadow-sm p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-gray-700">
            Sales overview
          </h3>
          <p className="text-sm font-bold text-green-400">
            (+5) more in 2021
          </p>
        </div>

        {/* Graph */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={[
                { m: "Jan", a: 200, b: 300 },
                { m: "Feb", a: 150, b: 280 },
                { m: "Mar", a: 220, b: 350 },
                { m: "Apr", a: 180, b: 320 },
                { m: "May", a: 250, b: 400 },
                { m: "Jun", a: 230, b: 380 },
                { m: "Jul", a: 190, b: 340 },
                { m: "Aug", a: 210, b: 360 },
                { m: "Sep", a: 170, b: 300 },
              ]}
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#81E6D9" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#81E6D9" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis dataKey="m" stroke="#CBD5E0" />
              <YAxis stroke="#CBD5E0" />

              <Area
                type="monotone"
                dataKey="b"
                stroke="#38B2AC"
                fill="url(#g1)"
              />

              <Line
                type="monotone"
                dataKey="a"
                stroke="#2D3748"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
                    </div>

                {/* ================= Content Cards ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[991px]
          w-[1615.14px]
          h-[519px]
        "
                >
                    <div className="flex gap-6 w-full mt-6">
      {/* 🟦 LEFT CARD — Projects */}
      <div className="w-[1067px] h-[519px] bg-white rounded-2xl shadow-sm p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-700">Projects</h3>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <span className="text-green-400 font-bold">●</span>
              30 done this month
            </p>
          </div>
          <span className="text-gray-400">⋮</span>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] text-xs text-gray-400 font-bold border-b pb-2">
          <span>COMPANIES</span>
          <span>MEMBERS</span>
          <span>BUDGET</span>
          <span>COMPLETION</span>
        </div>

        {/* Rows */}
        {[
          {
            name: "Chakra Soft UI Version",
            budget: "$14,000",
            progress: 60,
          },
          {
            name: "Add Progress Track",
            budget: "$3,000",
            progress: 10,
          },
          {
            name: "Fix Platform Errors",
            budget: "Not set",
            progress: 100,
          },
          {
            name: "Launch our Mobile App",
            budget: "$32,000",
            progress: 100,
          },
          {
            name: "Add the New Pricing Page",
            budget: "$400",
            progress: 25,
          },
          {
            name: "Redesign New Online Shop",
            budget: "$7,600",
            progress: 40,
          },
        ].map((item) => (
          <div
            key={item.name}
            className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center py-4 border-b last:border-b-0"
          >
            <span className="text-sm font-bold text-gray-700">
              {item.name}
            </span>

            {/* Members (placeholder avatars) */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"
                />
              ))}
            </div>

            <span className="text-sm font-bold text-gray-700">
              {item.budget}
            </span>

            {/* Progress */}
            <div>
              <span className="text-sm font-bold text-teal-400">
                {item.progress}%
              </span>
              <div className="h-[4px] bg-gray-200 rounded mt-1">
                <div
                  className="h-full bg-teal-400 rounded"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🟩 RIGHT CARD — Orders Overview */}
      <div className="w-[524px] h-[519px] bg-white rounded-2xl shadow-sm p-6 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-700">
            Orders overview
          </h3>
          <p className="text-sm font-bold text-green-400">
            +30% this month
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6">
          {[
            {
              title: "$2400, Design changes",
              date: "22 DEC 7:20 PM",
            },
            {
              title: "New order #4219423",
              date: "21 DEC 11:21 PM",
            },
            {
              title: "Server Payments for April",
              date: "21 DEC 9:28 PM",
            },
            {
              title: "New card added for order #3210145",
              date: "20 DEC 3:52 PM",
            },
            {
              title: "Unlock packages for Development",
              date: "19 DEC 11:35 PM",
            },
            {
              title: "New order #9851258",
              date: "18 DEC 4:41 PM",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-teal-400 mt-1" />
              <div>
                <p className="text-sm font-bold text-gray-700">
                  {item.title}
                </p>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
                    </div>

                {/* ================= Footer Menu ================= */}
                <div
                    className="
          absolute
          left-[291.65px]
          top-[1525.5px]
          w-[1615.14px]
          h-[18px]
        "
                >
    <footer className="w-full mt-8 flex items-center justify-between text-sm text-gray-400">
      {/* Left */}
      <p>
        © 2021, Made with ❤️ by{" "}
        <span className="font-medium">Creative Tim</span> &{" "}
        <span className="font-medium">Simmmple</span> for a better web
      </p>

      {/* Right */}
      <div className="flex gap-6">
        <a href="#" className="hover:text-gray-600 transition">
          Creative Tim
        </a>
        <a href="#" className="hover:text-gray-600 transition">
          Simmmple
        </a>
        <a href="#" className="hover:text-gray-600 transition">
          Blog
        </a>
        <a href="#" className="hover:text-gray-600 transition">
          License
        </a>
      </div>
    </footer>
 
                    </div>
            </div>
        </div>
    );
}
