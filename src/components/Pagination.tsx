import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
const PaginationList = styled.ul`
    display: flex;
    flex-direction: row;
    column-gap: 4px;
`
const ListItem = styled.li`
    padding:4px;
    border-radius: 2px;
    background: lightgray;
    color: black;
`


const Pagination:React.FC<{
    cardsPerPage: number
    totalCards: number
    paginate: (pageNumbers:number) => void
}> = ({cardsPerPage, totalCards, paginate}) => {
    
    const pageNumbers = [];

    for (let i = 1; i<=Math.ceil(totalCards / cardsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <PaginationContainer>
            <PaginationList>
                {
                    pageNumbers.map(number => (
                      <ListItem key={number}>
                          <a href="#" onClick={() => paginate(number)}>
                              {number}
                          </a>
                      </ListItem>
                    ))
                }
            </PaginationList>
        </PaginationContainer>
    );
};

export default Pagination;
