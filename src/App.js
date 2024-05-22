import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home"
import AgencyCards from './components/AgencyCards/AgencyCards';
import HousingComplexes from './components/HousingComplexes/HousingComplexes';
import  Apartments  from './components/Apartments/Apartments';
import About from "./components/About/About";
import Enterance from './components/Enterance/Enterance';
function App() {
  return (
    <Routes>
    <Route path={"/"}  element={ <Home/> } />
    <Route path={"/agency"}  element={ <AgencyCards /> } />
    <Route path={"/yasayis-kompleksi"}  element={ <HousingComplexes /> } />
    <Route path={`/filtered-cards/:category`}  element={ <Apartments /> } />
    <Route path={`/about`}  element={ <About /> } />
    <Route path={"/enterance"}  element={ <Enterance/> } />
   </Routes>
  );
}

export default App;
