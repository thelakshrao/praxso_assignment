"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "@/images/herogrocery1.webp";
import img2 from "@/images/herogrocery2.webp";
import img3 from "@/images/herogrocery3.webp";
import img4 from "@/images/herogrocery4.webp";
import img5 from "@/images/herogrocery5.webp";
import img6 from "@/images/herogrocery6.webp";
import img7 from "@/images/herogrocery7.webp";
import img8 from "@/images/herogrocery8.webp";
import img9 from "@/images/herogrocery9.webp";
import img10 from "@/images/herogrocery10.webp";
import png1 from "@/images/herogrocery1.png";
import png2 from "@/images/herogrocery2.png";
import png3 from "@/images/herogrocery3.png";
import png4 from "@/images/herogrocery4.png";
import png5 from "@/images/herogrocery5.png";
import png6 from "@/images/herogrocery6.png";
import png7 from "@/images/herogrocery7.png";
import png8 from "@/images/herogrocery8.png";
import png9 from "@/images/herogrocery9.png";
import png10 from "@/images/herogrocery10.png";
import PBerry from "@/images/phoneberry.png";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
const PNGS = [png1, png2, png3, png4, png5, png6, png7, png8, png9, png10];

const PRODUCTS = [
  {
    name: "Kabuli Chana",
    brand: "Tata Sampann",
    score: "92/100",
    status: "Excellent",
    color: "bg-green-500",
    review:
      "A fantastic source of plant-based protein and dietary fiber. Since these are unpolished, they retain their natural nutrients and minerals without any artificial stone polishing or added oils, making them a powerhouse for your digestive health and muscle recovery.",
  },
  {
    name: "Besan (Gram Flour)",
    brand: "Fortune",
    score: "88/100",
    status: "Good",
    color: "bg-green-500",
    review:
      "This is a high-protein, gluten-free staple that outperforms refined flours in every metric. It has a lower glycemic index, meaning it won't cause the same energy crashes as white flour. It's an excellent way to add complex carbohydrates and iron to your daily diet.",
  },
  {
    name: "Maida (Refined Flour)",
    brand: "Good Life",
    score: "22/100",
    status: "Avoid",
    color: "bg-red-500",
    review:
      "This flour is highly processed and stripped of almost all its natural fiber and vitamins. Frequent consumption can lead to rapid spikes in blood sugar and insulin, which may contribute to systemic inflammation and long-term digestive discomfort. It's best to swap this for whole-grain alternatives.",
  },
  {
    name: "Masala Noodles",
    brand: "Maggi",
    score: "35/100",
    status: "Avoid",
    color: "bg-red-500",
    review:
      "While convenient, these noodles are primarily made of refined flour and contain a very high amount of sodium per serving. The included tastemaker also relies on flavor enhancers and preservatives that aren't ideal for a clean-eating lifestyle. Definitely treat this as a rare indulgence rather than a meal.",
  },
  {
    name: "Raw Peanuts",
    brand: "Amazon Brand",
    score: "85/100",
    status: "Good",
    color: "bg-green-500",
    review:
      "Peanuts are a great, affordable source of heart-healthy monounsaturated fats and plant protein. By choosing them raw instead of roasted or salted, you're avoiding unnecessary sodium and inflammatory seed oils often used in the processing of packaged nuts.",
  },
  {
    name: "Jeera Whole",
    brand: "Catch",
    score: "95/100",
    status: "Excellent",
    color: "bg-green-500",
    review:
      "Cumin is more than just a spice; it's a medicinal powerhouse rich in antioxidants. These whole seeds have high essential oil content, which aids in secreting digestive enzymes and helps with nutrient absorption. It's one of the cleanest and most beneficial items in your pantry.",
  },
  {
    name: "All In One Mixture",
    brand: "Indya",
    score: "30/100",
    status: "Avoid",
    color: "bg-red-500",
    review:
      "This namkeen mixture is deep-fried in refined oils and packed with high levels of sodium and saturated fats. These ingredients can lead to water retention and are generally low in nutritional value. If you're craving a crunch, try reaching for dry-roasted makhana or nuts instead.",
  },
  {
    name: "3 Minute Poha",
    brand: "MTR",
    score: "55/100",
    status: "Moderate",
    color: "bg-yellow-500",
    review:
      "This is a decent 'emergency' option when you're short on time, but be mindful of the added preservatives and salt used to make it instant. While it provides quick energy through carbs, it lacks the freshness and fiber content of traditional homemade poha with added vegetables.",
  },
  {
    name: "Brazil Nuts",
    brand: "Vedaka",
    score: "90/100",
    status: "Excellent",
    color: "bg-green-500",
    review:
      "An incredible source of Selenium, which is vital for thyroid function and immune health. However, they are so potent that just 1 or 2 nuts a day provide 100% of your daily requirement. Avoid eating them like regular snacks to prevent selenium toxicity.",
  },
  {
    name: "Cow Ghee",
    brand: "Amul",
    score: "80/100",
    status: "Good",
    color: "bg-green-500",
    review:
      "Ghee is a traditional superfood rich in Butyric acid, which supports gut health and reduces inflammation. It contains fat-soluble vitamins like A, D, and E. While very healthy, it is calorie-dense, so it's best used in moderation as a healthy cooking fat.",
  },
];

