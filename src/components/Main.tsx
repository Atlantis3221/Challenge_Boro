import React, { useEffect, useState, useMemo } from "react";
import Cards from "./Cards/Cards";
import Pagination from "./Pagination";
import FilterView from "./View";
import FilterSort from "./Sort";
import ResetButton from "./ResetButton";
import useCatalog from "../hooks/useCatalog";
import styled from "styled-components";
import Tree from "./Tree/Tree";
import { View } from "../interfaces/View";

const Layout = styled.main`
  padding: 30px;
`;

const Main = () => {
  const {
    data,
    sort,
    view,
    handleSortChange,
    handleViewChange,
    categories,
  } = useCatalog();

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(25);
  const [localCards, setLocalCards] = useState(
    localStorage.getItem("deletedCards")
  );
  const [deletedCards, setDeletedCards] = useState<any[]>([]);

  // {localCards !==null ? setDeletedCards(JSON.parse(localCards)): setDeletedCards([])}

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentCard = useMemo(() => {
    return data.slice(firstCardIndex, lastCardIndex);
  }, [data, firstCardIndex, lastCardIndex]);

  useEffect(() => {
    console.log(localCards)
    localStorage.setItem("deletedCards", JSON.stringify(deletedCards));
    console.log(deletedCards)
  }, [deletedCards]);

  useEffect(() => {
    if (localCards !== null) {
      const parsedCards = JSON.parse(localCards);
      return setDeletedCards(parsedCards);
    }
  }, [localCards]);

  const onImageCloseClick = (key: string) => {
    console.log(deletedCards);
    setDeletedCards((prevState) => [...prevState, key]);
    console.log(deletedCards);
    console.log(deletedCards);
  };

  const resetLocal = () => {
    setDeletedCards([]);
    localStorage.clear();
  };

  const paginate = (pageNumbers: number) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <Layout>
      <FilterView filterValue={view} onChange={handleViewChange} />

      {view === View.Cards ? (
        <>
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
        </>
      ) : (
        <Tree categories={categories} data={data} />
      )}
    </Layout>
  );
};

export default Main;
