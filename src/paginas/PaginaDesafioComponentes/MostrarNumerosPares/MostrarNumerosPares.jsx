import React from 'react';

const MostrarNumerosPares = ({ numeros }) => {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    
    return (
    <div>
      <h2>Os números pares são:</h2>
      <ul>
        {numerosPares.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarNumerosPares;
