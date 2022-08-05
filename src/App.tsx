import Header from "./components/Header";
import styled from "styled-components";
import Main from "./components/Main";
import FilterView from "./components/filter/FilterView";
import FilterSort from "./components/filter/FilterSort";



function App() {
  return (
    <div>
      <Header/>
      <FilterView/>
      <FilterSort/>
      <Main />
    </div>
  );
}

export default App;
