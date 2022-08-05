import React from "react";

import { FilterCaption, FilterContainer, RadioContainer, RadioInput } from "./styled";

const FilterSort = () => {
    return (
    <FilterContainer>
      <FilterCaption>Sort: </FilterCaption>
      <RadioContainer>
        <label> Category
          <RadioInput type="radio" checked name="sort" value="category" />
        </label>
        <label> Date
          <RadioInput type="radio" name="sort" value="date" />
        </label>
        <label> Size
          <RadioInput type="radio" name="sort" value="size" />
        </label>
      </RadioContainer>
    </FilterContainer>
    )
}

export default FilterSort