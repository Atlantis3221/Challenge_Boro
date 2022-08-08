import axios from "axios";
import { useEffect, useState } from "react";
import { CardSort, ICard, View } from "../components/Main";

const useCatalog = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ICard[]>([]);
  const [sort, setSort] = useState<CardSort>(CardSort.Category);
  const [view, setView] = useState<View>(View.Cards);
  const [categories, setCategories] = useState([]);

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

  const parseName = (str: any) => {
    const array = str.split("/");
    const name = array[1].match(/[a-z]+/g);
    name.pop();
    const capitalize = (str: any) => {
      return str[0].toUpperCase() + str.slice(1);
    };
    return name.map(capitalize).join(" ");
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dateDay = date.getDate();
    return dateDay + " " + month + " " + year;
  };

  const getCategories = () => {
    // @ts-ignore
    const unique: any = [...new Set(data.map((a) => a.category))];
    setCategories(unique);
  };
  useEffect(() => {
    getCategories();
  }, [data]);

  useEffect(() => {
    getCards();
  }, []);

  const handleSortChange = (e: any) => {
    setSort(e.target.value);
    setData((prevState) => sortCards(e.target.value, prevState));
  };
  const handleViewChange = (e:any) => {
    setView(e.target.value);
  }

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
    view,
    handleSortChange,
    handleViewChange,
    categories,
    parseName,
    formatDate
  };
};

export default useCatalog;
