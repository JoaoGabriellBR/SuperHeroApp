"use client";

import { AiOutlineStar } from "react-icons/ai";

type AppearanceTranslations = {
  [key: string]: string;
};

export default function Appearance({ characterData }: { characterData: any }) {
  const translations: AppearanceTranslations = {
    gender: "Gênero",
    race: "Raça",
    height: "Altura",
    weight: "Peso",
    "eye-color": "Cor dos olhos",
    "hair-color": "Cor do cabelo",
  };

  return (
    <>
      {Object.entries(characterData?.appearance || {}).map(
        ([stat, value]: any, index) => {
          const translatedStat =
            translations[stat as keyof AppearanceTranslations];

          return (
            <div
              key={index}
              className="flex flex-row justify-between items-center py-2 pr-2 mb-[2rem] mt-[2rem] bg-neutral-950"
            >
              <div className="flex flex-row justify-between items-center">
                <AiOutlineStar />
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
