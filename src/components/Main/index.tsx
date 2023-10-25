"use client";

import { useState } from "react";
import Image from "next/image";
import PowerStats from "@/components/PowerStats";
import Biography from "@/components/Biography";
import Appearance from "@/components/Appearance";
import Connections from "@/components/Connections";

export default function Main({ loading, characterData }: any) {
    const [activeTab, setActiveTab] = useState("poderes");

    const tabsStyle =
        "text-[1.2rem] font-semibold text-white cursor-pointer hover:border-b-2 border-red-500";

    const tabsData = [
        { label: "Poderes", value: "poderes" },
        { label: "Biografia", value: "biografia" },
        { label: "Aparência", value: "aparencia" },
        { label: "Conexões", value: "conexoes" },
    ];

    return (
        <main
            className={`h-screen flex flex-col md:flex-row items-center md:items-start justify-between p-2 md:p-10`}
        >
            {loading ? (
                <h1 className="self-center md:self-start font-semibold">
                    Carregando...
                </h1>
            ) : !characterData ? (
                <h1 className="mt-3 self-center md:self-start font-light">
                    Nenhum personagem encontrado.
                </h1>
            ) : (
                <>
                    <div className="w-[90%] md:w-[30%] my-7 md:my-0 avatar flex justify-center md:justify-start items-center">
                        <div>
                            <Image
                                className="w-72 md:w-[100%] h-72 md:h-[100%] rounded-full md:rounded-[3rem] mt-0 md:mt-[4rem] overflow-hidden"
                                src={characterData?.image?.url ?? ""}
                                alt={String(characterData?.name)}
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[70%] h-[100%] ml-0 md:ml-[3rem]">
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
    )
}