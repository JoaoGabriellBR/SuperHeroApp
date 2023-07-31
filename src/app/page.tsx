"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import PowerStats from "@/components/PowerStats";
import Biography from "@/components/Biography";
import Appearance from "@/components/Appearance";
import Connections from "@/components/Connections";
import fetchCharacterData from "@/services/fetchCharacterData";

type CharacterData = {
  name: string;
  image?: {
    url: string;
  };
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("poderes");
  const [characterData, setCharacterData] = useState<CharacterData>();
  const [loading, setLoading] = useState(false);

  const tabsStyle =
    "text-[1.2rem] font-semibold text-white cursor-pointer hover:border-b-2 border-red-500";

  const tabsData = [
    { label: "Poderes", value: "poderes" },
    { label: "Biografia", value: "biografia" },
    { label: "Aparência", value: "aparencia" },
    { label: "Conexões", value: "conexoes" },
  ];

  const handleSearch = (data: any) => setCharacterData(data);
  const handleLoading = (value: any) => setLoading(value);

  useEffect(() => {
    const character = async () => {
      const response = await fetchCharacterData("Batman II");
      setCharacterData(response)
    }

    character();
  }, [])

  return (
    <>
      <Header onSearch={handleSearch} onLoading={handleLoading} />
      <main
        className={`flex flex-col md:flex-row items-center justify-between w-[100%] h-screen p-2 md:p-10`}
      >
        {loading ? (
          <h1 className="self-center md:self-start font-semibold">
            Carregando...
          </h1>
        ) : !characterData ? (
          <h1 className="self-center md:self-start font-semibold">
            Nenhum personagem encontrado.
          </h1>
        ) : (
          <>
            <div>
              <Image
                className="rounded-[2rem]"
                src={characterData?.image?.url ?? ""}
                alt={String(characterData?.name)}
                width={400}
                height={800}
                layout="responsive"
              />
            </div>

            <div className="w-[90%] md:w-[70%] h-[100%] ml-0 md:ml-[3rem]">
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
          </>
        )}
      </main>
    </>
  );
}
