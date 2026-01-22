"use client";

import { Bell, Settings } from "lucide-react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Line,
} from "recharts";

export default function Page() {
    return (
        <main className="min-h-screen bg-[#F8F9FA]  flex">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-[249px] min-h-screen p-6">
                <div className="flex gap-2 items-center mb-6">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0771 0H1.13252C0.507046 0 0 0.502293 0 1.1219V10.5297C0 11.1493 0.507046 11.6516 1.13252 11.6516H5.22456V20.8795C5.22419 21.1769 5.3432 21.4623 5.55537 21.6727C5.76754 21.8831 6.05546 22.0014 6.35569 22.0014H15.8525C16.478 22.0014 16.985 21.4991 16.985 20.8795V11.6557H21.0771C21.3773 11.6557 21.6652 11.5375 21.8774 11.327C22.0896 11.1166 22.2086 10.8312 22.2082 10.5338V1.1219C22.2086 0.824482 22.0896 0.539118 21.8774 0.328681C21.6652 0.118244 21.3773 0 21.0771 0ZM1.31272 1.30179H10.4477V10.3512H1.31272V1.30179ZM15.6723 20.701H6.53729V11.6557H15.6723V20.701ZM20.8955 10.3512H11.7605V1.30179H20.8955V10.3512Z" fill="#2D3748" />
                        <path d="M7.51795 7.32455C7.77664 7.56505 8.18134 7.55869 8.4322 7.31018C8.68306 7.06167 8.68948 6.66077 8.4467 6.4045L6.34939 4.32686C6.09222 4.07448 5.67781 4.07448 5.42064 4.32686L3.31779 6.4045C3.14299 6.56701 3.0714 6.81092 3.13099 7.04093C3.19059 7.27094 3.3719 7.45055 3.60409 7.50959C3.83628 7.56862 4.08249 7.4977 4.24653 7.32455L5.87947 5.70692L7.51795 7.32455Z" fill="#2D3748" />
                        <path d="M14.6951 7.32455L16.328 5.70692L17.9609 7.32455C18.2196 7.56505 18.6243 7.55869 18.8752 7.31018C19.1261 7.06167 19.1325 6.66077 18.8897 6.40451L16.7924 4.32686C16.5352 4.07448 16.1208 4.07448 15.8636 4.32686L13.7663 6.40451C13.5235 6.66077 13.53 7.06167 13.7808 7.31018C14.0317 7.55869 14.4364 7.56505 14.6951 7.32455Z" fill="#2D3748" />
                        <path d="M9.4705 14.6767C9.21145 14.4366 8.80675 14.4435 8.55626 14.6924C8.30577 14.9413 8.29996 15.3422 8.54314 15.5981L10.6404 17.6744C10.7635 17.7966 10.9306 17.8654 11.1048 17.8654C11.2791 17.8654 11.4462 17.7966 11.5692 17.6744L13.6665 15.5981C13.8327 15.4338 13.8977 15.1941 13.8371 14.9694C13.7765 14.7446 13.5995 14.569 13.3727 14.5087C13.1459 14.4483 12.9039 14.5123 12.7378 14.6767L11.1048 16.2957L9.4705 14.6767Z" fill="#2D3748" />
                    </svg>

                    <h1 className="font-bold text-gray-700  text-sm whitespace-nowrap">
                        PURITY UI DASHBOARD
                    </h1>
                </div>
                <div className="space-y-3">
                    <div className="bg-gray-100 rounded-xl px-4 py-3 text-sm font-semibold">
                        Dashboard
                    </div>
                    <div className="flex  items-center ">

                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2_94)">
                                <path d="M3.07558 14.5316H2.12921C1.94097 14.5316 1.76043 14.4575 1.62732 14.3257C1.49421 14.1938 1.41943 14.015 1.41943 13.8285V9.60974C1.41943 9.42326 1.49421 9.24442 1.62732 9.11256C1.76043 8.9807 1.94097 8.90662 2.12921 8.90662H3.07558C3.26383 8.90662 3.44436 8.9807 3.57747 9.11256C3.71058 9.24442 3.78536 9.42326 3.78536 9.60974V13.8285C3.78536 14.015 3.71058 14.1938 3.57747 14.3257C3.44436 14.4575 3.26383 14.5316 3.07558 14.5316V14.5316Z" fill="#4FD1C5" />
                                <path d="M9.70034 14.5308H8.75397C8.56572 14.5308 8.38519 14.4567 8.25208 14.3249C8.11897 14.193 8.04419 14.0142 8.04419 13.8277V6.79645C8.04419 6.60997 8.11897 6.43112 8.25208 6.29926C8.38519 6.1674 8.56572 6.09332 8.75397 6.09332H9.70034C9.88859 6.09332 10.0691 6.1674 10.2022 6.29926C10.3353 6.43112 10.4101 6.60997 10.4101 6.79645V13.8277C10.4101 14.0142 10.3353 14.193 10.2022 14.3249C10.0691 14.4567 9.88859 14.5308 9.70034 14.5308V14.5308Z" fill="#4FD1C5" />
                                <path d="M13.0126 14.5312H12.0662C11.878 14.5312 11.6974 14.4571 11.5643 14.3252C11.4312 14.1934 11.3564 14.0145 11.3564 13.8281V3.51556C11.3564 3.32908 11.4312 3.15024 11.5643 3.01838C11.6974 2.88652 11.878 2.81244 12.0662 2.81244H13.0126C13.2008 2.81244 13.3814 2.88652 13.5145 3.01838C13.6476 3.15024 13.7224 3.32908 13.7224 3.51556V13.8281C13.7224 14.0145 13.6476 14.1934 13.5145 14.3252C13.3814 14.4571 13.2008 14.5312 13.0126 14.5312V14.5312Z" fill="#4FD1C5" />
                                <path d="M6.38808 14.531H5.44171C5.25347 14.531 5.07293 14.4569 4.93982 14.3251C4.80671 14.1932 4.73193 14.0144 4.73193 13.8279V1.17163C4.73193 0.98515 4.80671 0.806308 4.93982 0.674446C5.07293 0.542585 5.25347 0.468506 5.44171 0.468506H6.38808C6.57633 0.468506 6.75686 0.542585 6.88997 0.674446C7.02308 0.806308 7.09786 0.98515 7.09786 1.17163V13.8279C7.09786 14.0144 7.02308 14.1932 6.88997 14.3251C6.75686 14.4569 6.57633 14.531 6.38808 14.531V14.531Z" fill="#4FD1C5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2_94">
                                    <rect width="15.142" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="text-sm text-gray-400 px-4">Tables</p>
                    </div>
                    <div className="flex  items-center ">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.946289 11.0152C0.946289 11.4503 1.12078 11.8676 1.43136 12.1753C1.74195 12.483 2.1632 12.6558 2.60244 12.6558H12.5393C12.9786 12.6558 13.3998 12.483 13.7104 12.1753C14.021 11.8676 14.1955 11.4503 14.1955 11.0152V6.50348H0.946289V11.0152ZM2.89818 8.78864C2.89818 8.55553 2.99166 8.33198 3.15804 8.16715C3.32443 8.00233 3.5501 7.90973 3.78541 7.90973H5.20496C5.44027 7.90973 5.66594 8.00233 5.83233 8.16715C5.99871 8.33198 6.09219 8.55553 6.09219 8.78864V9.37457C6.09219 9.60767 5.99871 9.83123 5.83233 9.99605C5.66594 10.1609 5.44027 10.2535 5.20496 10.2535H3.78541C3.5501 10.2535 3.32443 10.1609 3.15804 9.99605C2.99166 9.83123 2.89818 9.60767 2.89818 9.37457V8.78864Z" fill="#4FD1C5" />
                            <path d="M12.5393 2.34296H2.60244C2.1632 2.34296 1.74195 2.51581 1.43136 2.82348C1.12078 3.13116 0.946289 3.54846 0.946289 3.98358V4.7453H14.1955V3.98358C14.1955 3.54846 14.021 3.13116 13.7104 2.82348C13.3998 2.51581 12.9786 2.34296 12.5393 2.34296V2.34296Z" fill="#4FD1C5" />
                        </svg>

                        <p className="text-sm text-gray-400 px-4">Billing</p>
                    </div>
                    <div className="flex  items-center ">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.8869 3.53142C13.8528 3.46577 13.8036 3.40902 13.7432 3.3658C13.6828 3.32257 13.6129 3.29409 13.5393 3.28267C13.4657 3.27124 13.3904 3.27721 13.3195 3.30007C13.2487 3.32293 13.1843 3.36205 13.1316 3.41423L11.3146 5.2154C11.2254 5.30248 11.1052 5.3513 10.9799 5.3513C10.8547 5.3513 10.7345 5.30248 10.6453 5.2154L9.8598 4.43611C9.81585 4.39258 9.78099 4.3409 9.7572 4.28402C9.73341 4.22714 9.72117 4.16618 9.72117 4.10461C9.72117 4.04305 9.73341 3.98208 9.7572 3.9252C9.78099 3.86833 9.81585 3.81665 9.8598 3.77312L11.6691 1.98044C11.7234 1.92672 11.7636 1.86074 11.7864 1.78818C11.8092 1.71563 11.8138 1.63868 11.7999 1.56395C11.786 1.48923 11.754 1.41898 11.7066 1.35924C11.6592 1.29951 11.5978 1.25209 11.5278 1.22107V1.22107C10.1612 0.615794 8.45533 0.931614 7.37972 1.98923C6.46588 2.88806 6.1935 4.29255 6.63297 5.84265C6.65666 5.92531 6.6568 6.01286 6.63336 6.09559C6.60993 6.17832 6.56383 6.25302 6.50018 6.3114L1.57668 10.766C1.38488 10.9366 1.23017 11.1441 1.12199 11.3759C1.01381 11.6077 0.954427 11.8588 0.947469 12.1141C0.940511 12.3694 0.986121 12.6234 1.08152 12.8606C1.17691 13.0978 1.32009 13.3133 1.50233 13.4939C1.68456 13.6745 1.90202 13.8164 2.14145 13.9111C2.38088 14.0057 2.63725 14.051 2.89494 14.0442C3.15262 14.0374 3.4062 13.9787 3.64023 13.8716C3.87425 13.7646 4.0838 13.6114 4.2561 13.4215L8.80105 8.53327C8.85913 8.47103 8.93326 8.42567 9.01545 8.40208C9.09763 8.37849 9.18475 8.37756 9.26743 8.39939C9.71292 8.5203 10.1724 8.58304 10.6343 8.58601C11.6221 8.58601 12.4889 8.26931 13.1141 7.65905C14.272 6.52907 14.4485 4.61247 13.8869 3.53142ZM2.94271 13.1007C2.74794 13.1217 2.55136 13.0824 2.38012 12.988C2.20888 12.8937 2.07141 12.7491 1.98669 12.5741C1.90197 12.399 1.87417 12.2023 1.90714 12.011C1.9401 11.8196 2.0322 11.6432 2.17072 11.5059C2.30924 11.3686 2.48735 11.2773 2.68048 11.2446C2.87361 11.2119 3.07223 11.2394 3.24893 11.3232C3.42563 11.4071 3.57169 11.5432 3.66697 11.7128C3.76225 11.8824 3.80203 12.0771 3.78084 12.2701C3.75752 12.4824 3.66174 12.6805 3.50933 12.8315C3.35691 12.9825 3.15702 13.0775 2.94271 13.1007V13.1007Z" fill="#4FD1C5" />
                        </svg>

                        <p className="text-sm text-gray-400 px-4">RTL</p>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-xs font-bold text-gray-700 mb-4">
                        ACCOUNT PAGES
                    </p>
                    <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex  items-center gap-4 ">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.83742 1.89175C9.2619 1.27622 8.45808 0.937256 7.57086 0.937256C6.6789 0.937256 5.87241 1.27417 5.29956 1.88589C4.7205 2.50435 4.43836 3.34487 4.50461 4.25249C4.63592 6.04311 6.01141 7.49975 7.57086 7.49975C9.1303 7.49975 10.5034 6.04341 10.6368 4.25307C10.7039 3.35366 10.42 2.51489 9.83742 1.89175Z" fill="#4FD1C5" />
                                <path d="M12.7761 14.0616H2.36597C2.22972 14.0633 2.09478 14.035 1.97097 13.9786C1.84717 13.9222 1.73761 13.8391 1.65028 13.7355C1.45805 13.5079 1.38056 13.197 1.43794 12.8827C1.68754 11.511 2.46653 10.3588 3.6909 9.54987C4.77863 8.8318 6.15649 8.43658 7.57102 8.43658C8.98555 8.43658 10.3634 8.83209 11.4511 9.54987C12.6755 10.3585 13.4545 11.5107 13.7041 12.8824C13.7615 13.1967 13.684 13.5076 13.4918 13.7352C13.4045 13.8389 13.2949 13.922 13.1711 13.9784C13.0473 14.0349 12.9123 14.0633 12.7761 14.0616V14.0616Z" fill="#4FD1C5" />
                            </svg>

                            <p>Profile</p>
                        </div>
                        <div className="flex  items-center gap-4 ">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6578 6.56268H8.51739C8.1409 6.56268 7.77983 6.41452 7.51361 6.1508C7.24739 5.88708 7.09783 5.52939 7.09783 5.15643V1.05487C7.09783 1.02379 7.08536 0.993983 7.06318 0.972007C7.041 0.95003 7.01091 0.937683 6.97953 0.937683H4.25871C3.75672 0.937683 3.2753 1.13523 2.92034 1.48686C2.56538 1.83849 2.36597 2.3154 2.36597 2.81268V12.1877C2.36597 12.685 2.56538 13.1619 2.92034 13.5135C3.2753 13.8651 3.75672 14.0627 4.25871 14.0627H10.8833C11.3853 14.0627 11.8667 13.8651 12.2217 13.5135C12.5766 13.1619 12.7761 12.685 12.7761 12.1877V6.67987C12.7761 6.64879 12.7636 6.61898 12.7414 6.597C12.7192 6.57503 12.6891 6.56268 12.6578 6.56268Z" fill="#4FD1C5" />
                                <path d="M12.3981 5.526L8.14504 1.31282C8.13677 1.30467 8.12625 1.29913 8.11481 1.29689C8.10337 1.29465 8.09151 1.29581 8.08074 1.30022C8.06996 1.30464 8.06074 1.31211 8.05424 1.3217C8.04773 1.33129 8.04424 1.34257 8.04419 1.35412V5.15715C8.04419 5.28147 8.09404 5.4007 8.18278 5.48861C8.27152 5.57652 8.39188 5.6259 8.51738 5.6259H12.3564C12.3681 5.62585 12.3794 5.62239 12.3891 5.61595C12.3988 5.60951 12.4063 5.60037 12.4108 5.5897C12.4153 5.57902 12.4164 5.56728 12.4142 5.55594C12.4119 5.54461 12.4063 5.53419 12.3981 5.526V5.526Z" fill="#4FD1C5" />
                            </svg>

                            <p>Sign In</p>

                        </div>
                        <div className="flex  items-center gap-4 ">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1258 1.12157C14.1204 1.09566 14.1077 1.07181 14.0891 1.05282C14.0705 1.03382 14.0468 1.02048 14.0209 1.01434C12.2887 0.594809 8.28643 2.08983 6.11806 4.23699C5.73131 4.61702 5.37874 5.02971 5.06433 5.47039C4.39566 5.4118 3.72699 5.46072 3.1571 5.70682C1.54915 6.40789 1.08099 8.23719 0.950572 9.0241C0.943175 9.06717 0.945965 9.11136 0.958724 9.15318C0.971483 9.195 0.993863 9.23332 1.0241 9.26512C1.05434 9.29692 1.09162 9.32134 1.133 9.33646C1.17438 9.35157 1.21874 9.35697 1.26258 9.35223L3.8447 9.0701C3.84654 9.26295 3.85829 9.45558 3.87989 9.64725C3.89288 9.78035 3.95253 9.90473 4.04846 9.99881L5.04836 10.987C5.14341 11.0819 5.26893 11.141 5.40325 11.154C5.59565 11.1753 5.78902 11.1869 5.98261 11.1888L5.69929 13.7435C5.69456 13.787 5.70006 13.8309 5.71533 13.8718C5.73061 13.9128 5.75526 13.9497 5.78735 13.9796C5.81944 14.0096 5.8581 14.0317 5.90029 14.0444C5.94247 14.0571 5.98705 14.0599 6.03052 14.0526C6.8234 13.9266 8.67326 13.4629 9.37683 11.87C9.62526 11.3054 9.67612 10.6463 9.61875 9.98709C10.0647 9.67561 10.4824 9.32625 10.8671 8.94295C13.0423 6.79901 14.5428 2.92274 14.1258 1.12157ZM8.69692 6.38533C8.4983 6.1887 8.36301 5.93813 8.30816 5.66532C8.25331 5.39251 8.28137 5.10972 8.38878 4.8527C8.4962 4.59569 8.67815 4.37601 8.91161 4.22145C9.14508 4.06689 9.41957 3.98439 9.70037 3.98439C9.98118 3.98439 10.2557 4.06689 10.4891 4.22145C10.7226 4.37601 10.9045 4.59569 11.012 4.8527C11.1194 5.10972 11.1474 5.39251 11.0926 5.66532C11.0377 5.93813 10.9024 6.1887 10.7038 6.38533C10.5721 6.51599 10.4157 6.61965 10.2435 6.69037C10.0713 6.76109 9.88677 6.7975 9.70037 6.7975C9.51398 6.7975 9.32941 6.76109 9.15723 6.69037C8.98505 6.61965 8.82863 6.51599 8.69692 6.38533Z" fill="#4FD1C5" />
                                <path d="M4.9804 11.7028C4.81834 11.8636 4.55838 11.9263 4.24549 11.9799C3.54251 12.0986 2.92175 11.4968 3.04803 10.7928C3.09623 10.5259 3.23878 10.1518 3.3275 10.0639C3.3469 10.045 3.3598 10.0206 3.36439 9.99411C3.36898 9.96759 3.36502 9.94031 3.35307 9.91615C3.34112 9.89199 3.32179 9.87217 3.29782 9.85951C3.27386 9.84685 3.24647 9.84199 3.21956 9.84563C2.82645 9.89327 2.46073 10.0698 2.18062 10.3472C1.48533 11.0365 1.41968 13.5945 1.41968 13.5945C1.41968 13.5945 4.00327 13.5294 4.69856 12.8401C4.97941 12.5628 5.15787 12.2 5.20517 11.81C5.21611 11.6875 5.06558 11.6146 4.9804 11.7028Z" fill="#4FD1C5" />
                            </svg>

                            <p>Sign Up</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 bg-teal-400 rounded-2xl p-4 text-white w-220px h-169.5px ">
                    <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
                        <rect width="35.3312" height="35" rx="12" fill="white" />
                        <path d="M17.6655 8.49997C12.6497 8.49997 8.58032 12.5312 8.58032 17.5C8.58032 22.4687 12.6497 26.5 17.6655 26.5C22.6813 26.5 26.7507 22.4687 26.7507 17.5C26.7507 12.5312 22.6813 8.49997 17.6655 8.49997ZM17.3816 22.75C17.1944 22.75 17.0114 22.695 16.8558 22.592C16.7002 22.489 16.5789 22.3425 16.5072 22.1712C16.4356 21.9999 16.4169 21.8114 16.4534 21.6296C16.4899 21.4477 16.58 21.2807 16.7124 21.1496C16.8447 21.0184 17.0134 20.9292 17.197 20.893C17.3805 20.8568 17.5708 20.8754 17.7437 20.9463C17.9167 21.0173 18.0645 21.1374 18.1685 21.2916C18.2725 21.4458 18.328 21.627 18.328 21.8125C18.328 22.0611 18.2282 22.2996 18.0508 22.4754C17.8733 22.6512 17.6326 22.75 17.3816 22.75V22.75ZM18.9639 17.9687C18.1969 18.4787 18.0914 18.9461 18.0914 19.375C18.0914 19.549 18.0216 19.7159 17.8973 19.839C17.7731 19.9621 17.6046 20.0312 17.4289 20.0312C17.2532 20.0312 17.0847 19.9621 16.9605 19.839C16.8362 19.7159 16.7664 19.549 16.7664 19.375C16.7664 18.3479 17.2434 17.5314 18.2248 16.8784C19.1371 16.2718 19.6529 15.8875 19.6529 15.0423C19.6529 14.4676 19.3216 14.0312 18.636 13.7082C18.4746 13.6323 18.1155 13.5582 17.6735 13.5634C17.119 13.5704 16.6884 13.7017 16.3567 13.9661C15.7311 14.4648 15.6781 15.0076 15.6781 15.0156C15.6739 15.1018 15.6526 15.1863 15.6155 15.2643C15.5783 15.3424 15.526 15.4124 15.4615 15.4704C15.397 15.5284 15.3216 15.5732 15.2397 15.6024C15.1577 15.6315 15.0707 15.6444 14.9837 15.6402C14.8967 15.636 14.8114 15.615 14.7326 15.5781C14.6539 15.5413 14.5832 15.4895 14.5246 15.4256C14.4661 15.3617 14.4208 15.2871 14.3914 15.2059C14.362 15.1246 14.349 15.0385 14.3532 14.9523C14.3584 14.8384 14.4384 13.8123 15.5253 12.9461C16.0888 12.497 16.8057 12.2636 17.6546 12.2533C18.2556 12.2462 18.8201 12.347 19.2029 12.5261C20.3485 13.0628 20.9778 13.9576 20.9778 15.0423C20.9778 16.6281 19.9079 17.3401 18.9639 17.9687Z" fill="#4FD1C5" />
                    </svg>

                    <p className="font-bold">Need help?</p>
                    <p className="text-sm opacity-80 mt-1">
                        Please check our docs
                    </p>
                    <button className="mt-4 w-full bg-white text-gray-700 py-2 px-8 rounded-lg text-sm font-semibold">
                        DOCUMENTATION
                    </button>
                </div>
            </aside>

            {/* ================= MAIN ================= */}
            <section className="flex-1 p-6 bg-[#F8F9FA]">
                {/* ================= BREADCRUMB ================= */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <p className="text-xs text-gray-400">Pages / Dashboard</p>
                        <h2 className="text-lg font-bold text-gray-700">
                            Dashboard
                        </h2>
                    </div>

                    <div className="flex items-center gap-[18px]">
                        <input
                            placeholder="Type here..."
                            className="border border-gray-200 rounded-xl px-3 py-2 text-sm"
                        />
                        <span className="text-gray-400 text-sm">Sign In</span>
                        <Settings />
                        <Bell/>                    </div>
                </div>

                {/* ================= TOP STATS ================= */}
                <div className="grid grid-cols-4 gap-6">
                    {[
                        { t: "Today’s Money", v: "$53,000", p: "+55%" },
                        { t: "Today’s Users", v: "2,300", p: "+5%" },
                        { t: "New Clients", v: "+3,052", p: "-14%", red: true },
                        { t: "Total Sales", v: "$173,000", p: "+8%" },
                    ].map((i) => (
                        <div
                            key={i.t}
                            className="bg-white rounded-2xl p-5 shadow-sm flex justify-between"
                        >
                            <div>
                                <p className="text-xs text-gray-400 font-bold">
                                    {i.t}
                                </p>
                                <p className="text-lg font-bold text-gray-700">
                                    {i.v}
                                </p>
                                <p
                                    className={`text-sm font-bold ${i.red ? "text-red-400" : "text-green-400"
                                        }`}
                                >
                                    {i.p}
                                </p>
                            </div>
                            <div className="w-10 h-10 bg-teal-400 rounded-xl" />
                        </div>
                    ))}
                </div>

                {/* ================= BIG CARDS ================= */}
                <div className="flex gap-6 mt-6">
                    <div className="w-[930px] bg-white rounded-2xl shadow-sm p-6 flex justify-between">
                        <div>
                            <p className="text-xs font-bold text-gray-400">
                                Built by developers
                            </p>
                            <h3 className="text-lg font-bold text-gray-700 mt-1">
                                Purity UI Dashboard
                            </h3>
                            <p className="text-sm text-gray-400 mt-2 max-w-sm">
                                From colors, cards, typography to complex elements,
                                you will find the full documentation.
                            </p>
                            <button className="text-sm font-bold text-teal-400 mt-4">
                                Read more →
                            </button>
                        </div>
                        <div className="w-[360px] h-[250px] bg-gray-100 rounded-xl" />
                    </div>

                    <div className="w-[660px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl p-6 text-white">
                        <h3 className="text-lg font-bold">Work with the Rockets</h3>
                        <p className="text-sm opacity-80 mt-2 max-w-sm">
                            Wealth creation is an evolutionarily recent positive-sum
                            game. It is all about who take the opportunity first.
                        </p>
                        <button className="text-sm font-bold mt-4">
                            Read more →
                        </button>
                    </div>
                </div>

                {/* ================= ANALYTICS ================= */}
                <div className="flex gap-6 mt-6">
                    {/* Active Users */}
                    <div className="w-[658px] h-[445px] bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
                        <div className="w-full h-[220px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={[
                                        { m: "Jan", v: 300 },
                                        { m: "Feb", v: 250 },
                                        { m: "Mar", v: 200 },
                                        { m: "Apr", v: 350 },
                                        { m: "May", v: 400 },
                                        { m: "Jun", v: 380 },
                                        { m: "Jul", v: 450 },
                                        { m: "Aug", v: 420 },
                                        { m: "Sep", v: 300 },
                                    ]}
                                >
                                    <XAxis hide />
                                    <YAxis hide />
                                    <Bar dataKey="v" radius={6} fill="#2D3748" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-700">
                                Active Users
                            </h3>
                            <p className="text-sm font-bold text-green-400">
                                (+23) than last week
                            </p>
                        </div>

                        <div className="grid grid-cols-4 gap-4">
                            {[
                                { l: "Users", v: "32,984" },
                                { l: "Clicks", v: "2.42m" },
                                { l: "Sales", v: "$2,400" },
                                { l: "Items", v: "320" },
                            ].map((i) => (
                                <div key={i.l}>
                                    <p className="text-sm text-gray-400">{i.l}</p>
                                    <p className="font-bold text-gray-700">{i.v}</p>
                                    <div className="h-[2px] bg-teal-400 mt-2" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sales Overview */}
                    <div className="w-[933px] h-[445px] bg-white rounded-2xl shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-700">
                            Sales overview
                        </h3>
                        <p className="text-sm font-bold text-green-400 mb-4">
                            (+5) more in 2021
                        </p>

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
                                        <linearGradient
                                            id="sales"
                                            x1="0"
                                            y1="0"
                                            x2="0"
                                            y2="1"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#81E6D9"
                                                stopOpacity={0.5}
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#81E6D9"
                                                stopOpacity={0}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="m" stroke="#CBD5E0" />
                                    <YAxis stroke="#CBD5E0" />
                                    <Area
                                        dataKey="b"
                                        stroke="#38B2AC"
                                        fill="url(#sales)"
                                    />
                                    <Line
                                        dataKey="a"
                                        stroke="#2D3748"
                                        strokeWidth={2}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
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


                {/* ================= FOOTER ================= */}
                <footer className="mt-10 flex justify-between text-xs text-gray-400">
                    <p>
                        © 2021, Made with ❤️ by Creative Tim & Simmmple for a
                        better web
                    </p>
                    <div className="flex gap-6">
                        <span>Creative Tim</span>
                        <span>Simmmple</span>
                        <span>Blog</span>
                        <span>License</span>
                    </div>
                </footer>
            </section>
        </main>
    );
}
