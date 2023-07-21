"use client";

import Header from "@/components/Header";
import Image from "next/image";
import batman from "../../public/batman.png";
import { useState } from "react";
import { Poppins } from "next/font/google";

import PowerStats from "@/components/PowerStats"

const poppins = Poppins({ subsets: ["latin"], weight: "100" });

export default function Home() {
  const [activeTab, setActiveTab] = useState("poderes");

  const tabsData = [
    { label: "Poderes", value: "poderes" },
    { label: "Biografia", value: "biografia" },
    { label: "Aparência", value: "aparencia" },
    { label: "Conexões", value: "conexoes" },
  ];

  const tabsStyle: string =
    "text-[1.2rem] font-semibold text-white cursor-pointer hover:border-b-2 border-red-500";

  return (
    <>
      <Header search="search" />
      <main className="flex flex-col md:flex-row items-center justify-between w-[100%] h-screen p-2 md:p-10">
        {/* DIV IMAGE */}
        <div className="w-[100%] md:w-[40%] h-[100%]">
          <Image
            src={batman}
            width="400"
            height="400"
            alt="Picture of the author"
          />
        </div>

        {/* DIV CHARACTER STATS */}
        <div className="w-[100%] md:w-[60%] h-[100%]">

          {/* TABS */}
          <p className="text-[2rem] font-semibold mb-[1.5rem]">Batman</p>

          <div className="w-full">
            <div className="flex flex-row justify-between items-center">
            {tabsData?.map((tab) => (
              <p
                key={tab.value}
                className={
                  tab.value === activeTab
                    ? `${tabsStyle} border-b-2 border-red-500`
                    : tabsStyle
                }
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </p>
            ))}
            </div>
          </div>

            {/* CONTENT BASED ON ACTIVE TAB */}
        <div className="mt-4">
          {activeTab === "poderes" && <PowerStats/>}
          {activeTab === "biografia" && <p>Conteúdo da biografia do Batman.</p>}
          {activeTab === "aparencia" && <p>Conteúdo da aparência do Batman.</p>}
          {activeTab === "conexoes" && <p>Conteúdo das conexões do Batman.</p>}
        </div>
          
        </div>
      </main>
    </>
  );
}
