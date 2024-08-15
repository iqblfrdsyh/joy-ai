"use client";

import React from "react";
import Link from "next/link";
import { AImodels } from "@/data/data.AI-model";
import { Image, Select, SelectItem } from "@nextui-org/react";
import useAIModel from "@/store/useModelAI";

const NavigationBar = () => {
  const switchAIModel = useAIModel((state) => state.switchAIModel);

  const handleChange = (value) => {
    const selectedModel = AImodels.AI_models.find((model) => model.id == value);

    if (selectedModel) {
      switchAIModel(selectedModel.name);
    }
  };

  return (
    <nav className="py-3 px-2 sm:py-6 sm:px-16 flex justify-between items-center fixed top-0 w-full bg-[#0c0c0c] opacity-100 z-50">
      <Link href="/" className="flex items-center">
        <figure>
          <Image
            src="/images/icons/joy-ai-icon.png"
            alt="icon-joy-ai"
            width={30}
            height={30}
          />
        </figure>
        <div className="flex gap-2 ml-2">
          <h1 className="text-[22px] font-semibold">Joy AI</h1>
          <span className="text-[12px] text-right font-light text-gray-400">
            v2.2.1
          </span>
        </div>
      </Link>
      <div className="w-[165px]">
        <Select
          placeholder="Select AI Model"
          defaultSelectedKeys={[1]}
          className="w-full"
          variant="underlined"
          color="warning"
          aria-labelledby="AI Model"
          onChange={(e) => handleChange(e.target.value)}
        >
          {AImodels.AI_models.map((model) => (
            <SelectItem
              key={model.id}
              value={model.name}
              className="text-black"
            >
              {model.name}
            </SelectItem>
          ))}
        </Select>
      </div>
    </nav>
  );
};

export default NavigationBar;
