import { AiOutlineStar } from "react-icons/ai";
import CharacterDataComponent from "@/components/CharacterDataComponent";

export default function Appearance({ characterData }: { characterData: any }) {
  const { appearance } = characterData;

  const translations = {
    gender: "Gênero",
    race: "Raça",
    height: "Altura",
    weight: "Peso",
    "eye-color": "Cor dos olhos",
    "hair-color": "Cor do cabelo",
  };

  return (
    <>
      <CharacterDataComponent
        step={appearance}
        translations={translations}
        icon={<AiOutlineStar />}
      />
    </>
  );
}
