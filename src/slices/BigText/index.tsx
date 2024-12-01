"use client";

import OrderedCard from "@/components/OrderedCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-screen overflow-hidden text-slate-300 bg-hero-bg bg-cover bg-no-repeat bg-center bg-fixed  py-28 relative"
    >
      <div className="absolute inset-0 bg-gray-200/20 z-0"></div>

      <div className="grid sm:grid-cols-[1fr_2fr] max-w-7xl mx-auto">
        <div className="bg-[#0f081b] p-8 z-10">
          <h2 className="text-5xl pb-10">Our Store</h2>
          <h3 className="text-3xl text-amber-700 pb-6">Your Comfort</h3>
          <p className="leading-7">
            Welcome to Coozy, where style meets comfort and quality! Transform
            your space effortlessly with furniture that blends beauty and
            functionality. Choose us to make your house a home!
          </p>
          <p className="leading-7">
            We take it step by step until everything is perfect in your home.
            Every inch should have unique purpose
          </p>
        </div>

        <div className="p-6 grid grid-cols-2 gap-x-6 z-10">
          <OrderedCard
            number="01"
            title="Premium Quality"
            description="Every piece is crafted with care and built to last, ensuring your furniture remains timeless."
          />

          <OrderedCard
            number="02"
            title="Affordable Prices"
            description="Luxury doesn’t have to break the bank. We offer stylish furniture at prices you'll love."
          />

          <OrderedCard
            number="03"
            title="Wide Selection"
            description="Whether you need modern, classic, or custom designs, we have options for every style and space."
          />

          <OrderedCard
            number="04"
            title="Exceptional Service"
            description="Our knowledgeable team is here to guide you in finding the perfect pieces for your home."
          />

          <OrderedCard
            number="05"
            title="Fast & Reliable"
            description="Get your furniture quickly and hassle-free, so you can enjoy it sooner."
          />

          <OrderedCard
            number="06"
            title="Sustainability Focus"
            description="We prioritize eco-friendly materials and practices to create a better future for all."
          />
        </div>
      </div>
    </section>
  );
};

export default BigText;
