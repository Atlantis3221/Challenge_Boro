import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  padding: 15px;
  display: flex;
  margin-bottom: 30px;
  width: 100%;
  justify-content: center;
`;
const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 13px;
`;
const ListItem = styled.li``;
const ListLink = styled.a`
  border-radius: 2px;
  background: lightgray;
  &:hover,
  &:focus {
    color: #ccc;
    background-color: gray;
    transition: all 0.5s ease-out;
  }
  padding: 4px;
  text-decoration: none;
  width: 100%;
  height: 100%;
`;

const Pagination: React.FC<{
  cardsPerPage: number;
  totalCards: number;
  paginate: (pageNumbers: number) => void;
}> = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationList>
        {pageNumbers.map((number) => (
          <ListItem key={number}>
            <ListLink href="#" onClick={() => paginate(number)}>
              {number}
            </ListLink>
          </ListItem>
        ))}
      </PaginationList>
    </PaginationContainer>
  );
};

export default Pagination;
