import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';
import { auth } from '../services/firebase/firebase';
import { signOut } from 'firebase/auth';
import { RiHome2Line, RiBarChart2Line, RiHeart2Line, RiLogoutBoxLine, RiWaterFlashLine, RiPlantLine, RiPlantFill } from "react-icons/ri";
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [riegoData, setRiegoData] = useState([]);
  const [isPlantasOpen, setIsPlantasOpen] = useState(false); // Estado para controlar si el submenú está abierto

  useEffect(() => {
    const fetchRiegoData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/riego');
        setRiegoData(response.data);
      } catch (error) {
        console.error('Error obteniendo los datos de riego:', error);
      }
    };

    fetchRiegoData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  const togglePlantasMenu = () => {
    setIsPlantasOpen(!isPlantasOpen); // Cambia el estado de abierto/cerrado
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Menu</h2>
        <ul>
          <li onClick={() => navigate('/inicio')}>
            <RiHome2Line /> Inicio
          </li>
          <li onClick={() => navigate('/beneficios')}>
            <RiHeart2Line /> Beneficios
          </li>
          <li onClick={togglePlantasMenu}>
            <RiPlantLine /> Plantas
          </li>
          {isPlantasOpen && (
            <div className="submenu-container">
              <ul className={`submenu ${isPlantasOpen ? 'open' : ''}`}>
                <li onClick={() => navigate('/sabila')}><RiPlantFill />Sábila</li>
                <li onClick={() => navigate('/suculentas')}><RiPlantFill />Suculentas</li>
              </ul>
            </div>
          )}
          <li onClick={() => navigate('/datos')}>
            <RiBarChart2Line /> Datos
          </li>
          <li onClick={() => navigate('/control-sistema')}>
            <RiWaterFlashLine /> Control de Sistema
          </li>
          <li onClick={handleLogout}>
            <RiLogoutBoxLine /> Salir
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <table>
          <tbody>
            {riegoData.map((riego, index) => (
              <tr key={index}>
                <td>{riego.fecha}</td>
                <td>{riego.hora}</td>
                <td>{riego.cantidad_de_veces_regadas}</td>
                <td>{riego.cantidad_de_agua_regada}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
