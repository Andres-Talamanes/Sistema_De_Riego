import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute'; 
import Dashboard from './components/Dashboard';
import Inicio from './components/Inicio';
import Beneficios from './components/Beneficios';
import Datos from './components/Datos';
import ControlDeSistema from './components/Control_de_sistema';
import Sabila from './components/Sabila';
import Suculentas from './components/Suculentas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/*" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="inicio" element={<Inicio />} />
          <Route path="beneficios" element={<Beneficios />} />
          <Route path="datos" element={<Datos />} />
          <Route path="sabila" element={<Sabila />} />
          <Route path="suculentas" element={<Suculentas />} />
          <Route path="control-sistema" element={<ControlDeSistema />}/>
        </Route>
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(<App />);
