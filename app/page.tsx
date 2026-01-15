import PaymentMethods from "./components/PaymentMethods";
import CardFields from "./components/CardFields";
import PayCTA from "./components/PayCTA";
import OrderSummary from "./components/OrderSummary";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      {/* Page container */}
      <div className="w-screen min-h-screen lg:h-[1024px] grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT COLUMN */}
        <section className="bg-white order-2 lg:order-1">
          <div
            className="
              relative
              lg:absolute
              lg:left-[130px]
              lg:top-[75px]
              w-full
              lg:w-[572px]
              max-w-full
              rounded-[8px]
              p-6
              lg:p-[48px]
            "
          >
            <h1 className="text-[24px] font-semibold">
              Payment
            </h1>

            <div className="flex flex-col gap-[36px]">
              <div className="w-full max-w-[476px] h-px bg-[#D9D9D9] my-[8px]" />

              <PaymentMethods />

              <CardFields />

              <PayCTA />
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className="bg-[#F9FAFA] order-1 lg:order-2 border-b-4 border-[#D9D9D9] lg:border-b-0">
          <section className="bg-[#F9FAFA] relative">
            <div
              className="
                relative
                lg:absolute
                lg:left-[18px]
                lg:top-[75px]
                w-full
                lg:w-[572px]
                max-w-full
                flex
                flex-col
                p-6
                lg:p-[48px]
              "
            >
              <h2 className="text-[24px] font-semibold">
                Order Summary
              </h2>

              <OrderSummary />
            </div>
          </section>
        </section>

      </div>
    </main>
  );
}
