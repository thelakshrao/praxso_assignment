import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import appleLogo from "@/images/apple-logo.png";
import Phone from "@/components/Phone";
import p1 from "@/images/person1.webp";
import p2 from "@/images/person2.webp";
import p3 from "@/images/person3.webp";
import p4 from "@/images/person4.webp";

const Page = () => {
  return (
    <main className="w-full min-h-screen bg-white p-6">
      <section className="max-w-350 mx-auto bg-[#f2f4fb] rounded-2xl border-2 flex flex-col items-center px-2 pb-0">
        <div className="w-full">
          <Navbar />
        </div>

        <div className="flex flex-col items-center text-center pt-6">
          <div className="md:flex items-center gap-3 mb-10">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                <Image src={p1} alt="user" fill className="object-cover" />
              </div>

              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                <Image src={p2} alt="user" fill className="object-cover" />
              </div>

              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                <Image src={p3} alt="user" fill className="object-cover" />
              </div>

              <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                <Image src={p4} alt="user" fill className="object-cover" />
              </div>

              <div className="w-8 h-8 rounded-full border-2 bg-[#5b6ab0] border-white overflow-hidden relative">
                3k+
              </div>
            </div>
            <p className="text-xs font-medium text-gray-500">
              Trusted by thousands of healthy families
            </p>
          </div>

          <h1 className="text-xl md:text-[65px] font-normal text-[#5b6ab0] leading-[1.05] tracking-tight max-w-4xl">
            The Safest Way to <br /> Shop for Groceries
          </h1>

          <p className="text-gray-500 text-sm md:text-lg mt-6 max-w-xl leading-relaxed">
            Use the Blueberry Scanner App to instantly eliminate{" "}
            <br className="hidden md:block" />
            harmful ingredients from your family's diet and get{" "}
            <br className="hidden md:block" />
            expert-backed food insights.
          </p>

          <button className="mt-6 bg-[#212952] text-white px-3 py-2 rounded-full flex items-center gap-2 font-normal text-xs transition-transform active:scale-95 hover:opacity-90 cursor-pointer">
            <Image
              src={appleLogo}
              alt="Apple"
              width={20}
              height={20}
              className="object-contain brightness-0 invert"
            />
            Download for iOS
          </button>
        </div>
        <Phone />
      </section>
    </main>
  );
};

export default Page;
