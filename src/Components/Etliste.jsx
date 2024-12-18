import { useState } from 'react';
import AddEtudiant from './AddEt';

const Etliste = ({ etudiants }) => {
  const [etudiantList, setEtudiantList] = useState(etudiants);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const supprimerEtudiant = (idEtudiant) => {
    const nouveauxEtudiants = etudiantList.filter((etudiant) => etudiant.id !== idEtudiant);
    setEtudiantList(nouveauxEtudiants);
  };

  const handleEditClick = (etudiant) => {
    setSelectedStudent(etudiant);
  };

  const handleFormSubmit = (newEtudiant) => {
    if (selectedStudent) {
      setEtudiantList(
        etudiantList.map((etudiant) =>
          etudiant.id === selectedStudent.id ? { ...newEtudiant, id: selectedStudent.id, lastModified: new Date().toLocaleString() }: etudiant
        )
      );
      setSelectedStudent(null);
    } else {
      setEtudiantList([...etudiantList,{ ...newEtudiant, id: Date.now(), lastModified: new Date().toLocaleString() },
      ]);
    }
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>{selectedStudent ? 'Modifier Etudiant' : 'Ajouter Etudiant'}</h2>
        <AddEtudiant
          onSubmit={handleFormSubmit}
          selectedStudent={selectedStudent}
          clearSelection={() => setSelectedStudent(null)}
        />
      </div>

      <div className="list-section">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Âge</th>
              <th>Filière</th>
              <th>Modifier</th>
              <th>Supprimer</th>
              <th>Dernière modification</th>
            </tr>
          </thead>
          <tbody>
            {etudiantList.map((etudiant) => (
              <tr key={etudiant.id}>
                <td>{etudiant.nom}</td>
                <td>{etudiant.prenom}</td>
                <td>{etudiant.age}</td>
                <td>{etudiant.filiere}</td>
                <td>
                  <button className="Modifier" onClick={() => handleEditClick(etudiant)}>
                    <img src="/Edit.png" alt="Edit" style={{ width: '20px', height: '20px' }} />
                  </button>
                </td>
                <td>
                  <button className="supprimer" onClick={() => supprimerEtudiant(etudiant.id)}>
                    <img src="/Delete.png" alt="Delete" style={{ width: '20px', height: '20px' }} />
                  </button>
                </td>
                <td>{etudiant.lastModified || 'Jamais modifié'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Nb d'étudiants : {etudiantList.length}</h3>
      </div>
    </div>
  );
};

export default Etliste;
