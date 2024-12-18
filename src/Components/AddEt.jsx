import { useState, useEffect } from 'react';

function AddEtudiant({ onSubmit, selectedStudent, clearSelection }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [age, setAge] = useState('');
  const [filiere, setFiliere] = useState('');

  useEffect(() => {
    if (selectedStudent !==null) {
      setNom(selectedStudent.nom);
      setPrenom(selectedStudent.prenom);
      setAge(selectedStudent.age);
      setFiliere(selectedStudent.filiere);
    }
  }, [selectedStudent]);

  const handleSubmit = () => {
    if (nom && prenom && age && filiere) {
      onSubmit({ nom, prenom, age, filiere });
      setNom('');
      setPrenom('');
      setAge('');
      setFiliere('');
      clearSelection();
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };
  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Nom" 
        value={nom} 
        onChange={(e) => setNom(e.target.value)

          
        } 
      />
      <input 
        type="text" 
        placeholder="Prénom" 
        value={prenom} 
        onChange={(e) => setPrenom(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Âge" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Filière" 
        value={filiere} 
        onChange={(e) => setFiliere(e.target.value)} 
      /><br/>
      <button onClick={handleSubmit}>{selectedStudent ? 'Modifier' : 'Ajouter'}</button>
    </div>
  );
}

export default AddEtudiant;
