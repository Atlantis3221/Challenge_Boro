import React, { useEffect, useState, useMemo } from "react";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination";
import FilterView from "./View";
import FilterSort from "./Sort";
import ResetButton from "./ResetButton";
import useCatalog from "../hooks/useCatalog";
import styled from "styled-components";

const Layout = styled.main`
  padding: 30px;
`;
export interface ICard {
  category: string;
  image: string;
  filesize: number;
  timestamp: number;
}
export enum CardSort {
  Category = "category",
  Timestamp = "timestamp",
  FileSize = "filesize",
}

const Main = () => {
  const { data, sort, handleSortChange } = useCatalog();

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(25);
  // @ts-ignore
  const [getLocal, setGetLocal] = useState(JSON.parse(localStorage.getItem("deletedCards")));
  const [deletedCards, setDeletedCards] = useState<any[]>([]);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCard = useMemo(() => {
    return data.slice(firstCardIndex, lastCardIndex);
  }, [data, firstCardIndex, lastCardIndex]);

  const onImageCloseClick = (key: string) => {
    setDeletedCards((prevState) => [...prevState, key]);
  };

  useEffect(() => {
    if (getLocal !== null) {
      setDeletedCards(getLocal);
    }

  }, [getLocal]);

  useEffect(() => {
    localStorage.setItem("deletedCards", JSON.stringify(deletedCards));
  }, [deletedCards]);

  const resetLocal = () => {
    setDeletedCards([]);
    localStorage.clear();
  };
  const paginate = (pageNumbers: number) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <Layout>
      <FilterView />
      <FilterSort filterValue={sort} onChange={handleSortChange} />
      <ResetButton resetLocal={resetLocal} />
      <Cards
        data={currentCard}
        onImageCloseClick={onImageCloseClick}
        deletedCards={deletedCards}
      />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={data.length}
        paginate={paginate}
      />
    </Layout>
  );
};

export default Main;
