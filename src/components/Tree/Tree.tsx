import React, { useEffect, useState } from "react";
import { ICard } from "../../interfaces/ICard";
import {
  TreeWrapper,
  TreeItem,
  TreeNames,
  ImageWrapper,
  Overlay,
  ModalContentWrapper,
  ModalContent,
} from "./styled";
import { formatDate, parseName } from "../../helpers/parser";

const Tree: React.FC<{
  categories: string[];
  data: ICard[];
}> = ({ categories, data }) => {
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
            <TreeNames
              isVisible={isNameVisible}
              i={i}
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
                      <TreeNames
                        isVisible={isInfoVisible}
                        i={i}
                      >
                        <ImageWrapper
                          background={card.image}
                          onClick={() => setIsModal(true)}
                        />
                        {isModal ? (
                          <Overlay onClick={() => setIsModal(false)}>
                            <ModalContentWrapper>
                              <ModalContent
                                onClick={(e) => e.stopPropagation()}
                                src={`http://contest.elecard.ru/frontend_data/${card.image}`}
                              />
                            </ModalContentWrapper>
                          </Overlay>
                        ) : null}
                        <li>{(card.filesize / 1024).toFixed(2)} KB</li>
                        <li>{formatDate(card.timestamp)}</li>
                      </TreeNames>
                    </li>
                  ) : null}
                </>
              ))}
            </TreeNames>
          </li>
        ))}
      </ul>
    </TreeWrapper>
  );
};

export default Tree;
