import "./App.css";
import { CounterContextProvider } from "./Components/CounterContext/CounterContext";
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <CounterContextProvider>
        <Navbar />
        <Header />
        <Items />
      </CounterContextProvider>
    </>
  );
}

export default App;
