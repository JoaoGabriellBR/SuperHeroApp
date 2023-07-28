"use client";

type ConnectionsTranslations = {
  [key: string]: string;
};

export default function Connections({ characterData }: { characterData: any }) {
  const translations: ConnectionsTranslations = {
    "group-affiliation": "Grupos Afiliados",
    relatives: "Relativos",
  };

  return (
    <>
      {Object.entries(characterData?.connections || {}).map(
        ([stat, value]: any, index) => {
          const translatedStat =
            translations[stat as keyof ConnectionsTranslations];

          return (
            <div
              key={index}
              className="flex flex-col justify-start items-start py-2 pr-2 mb-[2rem] mt-[2rem] bg-neutral-950"
            >
              <h1 className="text-[1rem] font-bold mb-2">{translatedStat}.</h1>
              <p className="text-[1rem] font-light">{value}.</p>
            </div>
          );
        }
      )}
    </>
  );
}
