import React from "react";
import { CardSort } from "../interfaces/CardSort";

import {
  ContainerCaption,
  Container,
  RadioContainer,
} from "../UI/styled";
import RadioButton from "../UI/RadioButton";

const FilterSort: React.FC<{
  filterValue: CardSort;
  onChange: (e: any) => void;
}> = ({ filterValue, onChange }) => {
  return (
    <Container>
      <ContainerCaption>Sort: </ContainerCaption>
      <RadioContainer>
        <RadioButton
          text={"Category"}
          type={"radio"}
          name={"sort"}
          checked={filterValue === CardSort.Category}
          value={CardSort.Category}
          onChange={onChange}
        />
        <RadioButton
          text={"Date"}
          type={"radio"}
          name={"sort"}
          checked={filterValue === CardSort.Timestamp}
          value={CardSort.Timestamp}
          onChange={onChange}
        />
        <RadioButton
          text={"Size"}
          type={"radio"}
          name={"sort"}
          checked={filterValue === CardSort.FileSize}
          value={CardSort.FileSize}
          onChange={onChange}
        />
      </RadioContainer>
    </Container>
  );
};

export default FilterSort;
