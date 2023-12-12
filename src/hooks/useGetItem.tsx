import axios, { Canceler } from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
export function useGetItem<T>(url: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState<T[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  useEffect(() => {
    setLoading(false);
  }, [error]);
  useEffect(() => {
    setItems([]);
  }, [url]);

  const observer: React.MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver | null>(null);
  const lastNodeRef = useCallback(
    (node: Element | null) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((p) => p + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore, setPageNumber]
  );
  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Canceler;
    axios({
      method: "GET",
      url: url,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setItems((prevState) => {
          return [...new Set([...prevState, ...res.data.results])];
        });
        setHasMore(
          res.data.results.length > 0 && res.data.results.length === 20
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) {
          return;
        }
        setError(true);
        console.error(e);
      });

    return () => cancel();
  }, [pageNumber, url]);
  return {
    loading,
    error,
    items,
    lastNodeRef,
  };
}
