import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';
import { auth } from '../services/firebase/firebase';
import { signOut } from 'firebase/auth';
import { RiHome2Line, RiBarChart2Line, RiHeart2Line, RiLogoutBoxLine } from "react-icons/ri";
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [riegoData, setRiegoData] = useState([]);

  useEffect(() => {
    const fetchRiegoData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/registro_riego'); // Cambia esta URL si es necesario
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
          <li onClick={() => navigate('/datos')}>
            <RiBarChart2Line /> Datos
          </li>
          <li onClick={() => navigate('/control-sistema')}>
            <RiBarChart2Line /> Control de Sistema
          </li>
          <li onClick={handleLogout}>
            <RiLogoutBoxLine /> Salir
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <h2>Historial de Riegos</h2>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Veces Regadas</th>
              <th>Cantidad de Agua (L)</th>
            </tr>
          </thead>
          <tbody>
            {riegoData.length > 0 ? (
              riegoData.map((riego, index) => (
                <tr key={index}>
                  <td>{riego.fecha}</td>
                  <td>{riego.hora}</td>
                  <td>{riego.cantidad_de_veces_regada}</td>
                  <td>{riego.cantidad_de_agua_regada}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No hay datos de riego disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
