import React from "react";
import { View } from "../interfaces/View";

import { ContainerCaption, Container, RadioContainer } from "../UI/styled";

import RadioButton from "../UI/RadioButton";

const FilterView: React.FC<{
  filterValue: View;
  onChange: (e: any) => void;
}> = ({ filterValue, onChange }) => {
  return (
    <Container>
      <ContainerCaption>View: </ContainerCaption>
      <RadioContainer>
        <RadioButton
          text={"Card"}
          type={"radio"}
          name={"cards-type"}
          checked={filterValue === View.Cards}
          value={View.Cards}
          onChange={onChange}
        />
        <RadioButton
          text={"Tree"}
          type={"radio"}
          name={"cards-type"}
          checked={filterValue === View.Tree}
          value={View.Tree}
          onChange={onChange}
        />
      </RadioContainer>
    </Container>
  );
};

export default FilterView;
