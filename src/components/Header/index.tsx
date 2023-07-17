interface SearchCharacter {
  search: any;
}

export default function Header({ search }: SearchCharacter) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center w-full bg-transparent p-2 md:p-10">
      <h1 className="text-[1.5rem] font-semibold mb-[1rem] md:mb-0">
        Super<span className="text-red-600">Hero</span>
      </h1>
      <input
        className="bg-transparent w-[30%] w-[90%] md:w-[30%] h-[3rem] px-5 rounded-full border-solid border-[0.5px] border-gray-500 outline-none"
        placeholder="Pesquise um personagem"
      />
    </header>
  );
}
