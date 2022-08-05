import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  column-gap: 30px;
`
const CardContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 5px black;
  row-gap: 10px;
`
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const InfoCaption = styled.div`
  text-transform: uppercase;
  opacity: 0.7;

`
const InfoText = styled.div`

`

interface cardI {
  category: string;
  image: string;
  filesize: number;
  timestamp: number;
}

const Cards: React.FC<{
  data: cardI[]
  loading: boolean
}> = ({ data, loading }) => {
  
  if (loading) {
    return <div>Загрузка...</div>
  }

  return (
    <Container>
      {data.map((cardInfo:cardI, i) => (
        <CardContainer key={i}>
          <img src={cardInfo.image} alt="img"/>
          <CardInfo>
            <InfoCaption>Category</InfoCaption>
            <InfoText>{cardInfo.category}</InfoText>
          </CardInfo>
          <CardInfo>
            <InfoCaption>Filesize</InfoCaption>
            <InfoText>{cardInfo.filesize}</InfoText>
          </CardInfo>
          <CardInfo>
            <InfoCaption>Timestamp</InfoCaption>
            <InfoText>{cardInfo.timestamp}</InfoText>
          </CardInfo>
        </CardContainer>
      ))}
    </Container>
  );
};

export default Cards;
