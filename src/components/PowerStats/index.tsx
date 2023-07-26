"use client";

import { FaSuperpowers } from "react-icons/fa";

type PowerStatsTranslations = {
  [key: string]: string;
};

export default function PowerStats({ characterData }: { characterData: any }) {
  const translations: PowerStatsTranslations = {
    combat: "Combate",
    durability: "Durabilidade",
    intelligence: "Inteligência",
    power: "Poder",
    speed: "Velocidade",
    strength: "Força",
  };

  return (
    <>
      {Object.entries(characterData?.powerstats || {}).map(
        ([stat, value]: any, index) => {
          const translatedStat =
            translations[stat as keyof PowerStatsTranslations];

          return (
            <div
              key={index}
              className="flex flex-row justify-between items-center py-2 pr-2 mb-[2rem] mt-[2rem] bg-neutral-950"
            >
              <div className="flex flex-row justify-between items-center">
                <FaSuperpowers />
                <p className="ml-2">{translatedStat}</p>{" "}
              </div>

              <p className="text-[1.3rem] text-red-500 text-bold">{value}</p>
            </div>
          );
        }
      )}
    </>
  );
}
