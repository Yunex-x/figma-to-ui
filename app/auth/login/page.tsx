"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    alert("Login successful");
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] lg:flex lg:h-[1024px] lg:mx-auto">

      {/* ================= MOBILE HEADER ================= */}
      <div className="lg:hidden px-[20px] pt-[24px]">
        <div className="flex items-center gap-[8px] mb-[20px]">
          <div className="w-[36px] h-[36px] rounded-full bg-[#1B85F3]" />
          <span className="text-[22px] font-bold text-[#1B85F3]">Appso</span>
        </div>

        <div className="flex justify-center mb-[20px]">
          <Image src="/Auth.svg" alt="Auth" width={260} height={260} />
        </div>
      </div>

      {/* ================= DESKTOP LEFT ================= */}
      <div className="hidden lg:block lg:w-[720px] h-full p-[30px]">
        <div className="w-full h-full bg-[#ECEFF2] rounded-[24px] flex items-center justify-center">
          <Image src="/Auth.svg" alt="Auth" width={500} height={720} />
        </div>
      </div>

      {/* ================= FORM AREA ================= */}
      <div className="w-full lg:w-[720px] flex flex-col items-center justify-center lg:px-[120px] relative">

        {/* DESKTOP LOGO */}
        <div className="hidden lg:flex absolute top-[40px] right-[40px] items-center gap-[6px]">
          <div className="w-[40px] h-[40px] rounded-full bg-[#1B85F3] border-2 border-[#D1E6FF]" />
          <span className="text-[25px] font-bold text-[#1B85F3]">Appso</span>
        </div>

        {/* MOBILE CARD */}
        <div
          className="
            w-full
            bg-white
            rounded-t-[34px]
            shadow-[0px_1px_20px_rgba(129,129,129,0.16)]
            px-[24px]
            pt-[32px]
            pb-[24px]
            lg:bg-transparent
            lg:shadow-none
            lg:rounded-none
            lg:px-0
            lg:pt-0
          "
        >
          {/* TITLE */}
          <div className="text-center mb-[32px] lg:mb-[42px]">
            <h1 className="text-[26px] lg:text-[36px] font-semibold text-[#39434F] mb-[10px] lg:mb-[16px]">
              Login
            </h1>
            <p className="text-[14px] lg:text-[16px] text-[#808B9A]">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[480px] mx-auto flex flex-col"
          >
            {/* EMAIL */}
            <div className="flex flex-col gap-[6px] mb-[26px] lg:mb-[34px]">
              <input
                type="email"
                placeholder="joe.doe@gmail.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`h-[46px] lg:h-[54px] px-[16px] rounded-[14px] border bg-white focus:outline-none ${
                  focusedField === "email"
                    ? "border-[#1B85F3]"
                    : errors.email
                    ? "border-red-500"
                    : "border-[#D9DFE6]"
                }`}
              />
              {errors.email && (
                <span className="text-[12px] text-red-500">
                  {errors.email}
                </span>
              )}
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-[6px] mb-[16px]">
              <div
                className={`flex items-center h-[46px] lg:h-[54px] px-[16px] rounded-[14px] border bg-white ${
                  focusedField === "password"
                    ? "border-[#1B85F3]"
                    : errors.password
                    ? "border-red-500"
                    : "border-[#D9DFE6]"
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  className="flex-1 outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400"
                >
                  👁
                </button>
              </div>
              {errors.password && (
                <span className="text-[12px] text-red-500">
                  {errors.password}
                </span>
              )}
            </div>

            {/* REMEMBER */}
            <label className="flex items-center gap-[8px] text-[14px] text-[#808B9A] mb-[32px] lg:mb-[42px]">
              <input
                type="checkbox"
                checked={formData.remember}
                onChange={(e) => handleChange("remember", e.target.checked)}
                className="w-[16px] h-[16px]"
              />
              Remember information
            </label>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`h-[46px] lg:h-[54px] rounded-[14px] text-white font-medium mb-[8px] ${
                isSubmitting ? "bg-blue-400" : "bg-[#1B85F3]"
              }`}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            {/* FORGOT */}
            <Link
              href="/auth/forgotpassword"
              className="text-center text-[14px] text-[#1B85F3] mb-[32px] lg:mb-[42px]"
            >
              Forget password?
            </Link>

            {/* DIVIDER */}
            <div className="flex items-center gap-[12px] mb-[20px]">
              <div className="flex-1 h-px bg-[#D9DFE6]" />
              <span className="text-[14px] text-[#808B9A]">or</span>
              <div className="flex-1 h-px bg-[#D9DFE6]" />
            </div>

            {/* ================= SOCIAL (MOBILE + DESKTOP) ================= */}
            <div className="flex flex-col gap-[16px] lg:gap-[20px]">
              {["Google", "Facebook", "Apple"].map((name) => (
                <button
                  key={name}
                  type="button"
                  className="
                    h-[46px] lg:h-[54px]
                    w-full
                    bg-white
                    border border-[#D9DFE6]
                    rounded-[14px]
                    flex items-center
                    px-[20px]
                    text-[14px]
                    text-[#39434F]
                    shadow-[0px_1px_4px_rgba(139,158,184,0.2)]
                  "
                >
                  <span className="w-[20px] h-[20px]" />
                  <img
                    src={`/logo.svg`}
                    alt={name}
                    className="centered-object"
                  />
                  <span className="mx-[16px] h-[24px] w-px bg-[#D9DFE6]" />
                  <span className="flex-1 text-center">
                    Login with {name}
                  </span>
                </button>
              ))}
            </div>

            {/* FOOTER */}
            <p className="text-center text-[14px] text-[#808B9A] mt-[42px]">
              First time here?{" "}
              <Link href="/auth/signup" className="text-[#1B85F3] font-semibold">
                Sign up for free
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
