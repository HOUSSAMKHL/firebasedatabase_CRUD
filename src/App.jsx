import './App.css';
import data from './Etudiants.json';
import Etliste from './Components/Etliste';

function App() {
  return (
    <div>
      <h1>Gestion des étudiants</h1>

      <Etliste etudiants={data} />
    </div>
  );
}

export default App;
