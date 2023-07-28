import fetchCharacterData from "@/services/fetchCharacterData";
import { useState } from "react";

interface SearchCharacter {
  search: any;
}

export default function Header({ search }: SearchCharacter) {
  const [searchCharacter, setSearchCharacter] = useState();

  const loadData = async () => {
    const response = await fetchCharacterData(searchCharacter);
    setSearchCharacter(response);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center w-full bg-transparent p-2 md:p-10">
      <h1 className="text-[1.5rem] font-semibold mb-[1rem] md:mb-0">
        Super<span className="text-red-600">Hero</span>
      </h1>
      <div className="relative w-[80%] md:w-[30%] flex flex-row justify-center items-center">
        <div className="absolute inset-y-0 left-0 flex items-center px-[1.5rem] pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          value={searchCharacter}
          onChange={() => setSearchCharacter(e.target.value)}
          className="bg-transparent w-full h-[3rem] pl-[3rem] rounded-full text-gray-400 font-bold border-solid border-[0.5px] border-gray-500 outline-none"
          placeholder="Pesquise um personagem"
        />
      </div>
    </header>
  );
}
