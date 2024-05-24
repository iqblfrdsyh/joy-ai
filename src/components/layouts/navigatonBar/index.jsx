import { Image } from "@nextui-org/react";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="py-3 px-2 sm:py-6 sm:px-16 flex items-center fixed top-0 w-full bg-[#0c0c0c] opacity-100 z-50">
        <figure>
            <Image src="./images/icons/icon.png" alt="icon-joy-ai" width="35px"/>
        </figure>
      <h1 className="text-[22px] font-semibold">Joy AI</h1>
    </nav>
  );
};

export default NavigationBar;
