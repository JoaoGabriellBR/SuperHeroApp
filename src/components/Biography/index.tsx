import { TbBiohazard } from "react-icons/tb";
import CharacterDataComponent from "@/components/CharacterDataComponent";

export default function Biography({ characterData }: { characterData: any }) {
  const { biography } = characterData;

  const translations = {
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
      <CharacterDataComponent
        step={biography}
        translations={translations}
        icon={<TbBiohazard />}
      />
    </>
  );
}
