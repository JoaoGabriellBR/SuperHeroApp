"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import fetchCharacterData from "@/services/fetchCharacterData";
import Main from "@/components/Main";

type CharacterData = {
  name: string;
  image?: {
    url: string;
  };
};

export default function Home() {
  const [characterData, setCharacterData] = useState<CharacterData>();
  const [loading, setLoading] = useState(false);

  const handleSearch = (data: any) => setCharacterData(data);
  const handleLoading = (value: boolean) => setLoading(value);

  useEffect(() => {
    const character = async () => {
      const response = await fetchCharacterData("Hellboy");
      setCharacterData(response)
    }

    character();
  }, []);

  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full">
      <Header onSearch={handleSearch} onLoading={handleLoading} />
      <Main loading={loading} characterData={characterData} />
    </div>
  );
}
