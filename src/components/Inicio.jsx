import '../styles/Inicio.css'

const Inicio = () => {
  const colaboradores = [
    {
      nombre: "Colaborador 1",
      rol: "Desarrollador Frontend",
      descripcion: "Diseñor de las interfaces.",
    },
    {
      nombre: "Colaborador 2",
      rol: "Desarrollador Backend",
      descripcion: "Experto en Node.js y bases de datos.",
    },
    {
      nombre: "Colaborador 3",
      rol: "Desarrollador Frontend",
      descripcion: "Diseñora de las interfaces.",
    },
  ];

  return (
    <div className="inicio-container">
      <h1>Sistema De Riego Automático</h1>
      <p>Colaboradores del equipo:</p>
      <div className="tarjetas-container">
        {colaboradores.map((colaborador, index) => (
          <div key={index} className="tarjeta">
            <h2>{colaborador.nombre}</h2>
            <h3>{colaborador.rol}</h3>
            <p>{colaborador.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
