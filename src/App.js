import React, { useState } from 'react';

function App() {
  const [residents, setResidents] = useState([]);
  const [name, setName] = useState('');
  const [apartment, setApartment] = useState('');

  const addResident = () => {
    if (name && apartment) {
      setResidents([...residents, { name, apartment }]);
      setName('');
      setApartment('');
    }
  };

  const removeResident = (index) => {
    const newResidents = residents.filter((_, i) => i !== index);
    setResidents(newResidents);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestion de Résidence</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom du résident"
      />
      <input
        type="text"
        value={apartment}
        onChange={(e) => setApartment(e.target.value)}
        placeholder="Numéro d'appartement"
      />
      <button onClick={addResident}>Ajouter Résident</button>
      <ul>
        {residents.map((resident, index) => (
          <li key={index}>
            {resident.name} - Appartement {resident.apartment} 
            <button onClick={() => removeResident(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;