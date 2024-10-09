import React, { useState } from 'react';
import '../styles/ControlDeSistema.css';

const ControlDeSistema = () => {
  const [flujoAgua, setFlujoAgua] = useState(50); // Valor inicial del flujo de agua (50%)
  
  const encenderSistema = () => {
    console.log('Sistema encendido');
    // Aquí puedes agregar la lógica para encender el sistema y guardar datos
  };

  const apagarSistema = () => {
    console.log('Sistema apagado');
    // Aquí puedes agregar la lógica para apagar el sistema y guardar datos
  };

  const handleFlujoChange = (event) => {
    setFlujoAgua(event.target.value);
    console.log(`Flujo de agua ajustado a: ${event.target.value}%`);
    // Aquí puedes agregar la lógica para ajustar el flujo de agua en el sistema
  };

  return (
    <div className="control-sistema-container">
      <h1>Control de Sistema de Riego</h1>
      <button onClick={encenderSistema}>Encender</button>
      <button onClick={apagarSistema}>Apagar</button>
      <div>
        <h2>Ajustar Flujo de Agua</h2>
        <input
          type="range"
          min="0"
          max="100"
          value={flujoAgua}
          onChange={handleFlujoChange}
        />
        <p>Flujo actual: {flujoAgua}%</p>
      </div>
    </div>
  );
};

export default ControlDeSistema;
