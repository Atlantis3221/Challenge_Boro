import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Pagination from "./Pagination";

const Main = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(25);
  
    useEffect(() => {
      const getCards = async () => {
        setLoading(true);
        const res = await axios.get("http://contest.elecard.ru/frontend_data/catalog.json")
        setData(res.data)
        setLoading(false)
      }

      getCards()
    }, []);
    
    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    const currentCard = data.slice(firstCardIndex, lastCardIndex);

    const paginate = (pageNumbers:number) => {
      setCurrentPage(pageNumbers)
  };

    return (
      <>
      <Cards data={currentCard} loading={loading}/> 
      <Pagination 
        cardsPerPage={cardsPerPage}
        totalCards={data.length}
        paginate={paginate}
      />
      </>
    );
}

export default Main