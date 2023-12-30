import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import { SortedButtons } from "../../features/sorted-buttons";
import { HeroData } from "../../types/data";
import { useGetItem } from "../../hooks/useGetItem";
const Heroes = () => {
  const { loading, error, items, lastNodeRef } = useGetItem<HeroData>(
    "https://rickandmortyapi.com/api/character"
  );
  const [sortedData, val, setSearchParams] = useSorted<HeroData>(items);

  return (
    <section className="list _container">
      <h1>Герои</h1>
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
export default Heroes;
