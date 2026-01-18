'use client';

import { useState } from 'react';

export default function ForgotPasswordPage() {
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
    if (!email.trim()) {
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
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email }),
      // });

      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-screen h-[1024px] flex bg-[#FAFAFA]">

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

          {success ? (
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
                  Don't worry! It's happens. Please enter the email address
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
                      setEmail(e.target.value);
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
                      ${error ? 'border-red-500 focus:border-red-500' : 'border-[#D9DFE6] focus:border-[#1B85F3]'}
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
  );
}
