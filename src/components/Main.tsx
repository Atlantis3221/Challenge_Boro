import React, { useEffect, useState, useMemo } from "react";
import Cards, { CardSort, ICard } from "./Cards";
import Pagination from "./Pagination";
import FilterView from "./View";
import FilterSort from "./Sort";
import useCatalog from "../hooks/useCatalog";

const Main = () => {
  const { data, sort, handleSortChange } = useCatalog();

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(25);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCard = useMemo(() => {
    return data.slice(firstCardIndex, lastCardIndex);
  }, [data, firstCardIndex, lastCardIndex]);

  const paginate = (pageNumbers: number) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <main>
      <FilterView />
      <FilterSort filterValue={sort} onChange={handleSortChange} />
      <Cards data={currentCard} />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={data.length}
        paginate={paginate}
      />
    </main>
  );
};

export default Main;
