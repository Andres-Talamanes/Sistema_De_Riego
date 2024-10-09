import '../styles/Plantas.css';
import suculentasImage from '../assets/suculentas.webp'

const Suculentas = () => {
    return (
        <div className="plantas-container">
            <div className="info-container">
                <h1>Cuidados de las Suculentas</h1>
                <p>
                    Las suculentas son plantas de bajo mantenimiento que requieren cuidados específicos para prosperar. A continuación, se presentan algunos cuidados esenciales:
                </p>
                <ul>
                    <li><strong>Luz:</strong> Necesitan luz brillante y directa durante varias horas al día.</li>
                    <li><strong>Riego:</strong> Riega solo cuando el sustrato esté completamente seco, evitando el encharcamiento.</li>
                    <li><strong>Suelo:</strong> Usa una mezcla de sustrato adecuada para suculentas, que favorezca el drenaje.</li>
                    <li><strong>Temperatura:</strong> Prefieren temperaturas cálidas, evitando heladas.</li>
                    <li><strong>Fertilización:</strong> Puedes fertilizarlas durante la temporada de crecimiento con un abono específico para suculentas.</li>
                </ul>
            </div>
            <div className="image-container">
        <img src={suculentasImage} alt="Planta Suculentas" />
      </div>
        </div>
    );
};

export default Suculentas;
