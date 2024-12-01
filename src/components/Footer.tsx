import Image from "next/image";
import React from "react";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="bg-[#0f081b] text-slate-300">
      <div className="relative mx-auto flex flex-col items-center gap-4 w-full max-w-4xl justify-center px-4 py-10">
        <Image src={"/logo.png"} width={70} height={70} alt="Coozy" />
        <h1 className="font-bold text-4xl uppercase tracking-wider">
          Coozy Furniture
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
