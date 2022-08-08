import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import useCatalog from "./hooks/useCatalog";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`

function App() {
  const {loading} = useCatalog()
  return (
    <div style={{height: "100vh"}}>
      {loading ? <LoaderWrapper><ClipLoader color={"ccc"} loading={loading} size={150} /></LoaderWrapper> : 
      <>
      <Header />
      <Main />
      <Footer />
      </>
    }
    </div>
  );
}

export default App;
