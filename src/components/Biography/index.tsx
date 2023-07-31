import { TbBiohazard } from "react-icons/tb";

type BiographyProps = {
  [key: string]: string;
};

export default function Biography({ characterData }: { characterData: any }) {
  const { biography } = characterData;

  const translations: BiographyProps = {
    "full-name": "Nome Completo",
    "alter-egos": "Alter Egos",
    aliases: "Apelidos",
    "place-of-birth": "Local de Nascimento",
    "first-appearance": "Primeira Aparição",
    publisher: "Editora",
    alignment: "Alinhamento",
  };

  return (
    <>
      {Object.entries(biography || {}).map(
        ([stat, value]: any, index) => {
          const translatedStat =
            translations[stat as keyof BiographyProps];

          return (
            <div
              key={index}
              className="flex flex-row justify-between items-center py-2 pr-2 mb-[2rem] mt-[2rem]"
            >
              <div className="flex flex-row justify-between items-center">
                <TbBiohazard />
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
