import React from "react";
import { CardSort } from "../Main";

import {
  FilterCaption,
  FilterContainer,
  RadioContainer,
  RadioInput,
} from "./styled";

const FilterSort: React.FC<{
  filterValue: CardSort;
  onChange: (e: any) => void;
}> = ({ filterValue, onChange }) => {
  return (
    <FilterContainer>
      <FilterCaption>Sort: </FilterCaption>
      <RadioContainer>
        <label>
          Category
          <RadioInput
            type="radio"
            name="sort"
            checked={filterValue === CardSort.Category}
            value={CardSort.Category}
            onChange={onChange}
          />
        </label>
        <label>
          Date
          <RadioInput
            type="radio"
            name="sort"
            checked={filterValue === CardSort.Timestamp}
            value={CardSort.Timestamp}
            onChange={onChange}
          />
        </label>
        <label>
          Size
          <RadioInput
            type="radio"
            name="sort"
            checked={filterValue === CardSort.FileSize}
            value={CardSort.FileSize}
            onChange={onChange}
          />
        </label>
      </RadioContainer>
    </FilterContainer>
  );
};

export default FilterSort;
