"use client";

import { useState, useEffect } from "react";
import { FaSuperpowers } from "react-icons/fa";
import api from "@/services/api";

export default function PowerStats() {
  const [characterData, setCharacterData] = useState([]);

  const array = [
    { label: "Inteligência", stats: 100 },
    { label: "Inteligência", stats: 100 },
  ];

  const loadData = async () => {
    const response = await api({
      method: "GET",
      url: `/search/batman`,
    });
    setCharacterData(response?.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {array?.map((item) => {
        return (
          <div className="flex flex-row justify-between items-center py-2 pr-2 mb-[2rem] mt-[2rem] bg-neutral-950">
            <div className="flex flex-row justify-between items-center">
              <FaSuperpowers />
              <p className="ml-2">{item?.label}</p>
            </div>

            <p className="text-[1.3rem] text-red-500 text-bold">
              {item?.stats}
            </p>
          </div>
        );
      })}
    </>
  );
}
