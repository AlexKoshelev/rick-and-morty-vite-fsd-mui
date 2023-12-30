import { useParams } from "react-router-dom";
import { Card } from "../../shared/card";
import { useGetCurrentItem } from "../../hooks/useGetCurrentItem";
import { LocationData } from "../../types/data";
const Location = () => {
  const { id } = useParams<{ id?: string }>();
  const { currentItem, loading, error } = useGetCurrentItem<LocationData>(
    "https://rickandmortyapi.com/api/location",
    id
  );
  if (!id) return "Локация не найдена";
  if (loading || !currentItem) return "Loading";
  if (error) return "Что-то пошло не так:(";
  return (
    <Card
      dimension={currentItem.dimension}
      name={currentItem.name}
      type={currentItem.type}
    />
  );
};
export default Location;
