export default function BankFields() {
  return (
    <div className="w-full max-w-[476px] flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">Bank Name</label>
        <input
          type="text"
          placeholder="Select your bank"
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
        />
      </div>

      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">Account Holder Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
        />
      </div>

      <div className="flex flex-col gap-[16px]">
        <label className="text-[18px] font-medium">IBAN</label>
        <input
          type="text"
          placeholder="DE89 3704 0044 0532 0130 00"
          className="h-[44px] px-[12px] border border-[#D9D9D9] rounded-[6px] text-sm outline-none"
        />
      </div>
    </div>
  );
}