const InfiniteCarousel = ({ index }) => {
  const getImageAtIndex = (offset) => {
    const len = IMAGES.length;
    return IMAGES[(index + offset + len) % len];
  };
  const positions = [-2, -1, 0, 1, 2];
  return (
    <div className="relative flex items-center justify-center h-32 w-full z-80 overflow-visible pointer-events-none">
      {" "}
      <AnimatePresence initial={false}>
        {" "}
        {positions.map((pos) => {
          const imageObj = getImageAtIndex(pos);
          const isCenter = pos === 0;
          return (
            <motion.div
              key={imageObj.src}
              layout
              initial={false}
              animate={{
                x: pos * 130,
                scale: isCenter ? 1.35 : 0.85,
                opacity: isCenter ? 1 : 0.35,
                zIndex: isCenter ? 50 : 30 - Math.abs(pos),
              }}
              transition={{
                layout: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.5 },
                scale: { duration: 0.8 },
              }}
              className="absolute w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-2 border-white"
              style={{ left: "calc(50% - 48px)" }}
            >
              {" "}
              <Image
                src={imageObj}
                alt="Grocery"
                placeholder="blur"
                className="w-full h-full object-cover"
              />{" "}
            </motion.div>
          );
        })}{" "}
      </AnimatePresence>{" "}
    </div>
  );
};

const BottomSheet = ({ index }) => {
  const product = PRODUCTS[index % PRODUCTS.length];
  const productImg = PNGS[index % PNGS.length];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ y: "110%" }}
        animate={{ y: "25%" }}
        exit={{ y: "110%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 w-full bg-white 
                   rounded-t-[2.8rem] 
                   pt-2 pb-16 px-5 
                   z-40 shadow-2xl"
      >
        <div className="w-10 h-1.5 bg-gray-200 rounded-full mx-auto mb-4" />

        <div className="flex items-start gap-4 mb-5">
          <div className="w-17 h-20 shrink-0 relative">
            <Image
              src={productImg}
              alt="product"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex-1 pt-1">
            <h2 className="text-sm font-bold text-gray-900 leading-tight">
              {product.name}
            </h2>
            <p className="text-gray-500 text-xs mb-3">{product.brand}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${product.color}`} />
                <div className="flex flex-col leading-none">
                  <span className="text-sm font-bold text-gray-800">
                    {product.score}
                  </span>
                  <span className="text-xs text-gray-500">
                    {product.status}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 text-gray-400 text-xl">
                <button className="hover:text-red-500 transition">♡</button>
                <button className="hover:text-blue-500 transition">➦</button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white border border-gray-100 
                        rounded-[1.6rem] p-4 shadow-sm mb-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                src={PBerry}
                alt="berry"
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>

            <span className="font-normal text-gray-900">Berry Says</span>
          </div>

          <p className="text-gray-600 text-xs leading-relaxed">
            {product.review}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-900 mb-2">Breakdown</h3>
          <div className="w-full h-16 bg-gray-50 rounded-xl border border-dashed border-gray-200" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Phone = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative flex justify-center items-start h-150 pt-8 overflow-visible">
      <div className="relative mx-auto border-gray-300 bg-gray-900 border-10 border-b-0 rounded-t-[3.5rem] h-142.5 w-[320px] shadow-2xl z-10 overflow-visible">
        <div className="rounded-t-[2.8rem] w-full h-full bg-white relative">
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 
    w-28 h-7 bg-black rounded-full flex items-center justify-end pr-4 z-100"
          >
            <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full border border-gray-800"></div>
          </div>

          <div className="absolute inset-0 pt-16 flex flex-col items-center overflow-visible z-30">
            <InfiniteCarousel index={index} />
          </div>

          <div className="absolute inset-0 overflow-hidden rounded-t-[2.8rem] z-40">
            <BottomSheet index={index} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Phone;
