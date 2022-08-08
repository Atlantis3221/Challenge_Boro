import axios from "axios";
import { useEffect, useState } from "react";
import { CardSort, ICard } from "../components/Main";

const useCatalog = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ICard[]>([]);
  const [sort, setSort] = useState<CardSort>(CardSort.Category);

  const getCards = () => {
    setLoading(true);
    axios
      .get("http://contest.elecard.ru/frontend_data/catalog.json")
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCards();
  }, []);

  const handleSortChange = (e: any) => {
    setSort(e.target.value);
    setData((prevState) => sortCards(e.target.value, prevState));
  };

  const sortCards = (type: CardSort, d: ICard[]) => {
    switch (type) {
      case CardSort.Category:
        getCards();
        return [...d].sort();
      case CardSort.Timestamp:
        return [...d].sort((a, b) => a.timestamp - b.timestamp);
      case CardSort.FileSize:
        return [...d].sort((a, b) => a.filesize - b.filesize);
    }
  };

  return {
    data,
    error,
    loading,
    sort,
    handleSortChange
  };
};

export default useCatalog;
