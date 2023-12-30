import { useParams } from "react-router-dom";
import { Card } from "../../shared/card";
import { EpisodeData } from "../../types/data";
import { useGetCurrentItem } from "../../hooks/useGetCurrentItem";
const Episode = () => {
  const { id } = useParams<{ id?: string }>();
  const { currentItem, loading, error } = useGetCurrentItem<EpisodeData>(
    "https://rickandmortyapi.com/api/episode",
    id
  );
  if (!id) return "Эпизод не найден";
  if (loading || !currentItem) return "Loading";
  if (error) return "Что-то пошло не так:(";
  return (
    <Card
      episode={currentItem.episode}
      name={currentItem.name}
      air_date={currentItem.air_date}
    />
  );
};
export default Episode;
