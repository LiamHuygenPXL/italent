import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Aboutme from './components/pages/Aboutme';
import Overview from './components/pages/Overview';
import Selected from './components/pages/Selected';
import Hackathon from './components/pages/Hackathon';
import Team from './components/pages/Team';
import Brein from './components/pages/Brein';
import Extra from './components/pages/Extra';
import Eindreflectie from './components/pages/Eindreflectie';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/i-talent' exact element={<Home />} />
          <Route path='/overmij' exact element={<Aboutme />} />
          <Route path='/overzicht' exact element={<Overview />} />
          <Route path='/selectie' exact element={<Selected />} />
          <Route path='/hackathon' exact element={<Hackathon />} />
          <Route path='/team' exact element={<Team />} />
          <Route path='/brein-aan-het-werk' exact element={<Brein />} />
          <Route path='/eindreflectie' exact element={<Eindreflectie />} />
          <Route path='/extra' exact element={<Extra />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
