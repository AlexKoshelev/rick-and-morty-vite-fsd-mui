import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../shared/card";
import { HeroData } from "../../types/data";
import { useGetCurrentItem } from "../../hooks/useGetCurrentItem";
const Hero: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { currentItem, loading, error } = useGetCurrentItem<HeroData>(
    "https://rickandmortyapi.com/api/character",
    id
  );
  if (!id) return "Персонаж не найден";
  if (loading || !currentItem) return "Loading";
  if (error) return "Что-то пошло не так:(";
  return (
    <Card
      image={currentItem.image}
      gender={currentItem.gender}
      name={currentItem.name}
      species={currentItem.species}
      status={currentItem.status}
      type={currentItem.type}
    />
  );
};
export default Hero;
