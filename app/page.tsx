"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projects = [
    {
      id: "01",
      title: "Checkout Flow",
      description: "Complete payment experience with multiple payment methods, order summary, and responsive design",
      route: "/checkout",
      figmaLink: "https://www.figma.com/design/ioKjI3AvnbfmgjwRCtnBd9/Payment-Checkout-Design--Community-?node-id=72-278&p=f&t=Z1GIsPJeRYR1Uwgs-0",
      status: "live",
      tags: ["Payment", "Split Layout", "Responsive"],
      screenshot: "/checkout.svg",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "02",
      title: "Auth Flow",
      description: "Full authentication system including login, signup, forgot password, and mobile responsive variants",
      route: "/auth/login",
      figmaLink:  "https://www.figma.com/design/W5kYUw6Z5Vd7EDB2J4f8Vf/Authentication-Flow--Community-?node-id=1-41870&t=jS1aepGbGHElsjkK-0",
      status: "live",
      screenshot: "/login.svg",
      tags: ["Authentication", "Forms", "Security"],
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "03",
      title: "Dashboard",
      description: "Analytics and admin dashboard with data visualization and modern UI components",
      route: "/dashboard",
      figmaLink: "https://www.figma.com/design/FaNKkse8sWDm7MQzPoC97t/Purity-UI-Dashboard---Chakra-UI-Dashboard--Community-?node-id=2-31&t=xpBVcXmlXYWEutBw-0",
      status: "coming-soon",
      screenshot: "/dashboard.svg",
      tags: ["Analytics", "Admin", "Data Visualization"],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg: py-16">
        {/* Header */}
        <header className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight px-4">
            pixel-perfect design
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              code UI examples
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              Next.js + Tailwind CSS
            </span>
            as part of my portfolio to showcase modern frontend skills
          </p>
        </header>

        {/* Projects Grid - Responsive 1/2/3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="block group"
            >
              <div
                className={`h-full bg-white rounded-2xl border-2 overflow-hidden transition-all duration-500 flex flex-col ${
                  project.status === "live"
                    ? hoveredId === project.id
                      ? "border-gray-900 shadow-2xl scale-[1.02]"
                      : "border-gray-200 shadow-lg hover:shadow-xl"
                    : "border-gray-200 opacity-70"
                }`}
              >
                {/* Screenshot */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {/* Number Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-base sm:text-lg">
                        {project.id}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot or Placeholder */}
                  {project.screenshot ? (
                    <div className="relative w-full h-full">
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          hoveredId === project.id ? "scale-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                        >
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-gray-400">
                          Preview Coming Soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h2>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                    {/* View Project Button */}
                    {project.status === "live" ?  (
                      <Link
                        href={project.route}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                      >
                        <span>View Project</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-400 rounded-lg font-medium text-sm cursor-not-allowed">
                        <span>Coming Soon</span>
                      </div>
                    )}

                    {/* Original Design Link */}
                    <a
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-medium text-sm hover:border-gray-900 hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12. 735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-. 024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-. 098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h. 098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-. 097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h. 098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-. 098z" />
                      </svg>
                      <span className="hidden sm:inline">Original Design</span>
                      <span className="sm:hidden">Design</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 sm:mt-16 lg:mt-20 pt-8 border-t border-gray-200 text-center px-4">
          <p className="text-sm sm:text-base text-gray-500 mb-2">
            From Figma designs to pixel-perfect production code
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            © 2026 Yunex-x · All designs implemented with precision
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform:  translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        . animation-delay-2000 {
          animation-delay: 2s;
        }
        . animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}