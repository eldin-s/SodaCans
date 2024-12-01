import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <Image src={"/logo.png"} width={70} height={70} alt="Coozy" />
    </header>
  );
};

export default Header;
