import React from "react";
import { NavLink } from "react-router-dom";
import { useSorted } from "../../hooks/useSorted";
import { SortedButtons } from "../../features/sorted-buttons";
import { EpisodeData } from "../../types/data";
import { useGetItem } from "../../hooks/useGetItem";
const Episodes: React.FC = () => {
  const { loading, error, items, lastNodeRef } = useGetItem<EpisodeData>(
    "https://rickandmortyapi.com/api/episode"
  );
  const [sortedData, val, setSearchParams] = useSorted<EpisodeData>(items);
  return (
    <section className="list _container">
      <h1>Эпизоды</h1>
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
export default Episodes;
