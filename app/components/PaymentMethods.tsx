export default function PaymentMethods() {
  return (
    <>
      <div>
        <span className="text-[18px] font-medium">Pay With:</span>
      </div>

      <div className="flex text-[16px] text-[#ACACAC] gap-4">
        <div className="flex items-center gap-2">
          <input type="radio" name="payment" />
          <label>Card</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="payment" />
          <label>Bank</label>
        </div>

        <div className="flex items-center gap-2">
          <input type="radio" name="payment" />
          <label>Transfer</label>
        </div>
      </div>
    </>
  );
}
