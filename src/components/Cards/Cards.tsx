import React, { useEffect, useState } from "react";
import { ICard } from "../Main";
import {
  Container,
  CardContainer,
  CardContent,
  CardImage,
  CardInfo,
  CloseIconWrapper,
  InfoCaption,
  InfoText,
} from "./styled";

const Cards: React.FC<{
  data: ICard[];
  onImageCloseClick: (key: string) => void;
  deletedCards: string[];
}> = ({ data, onImageCloseClick, deletedCards }) => {

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

  const parseName = (str: any) => {
    const array = str.split("/");
    const name = array[1].match(/[a-z]+/g);
    name.pop();
    const capitalize = (str: any) => {
      return str[0].toUpperCase() + str.slice(1);
    };
    return name.map(capitalize).join(" ");
  };

  return (
    <Container>
      {data.map((cardInfo) => (
        <>
          {deletedCards.includes(cardInfo.image) ? (
            ""
          ) : (
            <CardContainer key={cardInfo.image}>
              <CardImage
                style={{
                  background: `url(http://contest.elecard.ru/frontend_data/${cardInfo.image}`,
                }}
              />
              <CardContent>
                <CardInfo>
                  <InfoCaption>Name</InfoCaption>
                  <InfoText>{parseName(cardInfo.image)}</InfoText>
                </CardInfo>
                <CardInfo>
                  <InfoCaption>Category</InfoCaption>
                  <InfoText>{cardInfo.category}</InfoText>
                </CardInfo>
                <CardInfo>
                  <InfoCaption>Filesize</InfoCaption>
                  <InfoText>
                    <p>{(cardInfo.filesize / 1024).toFixed(2)} KB</p>
                  </InfoText>
                </CardInfo>
                <CardInfo>
                  <InfoCaption>Timestamp</InfoCaption>
                  <InfoText>{formatDate(cardInfo.timestamp)}</InfoText>
                </CardInfo>
              </CardContent>
              <CloseIconWrapper
                onClick={() => onImageCloseClick(cardInfo.image)}
              >
                <img src="/img/close_icon.svg" alt="" />
              </CloseIconWrapper>
            </CardContainer>
          )}
        </>
      ))}
    </Container>
  );
};

export default Cards;
