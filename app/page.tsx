// app/page.tsx
export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Payment */}
        <section className="border border-gray-200 p-12 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <hr className="mb-6" />

          {/* Pay With */}
          <div className="mb-6">
            <p className="text-sm font-medium mb-3">Pay With:</p>
            <div className="flex gap-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="radio" name="pay" defaultChecked />
                Card
              </label>
              <label className="flex items-center gap-2 text-gray-400">
                <input type="radio" name="pay" disabled />
                Bank
              </label>
              <label className="flex items-center gap-2 text-gray-400">
                <input type="radio" name="pay" disabled />
                Transfer
              </label>
            </div>
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-sm mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9101 1121"
              className="w-full border rounded-md px-4 py-3 text-sm"
            />
          </div>

          {/* Exp / CVV */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-2">Expiration Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border rounded-md px-4 py-3 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full border rounded-md px-4 py-3 text-sm"
              />
            </div>
          </div>

          {/* Save card */}
          <label className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <input type="checkbox" />
            Save card details
          </label>

          {/* Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 rounded-md">
            Pay USD 59.28
          </button>

          {/* Note */}
          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes
            described in our privacy policy.
          </p>
        </section>

        {/* Order Summary */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <hr className="mb-6" />

          {/* Product */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gray-200 rounded-md" />
            <div className="flex-1">
              <p className="font-medium text-sm">Taxmax Leather Bag</p>
              <p className="text-xs text-gray-400">Brown Vegan Leather</p>
              <p className="text-xs text-gray-400">Qty: 2</p>
            </div>
            <p className="font-medium text-sm">$49.80</p>
          </div>

          {/* Coupon */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="Gift or discount code"
              className="flex-1 border rounded-md px-4 py-3 text-sm"
            />
            <button className="px-6 py-3 bg-gray-300 rounded-md text-sm">
              Apply
            </button>
          </div>

          {/* Prices */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$49.80</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$7.24</span>
            </div>
          </div>

          <hr className="my-6" />

          {/* Total */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm font-medium">Total</p>
              <p className="text-xs text-gray-400">
                Including $2.24 in taxes
              </p>
            </div>
            <p className="text-2xl font-semibold">$59.28</p>
          </div>
        </section>
      </div>
    </main>
  );
}
