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
                <h1 className="text-[1rem] ml-2">{translatedStat}</h1>{" "}
              </div>

              <p className="text-[1rem] font-semibold">{value}</p>
            </div>
          );
        }
      )}
    </>
  );
}
