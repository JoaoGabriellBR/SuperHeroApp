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
    <div className="flex flex-col py-2 pr-2 mb-[2rem] mt-[2rem] bg-neutral-950">
      {Object.entries(biography).map(([key, value], index) => (
        <div key={index} className="flex flex-row justify-between items-center mb-[2rem]">
          <h1 className="text-[1rem]">{translations[key]}</h1>
          <p className="text-[1rem] font-semibold">{value}</p>
        </div>
      ))}
    </div>
  );
}
  