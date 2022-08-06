import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  column-gap: 30px;
`
const CardContainer = styled.article`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ccc;
  row-gap: 10px;
`
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
const CardImage = styled.img`
  /* max-height: 150px; */
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

const Cards: React.FC<{
  data: ICard[]
}> = ({ data }) => {

  return (
    <Container>
      {data.map((cardInfo) => (
        <CardContainer key={cardInfo.image}>
          <CardImage src={`http://contest.elecard.ru/frontend_data/${ cardInfo.image}`} alt="img"/>
          <CardContent>
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
          </CardContent>
        </CardContainer>
      ))}
    </Container>
  );
};

export default Cards;
