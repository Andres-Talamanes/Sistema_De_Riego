import '../styles/Datos.css'
const Datos = () => {
  return (
    <div className="data-container">
      <h1>Datos del sistema</h1>
      <div className='table-container'>
        <div className='column-container'>
          <p>Fecha</p>
          <p>Hora</p>
          <p>Cantidad de riegos</p>
          <p>Cantidad de agua usada</p>
        </div>
        <div className='row-container'>
          <p>info de base de datos</p>
        </div>
      </div>
    </div>
  );
};

export default Datos;