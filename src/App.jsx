import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import data from './Etudiants.json';
import Etliste from './Components/Etliste';

function App() {
  return (
    <Router>
      <h1>Gestion des étudiants</h1>
      <Routes>
        <Route path="/" element={<Etliste etudiants={data} />} />
      </Routes>
    </Router>
  );
}

export default App;
