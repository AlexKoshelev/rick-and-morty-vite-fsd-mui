import { useSearchParams } from "react-router-dom";

interface RequiredType {
  created: string;
}
type SortType = "ASC" | "DESC" | null;
type ReturnType<T> = [
  T[],
  SortType | null,
  React.Dispatch<React.SetStateAction<URLSearchParams>>
];
export function useSorted<T extends RequiredType>(data: T[]): ReturnType<T> {
  const [searchParams, setSearchParams] = useSearchParams(
    new URLSearchParams("s=null")
  );
  const val: SortType | null = searchParams.get("s") as SortType;
  function compare(a: T, b: T): number {
    const dateA: Date = new Date(a.created);
    const dateB: Date = new Date(b.created);
    if (val === "ASC") {
      return +dateB - +dateA;
    }
    if (val === "DESC") {
      return +dateA - +dateB;
    }
    return 0;
  }
  const sortedData = val !== null ? data.sort(compare) : data;
  return [sortedData, val, setSearchParams];
}
