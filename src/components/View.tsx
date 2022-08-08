import React from "react";
import { View } from "./Main";

import {
  FilterCaption,
  FilterContainer,
  RadioContainer,
  RadioInput,
} from "./styled";

const FilterView: React.FC<{
  filterValue: View;
  onChange: (e: any) => void;
}> = ({ filterValue, onChange }) => {
  return (
    <FilterContainer>
      <FilterCaption>View: </FilterCaption>
      <RadioContainer>
        <label>
          {" "}
          Card
          <RadioInput
            type="radio"
            name="cards-type"
            checked={filterValue === View.Cards}
            value={View.Cards}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Tree list
          <RadioInput
            type="radio"
            name="cards-type"
            checked={filterValue === View.Tree}
            value={View.Tree}
            onChange={onChange}
          />
        </label>
      </RadioContainer>
    </FilterContainer>
  );
};

export default FilterView;
