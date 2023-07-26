import api from "./api";

const fetchCharacterData = async (characterName: any) => {
  try {
    const response = await api.get(`/characters/${characterName}`);
    return response?.data?.data?.results?.find(
      (item: any) => item?.name.toUpperCase() === characterName.toUpperCase()
    );
  } catch (error) {
    console.error("Error fetching character data:", error);
    return null;
  }
};

export default fetchCharacterData;
