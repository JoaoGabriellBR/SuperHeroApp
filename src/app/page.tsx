"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";

import PowerStats from "@/components/PowerStats";
import fetchCharacterData from "@/services/fetchCharacterData";
import Biography from "@/components/Biography";
import Appearance from "@/components/Appearance";
import Connections from "@/components/Connections";

type CharacterData = {
  name: string;
  image?: {
    url: string;
  };
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("poderes");
  const [characterData, setCharacterData] = useState<CharacterData>("Superman");

  const tabsData = [
    { label: "Poderes", value: "poderes" },
    { label: "Biografia", value: "biografia" },
    { label: "Aparência", value: "aparencia" },
    { label: "Conexões", value: "conexoes" },
  ];

  const tabsStyle: string =
    "text-[1.2rem] font-semibold text-white cursor-pointer hover:border-b-2 border-red-500";

  const loadData = async () => {
    const data = await fetchCharacterData(characterData);
    setCharacterData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header search="search" />
      <main
        className={`flex flex-col md:flex-row items-center justify-between w-[100%] h-screen p-2 md:p-10`}
      >
        {/* DIV IMAGE */}
        <div className={`w-[100%] md:w-[40%] h-[100%]`}>
          {/* <Image
            src={characterData?.image?.url ?? ""}
            alt={String(characterData?.name)}
            width="400"
            height="400"
          /> */}
          <h1>teste</h1>
        </div>

        {/* DIV CHARACTER STATS */}
        <div className="w-[100%] md:w-[60%] h-[100%]">
          {/* TABS */}
          <p className="text-[2rem] font-semibold mb-[1.5rem]">
            {characterData?.name}
          </p>

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

          <div className="mt-4">
            {activeTab === "poderes" && (
              <PowerStats characterData={characterData} />
            )}
            {activeTab === "biografia" && (
              <Biography characterData={characterData} />
            )}
            {activeTab === "aparencia" && (
              <Appearance characterData={characterData} />
            )}
            {activeTab === "conexoes" && (
              <Connections characterData={characterData} />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
