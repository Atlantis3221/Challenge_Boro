import React from "react";

import { FilterCaption, FilterContainer, RadioContainer, RadioInput } from "./styled";

const FilterView = () => {
    return (
    <FilterContainer>
      <FilterCaption>View: </FilterCaption>
      <RadioContainer>
        <label> Card
          <RadioInput type="radio" name="cards-type" value="card" />
        </label>
        <label> Tree list
          <RadioInput type="radio" name="cards-type" value="tree-list" />
        </label>
      </RadioContainer>
    </FilterContainer>
    )
}

export default FilterView