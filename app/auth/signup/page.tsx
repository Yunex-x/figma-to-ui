"use client";

import Image from "next/image";
import { useState, FormEvent, useRef, useEffect } from "react";

/* ---------------- DATA ---------------- */

const countries = [
    { code: "+49", name: "Germany", flag: "🇩🇪" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
];

/* ---------------- PAGE ---------------- */

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        agreeToTerms: false,
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowCountryDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleChange = (field: string, value: any) => {
        setFormData((p) => ({ ...p, [field]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            <div className="flex min-h-screen lg:h-[1024px]">

                {/* ================= DESKTOP LEFT ================= */}
                <div className="hidden lg:block w-[720px] h-full p-[30px]">
                    <div className="relative h-full w-full rounded-[24px] bg-[#ECEFF2]">
                        <Image
                            src="/signup.svg"
                            alt="Signup illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="flex flex-1 flex-col items-center">

                    {/* ================= MOBILE HEADER ================= */}
                    <div className="lg:hidden w-[375px] h-[332px] flex flex-col bg-[#F7FAFC]">

                        {/* ===== LOGO BAR ===== */}
                        <div className="w-full h-[62px] px-[24px] py-[16px] flex items-center">
                            <div className="flex items-center gap-[7.4px]">
                                {/* Logo Icon */}
                                <div className="w-[30px] h-[30px] rounded-full bg-[#1B85F3] border-2 border-[#D1E6FF]" />
                                {/* Logo Text */}
                                <span className="text-[20px] font-bold text-[#1B85F3] leading-[30px]">
                                    Appso
                                </span>
                            </div>
                        </div>

                       

                    </div>




                    {/* ================= FORM CARD ================= */}
                    <form
                        onSubmit={handleSubmit}
                        className="
              w-full
              bg-white
              rounded-t-[32px]
              px-[24px]
              pt-[32px]
              pb-[40px]
              lg:bg-transparent
              lg:rounded-none
              lg:p-[120px]
              lg:w-[720px]
              flex flex-col
              items-center
            "
                    >

                        {/* TITLE */}
                        <div className="text-center mb-[32px] w-full max-w-[480px]">
                            <h1 className="text-[26px] lg:text-[36px] font-semibold text-[#39434F] mb-[12px]">
                                Sign up
                            </h1>
                            <p className="text-[14px] lg:text-[16px] text-[#808B9A]">
                                Hello there! Let’s create your account.
                            </p>
                        </div>

                        {/* INPUTS */}
                        <div className="w-full max-w-[480px] flex flex-col gap-[24px]">

                            <Input
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={(v: any) => handleChange("firstName", v)}
                                onFocus={() => setFocusedField("firstName")}
                                onBlur={() => setFocusedField(null)}
                                isFocused={focusedField === "firstName"}
                            />

                            <Input
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={(v: any) => handleChange("lastName", v)}
                                onFocus={() => setFocusedField("lastName")}
                                onBlur={() => setFocusedField(null)}
                                isFocused={focusedField === "lastName"}
                            />

                            <Input
                                placeholder="Email address"
                                value={formData.email}
                                onChange={(v: any) => handleChange("email", v)}
                            />

                            {/* PHONE */}
                            <div ref={dropdownRef} className="relative">
                                <div className="flex h-[54px] items-center gap-[10px] rounded-[14px] border border-[#D9DFE6] px-[16px]">
                                    <button
                                        type="button"
                                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                                        className="flex items-center gap-[6px]"
                                    >
                                        <span>{selectedCountry.flag}</span>
                                        <span className="text-[14px]">{selectedCountry.code}</span>
                                    </button>

                                    <span className="h-[20px] w-px bg-[#D9DFE6]" />

                                    <input
                                        className="flex-1 text-[14px] outline-none"
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={(e) => handleChange("phone", e.target.value)}
                                    />
                                </div>

                                {showCountryDropdown && (
                                    <div className="absolute z-50 mt-[8px] w-full bg-white border rounded-[12px] shadow-lg">
                                        {countries.map((c) => (
                                            <button
                                                key={c.code}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedCountry(c);
                                                    setShowCountryDropdown(false);
                                                }}
                                                className="w-full px-[16px] py-[10px] flex gap-[10px] hover:bg-[#F5F7FA]"
                                            >
                                                {c.flag} {c.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Input
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={(v: any) => handleChange("password", v)}
                                hasIcon
                                onIconClick={() => setShowPassword(!showPassword)}
                            />
                        </div>

                        {/* CHECKBOX */}
                        <div className="w-full max-w-[480px] flex items-start gap-[12px] mt-[16px]">
                            <input
                                type="checkbox"
                                checked={formData.agreeToTerms}
                                onChange={(e) => handleChange("agreeToTerms", e.target.checked)}
                                className="mt-[4px] w-[16px] h-[16px]"
                            />
                            <p className="text-[14px] text-[#808B9A] leading-[20px]">
                                I agree to Platform{" "}
                                <span className="text-[#1B85F3] font-medium">Terms of Service</span>{" "}
                                and{" "}
                                <span className="text-[#1B85F3] font-medium">Privacy Policy</span>
                            </p>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="mt-[24px] w-full max-w-[480px] h-[54px] rounded-[14px] bg-[#1B85F3] text-white text-[16px] font-medium"
                        >
                            Create account
                        </button>

                        {/* DIVIDER */}
                        <div className="mt-[24px] h-px w-full max-w-[480px] bg-[#D9DFE6]" />

                        {/* FOOTER */}
                        <p className="mt-[24px] text-center text-[14px] text-[#808B9A]">
                            Joined us before?{" "}
                            <a href="/auth/login" className="text-[#1B85F3] font-semibold">
                                Login
                            </a>
                        </p>

                    </form>
                </div>
            </div>
        </main>
    );
}

/* ---------------- INPUT COMPONENT ---------------- */

function Input({
    placeholder,
    type = "text",
    value,
    onChange,
    onFocus,
    onBlur,
    isFocused,
    hasIcon,
    onIconClick,
}: any) {
    return (
        <div className="w-full">
            <div
                className={`flex h-[54px] items-center gap-[10px] rounded-[14px] px-[16px] border ${isFocused ? "border-[#1B85F3]" : "border-[#D9DFE6]"
                    }`}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className="flex-1 text-[14px] outline-none"
                />
                {hasIcon && (
                    <button type="button" onClick={onIconClick}>
                        👁
                    </button>
                )}
            </div>
        </div>
    );
}
