import Image from "next/image";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      {/* Root frame */}
      <div className="flex w-screen h-[1024px] bg-[#FAFAFA]">

        {/* LEFT — Illustration */}
        <div className="w-[720px] h-full p-[30px]">
          <div className="relative h-full w-full rounded-[24px] bg-[#ECEFF2] overflow-hidden">
            <Image
              src="/signup.svg"
              alt="Signup illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="relative w-[720px] h-full flex items-center justify-center">
          <div className="flex h-full w-full flex-col items-center justify-center p-[120px] gap-[42px]">

            {/* Logo */}
            <div className="absolute top-[40px] right-[60px] flex items-center gap-[6px]">
              <div className="h-[40px] w-[40px] rounded-full bg-[#1B85F3] border-2 border-[#D1E6FF]" />
              <span className="font-[var(--font-noto)] text-[25px] font-bold text-[#1B85F3]">
                Appso
              </span>
            </div>

            {/* Title */}
            <div className="flex flex-col items-center gap-[16px] text-center w-[480px]">
              <h1
                className="font-[var(--font-catamaran)] text-[36px] leading-[42px] font-semibold text-[#39434F]"
              >
                Create your account
              </h1>
              <p
                className="font-[var(--font-noto)] text-[16px] leading-[24px] text-[#808B9A]"
              >
                Hello there! Let’s create your account.
              </p>
            </div>

            {/* Inputs */}
            <div className="flex w-[480px] flex-col gap-[34px]">

              {/* First + Last name */}
              <div className="flex gap-[24px]">
                <Input placeholder="First name" />
                <Input placeholder="Last name" isFocused />
              </div>

              <Input placeholder="Email address" />

              {/* Phone */}
              <div className="flex h-[54px] items-center gap-[10px] rounded-[14px] border border-[#D9DFE6] px-[16px]">
                <span className="text-[14px]">🇩🇪</span>
                <input
                  className="flex-1 font-[var(--font-noto)] text-[14px] outline-none"
                  placeholder="Phone number"
                />
              </div>

              <Input placeholder="Password" hasIcon />

            </div>

            {/* Checkbox */}
            <div className="flex w-[480px] items-center gap-[8px] text-[14px] text-[#808B9A] font-[var(--font-noto)]">
              <div className="h-[16px] w-[16px] rounded-[4px] border border-[#C6CED9]" />
              <span>
                I agree to Platform{" "}
                <span className="text-[#1B85F3]">Terms of Service</span> and{" "}
                <span className="text-[#1B85F3]">Privacy Policy</span>
              </span>
            </div>

            {/* Button */}
            <button
              className="w-[480px] h-[54px] rounded-[14px] bg-[#1B85F3] text-white
              font-[var(--font-noto)] text-[16px] font-medium shadow-[0_1px_4px_rgba(139,158,184,0.2)]"
            >
              Create my account
            </button>

            {/* Divider */}
            <div className="w-[480px] border-t border-[#D9DFE6]" />

            {/* Footer */}
            <div className="flex gap-[8px] text-[14px] font-[var(--font-noto)]">
              <span className="text-[#808B9A]">Joined us before?</span>
              <a href="/login" className="font-bold text-[#1B85F3]">
                Login
              </a>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}

/* ---------- Small helper component ---------- */

function Input({
  placeholder,
  isFocused = false,
  hasIcon = false,
}: {
  placeholder: string;
  isFocused?: boolean;
  hasIcon?: boolean;
}) {
  return (
    <div
      className={`flex h-[54px] w-full items-center gap-[10px] rounded-[14px] px-[16px]
      border ${isFocused ? "border-[#1B85F3]" : "border-[#D9DFE6]"} bg-white`}
    >
      <input
        placeholder={placeholder}
        className="flex-1 font-[var(--font-noto)] text-[14px] outline-none text-[#39434F]"
      />
      {hasIcon && (
        <div className="h-[20px] w-[20px] rounded-full border border-[#A0AEC0]" />
      )}
    </div>
  );
}
