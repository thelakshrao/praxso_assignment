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
    <main className="w-full min-h-screen bg-white px-3 py-4 sm:p-6">
      <section
        className="
        max-w-350 mx-auto 
        bg-[#f2f4fb] 
        rounded-2xl sm:rounded-[28px]
        border 
        flex flex-col items-center
        px-3 sm:px-6
        pb-0
      "
      >
        <div className="w-full">
          <Navbar />
        </div>

        <div className="flex flex-col items-center text-center pt-6 sm:pt-10">
          <div
            className="
            flex flex-col sm:flex-row 
            items-center gap-3 
            mb-6 sm:mb-10
          "
          >
            <div className="flex -space-x-3">
              {[p1, p2, p3, p4].map((img, i) => (
                <div
                  key={i}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden relative"
                >
                  <Image
                    src={img}
                    alt="user"
                    fill
                    loading="lazy"
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              ))}

              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-[#5b6ab0] overflow-hidden relative">
                3k+
              </div>
            </div>

            <p className="text-[11px] sm:text-xs font-medium text-gray-500">
              Trusted by thousands of healthy families
            </p>
          </div>

          <h1
            className="
            text-[28px] 
            sm:text-[42px] 
            md:text-[65px]
            font-normal 
            text-[#5b6ab0] 
            leading-[1.05] 
            tracking-tight 
            max-w-4xl
          "
          >
            The Safest Way to <br className="hidden sm:block" />
            Shop for Groceries
          </h1>

          <p
            className="
            text-gray-500 
            text-[13px] 
            sm:text-base 
            md:text-lg 
            mt-4 sm:mt-6 
            max-w-xl 
            leading-relaxed
          "
          >
            Use the Blueberry Scanner App to instantly eliminate harmful
            ingredients from your family's diet and get expert-backed food
            insights.
          </p>

          <button
            className="
            mt-6 sm:mt-8
            bg-[#212952] 
            text-white 
            px-4 sm:px-5 
            py-2.5 sm:py-3
            rounded-full 
            flex items-center gap-2 sm:gap-3 
            text-xs sm:text-sm
            transition-transform active:scale-95 hover:opacity-90
          "
          >
            <Image
              src={appleLogo}
              alt="Apple"
              width={20}
              height={20}
              priority
              className="brightness-0 invert"
            />
            Download for iOS
          </button>
        </div>

        <div className="mt-6 sm:mt-10">
          <Phone />
        </div>
      </section>
    </main>
  );
};

export default Page;
