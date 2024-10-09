import '../styles/Plantas.css';
import sabilaImage from '../assets/sabila.jpg';

const Sabila = () => {
  return (
    <div className="plantas-container">
      <div className="info-container">
        <h1>Cuidados de la Planta Sábila</h1>
        <p>
          La sábila, también conocida como aloe vera, es una planta suculenta popular por sus propiedades medicinales y su facilidad de cuidado. A continuación, se presentan algunos consejos para mantenerla saludable:
        </p>
        <ul>
          <li><strong>Exposición a la luz:</strong> Coloca la sábila en un lugar donde reciba luz solar directa durante al menos 6 horas al día. Puede tolerar condiciones de luz más bajas, pero crecerá mejor con luz brillante.</li>
          <li><strong>Riego adecuado:</strong> Riega la planta cada 2-3 semanas, permitiendo que el sustrato se seque completamente entre riegos. Evita el encharcamiento, ya que puede causar pudrición de raíces.</li>
          <li><strong>Sustrato:</strong> Utiliza un sustrato bien drenado, como una mezcla para cactus o suculentas, que permita un buen drenaje del agua.</li>
          <li><strong>Temperatura:</strong> La sábila prospera en temperaturas entre 15°C y 30°C. Protéjela de las heladas y de temperaturas extremadamente frías.</li>
          <li><strong>Fertilización:</strong> Fertiliza la planta una vez al año en primavera con un fertilizante equilibrado, pero no es necesario fertilizar con frecuencia.</li>
          <li><strong>Plagas:</strong> Mantén un ojo en plagas comunes como cochinillas y pulgones. Si las encuentras, puedes limpiarlas con un paño húmedo o usar un insecticida natural.</li>
        </ul>
      </div>
      <div className="image-container">
        <img src={sabilaImage} alt="Planta Sábila" />
      </div>
    </div>
  );
};

export default Sabila;
