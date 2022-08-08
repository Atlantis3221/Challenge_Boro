import React, { useEffect, useState } from "react";
import { ICard } from "./Main";
import styled from "styled-components";
import useCatalog from "../hooks/useCatalog";

const TreeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.li`
  height: 64px;
  width: 64px;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 50%;
  cursor: pointer;
`;
const TreeItem = styled.p`
  cursor: pointer;
`;
const Overlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.4);
`;
const ModalContentWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  z-index: 999;
`;
const ModalContent = styled.img`
  width: 100%;
  z-index: 999;
`;

const Tree: React.FC<{
  categories: string[];
  data: ICard[];
}> = ({ categories, data }) => {
  const { formatDate, parseName } = useCatalog();
  const [isModal, setIsModal] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(null);
  const [isInfoVisible, setIsInfoVisible] = useState(null);

  const toggleName = (i: any) => {
    if (isNameVisible === i) {
      return setIsNameVisible(null);
    }

    setIsNameVisible(i);
  };
  const toggleInfo = (i: any) => {
    if (isInfoVisible === i) {
      return setIsInfoVisible(null);
    }

    setIsInfoVisible(i);
  };
  return (
    <TreeWrapper>
      <ul>
        {categories.map((category, i) => (
          <li key={i}>
            <TreeItem onClick={() => toggleName(i)}>
              {category}
              <span>{isNameVisible === i ? "-" : "+"}</span>
            </TreeItem>
            <ul
              style={{
                display: isNameVisible === i ? "block" : "none",
                paddingLeft: 15,
              }}
            >
              {data.map((card, i) => (
                <>
                  {card.category === category ? (
                    <li>
                      <TreeItem onClick={() => toggleInfo(i)}>
                        {parseName(card.image)}
                        <span>{isInfoVisible === i ? "-" : "+"}</span>
                      </TreeItem>
                      <ul
                        style={{
                          display: isInfoVisible === i ? "block" : "none",
                          paddingLeft: 15,
                        }}
                      >
                        <ImageWrapper
                          style={{
                            background: `url(http://contest.elecard.ru/frontend_data/${card.image}`,
                          }}
                          onClick={() => setIsModal(true)}
                        />
                        {isModal ? (
                          <Overlay onClick={() => setIsModal(false)}>
                            <ModalContentWrapper>
                              <ModalContent
                              onClick={e=>e.stopPropagation()}
                                src={`http://contest.elecard.ru/frontend_data/${card.image}`}
                              />
                            </ModalContentWrapper>
                          </Overlay>
                        ) : null}
                        <li>{(card.filesize / 1024).toFixed(2)} KB</li>
                        <li>{formatDate(card.timestamp)}</li>
                      </ul>
                    </li>
                  ) : null}
                </>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </TreeWrapper>
  );
};

export default Tree;
