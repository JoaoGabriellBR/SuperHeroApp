import { FaSuperpowers } from "react-icons/fa";
import CharacterDataComponent from "@/components/CharacterDataComponent";

export default function PowerStats({ characterData }: { characterData: any }) {
  const { powerstats } = characterData;

  const translations = {
    combat: "Combate",
    durability: "Durabilidade",
    intelligence: "Inteligência",
    power: "Poder",
    speed: "Velocidade",
    strength: "Força",
  };

  return (
    <>
      <CharacterDataComponent
        step={powerstats}
        translations={translations}
        icon={<FaSuperpowers />}
      />
    </>
  );
}
