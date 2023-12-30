import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import { SortedButtons } from "../../features/sorted-buttons";
import { LocationData } from "../../types/data";
import { useGetItem } from "../../hooks/useGetItem";
const Locations = () => {
  const { loading, error, items, lastNodeRef } = useGetItem<LocationData>(
    "https://rickandmortyapi.com/api/location"
  );
  const [sortedData, val, setSearchParams] = useSorted<LocationData>(items);
  return (
    <section className="list _container">
      <h1>Локации</h1>
      <SortedButtons val={val} setSearchParams={setSearchParams} />
      <ul>
        {sortedData.map((e, i) => (
          <li
            ref={sortedData.length - 10 === i + 1 ? lastNodeRef : undefined}
            key={e.id}
          >
            <>
              <NavLink to={`${e.id}`}>{e.name}</NavLink>
            </>
          </li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
    </section>
  );
};
export default Locations;
