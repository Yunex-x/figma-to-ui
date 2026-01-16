import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

export default function OrderPage({ params }: PageProps) {
  const { id } = params;

  // very basic validation (optional but correct)
  if (!id || !id.startsWith("ORD-")) {
    notFound();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[520px] flex flex-col gap-[24px] p-6 text-center">

        <h1 className="text-[24px] font-semibold">
          Order Details
        </h1>

        <p className="text-[16px] text-[#ACACAC]">
          Order ID
        </p>

        <p className="text-[18px] font-medium">
          {id}
        </p>

        <div className="h-px bg-[#D9D9D9] my-4" />

        <p className="text-[16px]">
          Status:{" "}
          <span className="font-medium text-[#32C766]">
            Confirmed
          </span>
        </p>

        <p className="text-[14px] text-[#ACACAC]">
          Your order has been successfully placed and is being processed.
        </p>
      </div>
    </main>
  );
}