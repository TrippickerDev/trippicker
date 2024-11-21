import { Check } from "lucide-react";
import Link from "next/link";

function SuccessPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-4xl mx-auto p-4 space-y-8">
      <div className="flex items-center justify-center flex-col bg-[#E4FFDE] w-[250px] h-[250px] rounded-full shadow-lg">
        <Check size={120} color="#56DF33" />
      </div>

      <h1 className="text-3xl font-bold text-[#56DF33]">Success</h1>

      <p className="text-lg text-center text-gray-600">
        Expect contact from{" "}
        <span className="font-semibold text-[#5800FF]">Trippicker</span> in a
        few days!
      </p>

      <Link
        href={"/"}
        className="mt-6 bg-[#5800FF] hover:bg-[#4500cc] text-white py-3 px-8 rounded-full font-semibold transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default SuccessPage;
