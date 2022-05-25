import CountrieList from "./Component/CountrieList";
import "./App.css";
import NavNav from "./Component/NavNav";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Details from "./Component/Details";

function App() {
  return (
    <div className="App">
      <NavNav />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/countries" element={<CountrieList/>}/>
      </Routes>
    </div>
  );
}

export default App;
