'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    // Check if it's either a valid email or phone number
    return emailRegex.test(email) || (phoneRegex.test(email) && email.replace(/\D/g, '').length >= 10);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email. trim()) {
      setError('Please enter your email address or mobile number');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address or mobile number');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real app, you would call your API here: 
      // const response = await fetch('/api/forgot-password', {
      //   method: 'POST',
      //   headers:  { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setSuccess(true);

      // Redirect to login after 3 seconds (mobile behavior)
      setTimeout(() => {
        // router.push('/auth/login');
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* DESKTOP VERSION */}
      <main className="hidden lg:flex w-screen h-[1024px] bg-[#FAFAFA]">

        {/* LEFT ILLUSTRATION */}
        <section className="w-[720px] h-full p-[30px]">
          <div className="w-full h-full rounded-[24px] bg-[#ECEFF2] flex items-center justify-center">
            {/* Illustration image */}
            <img
              src="/Container.svg"
              alt="Forgot password illustration"
              className="w-[500px] h-auto"
            />
          </div>
        </section>

        {/* RIGHT FORM */}
        <section className="w-[720px] h-full relative flex items-center justify-center">

          {/* LOGO */}
          <div className="absolute top-[40px] right-[80px] flex items-center gap-[8px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#1B85F3]" />
            <span className="text-[25px] font-bold text-[#1B85F3]">
              Appso
            </span>
          </div>

          {/* FORM CONTAINER */}
          <div className="w-[480px] flex flex-col items-center gap-[42px]">

            {success ?  (
              /* SUCCESS MESSAGE */
              <div className="flex flex-col items-center gap-[24px] text-center">
                <div className="w-[64px] h-[64px] rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-[32px] h-[32px] text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 className="font-[Catamaran] font-semibold text-[36px] leading-[42px] text-[#39434F]">
                  Check your email
                </h1>
                <p className="font-[Noto_Sans] font-medium text-[16px] leading-[24px] text-[#808B9A]">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Please check your inbox and follow the instructions. 
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="
                    w-[480px]
                    h-[54px]
                    rounded-[14px]
                    bg-[#1B85F3]
                    text-white
                    text-[16px]
                    font-medium
                    shadow-[0px_1px_4px_rgba(139,158,184,0.2)]
                    hover:bg-[#1570D6]
                    transition-colors
                  "
                >
                  Send Again
                </button>
              </div>
            ) : (
              <>
                {/* TITLE */}
                <div className="flex flex-col items-center gap-[16px] text-center">
                  <h1 className="font-[Catamaran] font-semibold text-[36px] leading-[42px] text-[#39434F]">
                    Forgot password? 
                  </h1>
                  <p className="font-[Noto_Sans] font-medium text-[16px] leading-[24px] text-[#808B9A]">
                    Don't worry!  It's happens.  Please enter the email address
                    associated with your account. 
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="w-[480px] flex flex-col gap-[16px]">
                  {/* INPUT */}
                  <div className="relative">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e. target.value);
                        setError('');
                      }}
                      placeholder="Insert email address / mobile number"
                      disabled={isLoading}
                      className={`
                        w-full
                        h-[54px]
                        px-[16px]
                        rounded-[14px]
                        border
                        text-[14px]
                        text-[#39434F]
                        placeholder-[#808B9A]
                        outline-none
                        bg-white
                        transition-colors
                        ${error ? 'border-red-500 focus:border-red-500' :  'border-[#D9DFE6] focus:border-[#1B85F3]'}
                        ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    />
                    {error && (
                      <p className="absolute -bottom-[20px] left-0 text-red-500 text-[12px] font-medium">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`
                      w-full
                      h-[54px]
                      rounded-[14px]
                      bg-[#1B85F3]
                      text-white
                      text-[16px]
                      font-medium
                      shadow-[0px_1px_4px_rgba(139,158,184,0.2)]
                      transition-all
                      mt-[26px]
                      ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1570D6]'}
                    `}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending... 
                      </span>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>
              </>
            )}

          </div>
        </section>
      </main>

      {/* MOBILE VERSION */}
      <div className="lg:hidden min-h-screen flex justify-center items-center bg-[#ECEFF2]">
        {/* Phone frame */}
        <div className="w-[375px] h-[812px] bg-grey100 overflow-hidden relative">

          {/* Top section */}
          <div className="h-[398px] flex flex-col absolute top-0 w-full z-20">

            {/* Logo Icon */}
            <div className="w-[30px] h-[30px] rounded-full bg-[#1B85F3] border-2 border-[#D1E6FF]" />
            {/* Logo Text */}
            <span className="text-[20px] font-bold text-[#1B85F3] leading-[30px]">
              Appso
            </span>
          </div>
          {/* Illustration placeholder */}
          <img src="/Container.svg" alt="" className="absolute top-0 h-120" />

          {/* Bottom auth container */}
          <div className="absolute bottom-0 w-full h-[380px] bg-white rounded-t-[34px] shadow-auth">
            <form onSubmit={handleSubmit} className="h-full px-6 pt-6 flex flex-col items-center gap-8">

              {/* Title & description */}
              <div className="text-center flex flex-col gap-[10px]">
                <h1 className="font-catamaran text-[26px] leading-[34px] font-bold text-grey800">
                  {success ? 'Check Your Email' :  'Forgot Password'}
                </h1>
                <p className="font-noto text-[14px] leading-[20px] font-medium text-grey600">
                  {success
                    ? `We've sent password reset instructions to ${email}.  Redirecting to login...`
                    : "Enter your email and we'll send you instructions to reset your password."
                  }
                </p>
              </div>

              {/* Input + button */}
              <div className="w-full flex flex-col gap-[26px]">

                {/* Email input */}
                {! success && (
                  <div className="flex flex-col gap-[5px]">
                    <div className={`flex items-center rounded-2xl px-[14px] py-[10px] h-[46px] border ${error ? 'border-red-500' : 'border-grey200'
                      }`}>
                      <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setError('');
                        }}
                        disabled={isLoading}
                        className="w-full outline-none font-noto text-[14px] text-grey800 placeholder:text-grey600 disabled:opacity-50"
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-[12px] font-noto px-[14px]">
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Success icon */}
                {success && (
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* BUTTON */}
                {!success && (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="absolute bottom-6 left-6 right-6 h-[54px] rounded-[14px] bg-[#1B85F3] text-white text-[16px] font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    {isLoading ? 'Sending...' : 'Submit'}
                  </button>
                )}

              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}