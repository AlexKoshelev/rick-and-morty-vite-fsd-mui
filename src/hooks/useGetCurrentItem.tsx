import axios from "axios";
import { useEffect, useState } from "react";

export function useGetCurrentItem<T>(url: string, id?: string) {
  const [currentItem, setCurrentItem] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `${url}/${id}`,
    })
      .then((res) => {
        setCurrentItem((p) => ({ ...p, ...res.data }));
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        console.error(e);
      });
  }, [id, url]);
  return { currentItem, loading, error };
}
