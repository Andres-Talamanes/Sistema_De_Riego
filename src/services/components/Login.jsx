import { useState } from 'react';
import { auth } from '../services/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/inicio'); 
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.code, error.message);
      alert("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); 
  };

  return (
    <div className="login-wrapper">
      <p className='login-title'>SISTEMA DE RIEGO</p>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <h2>Iniciar Sesión</h2>
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Iniciando...' : 'Iniciar Sesión'}
          </button>
          <button onClick={handleRegisterRedirect}>Registrarse</button> {/* Botón de registro */}
        </form>
      </div>
      <footer className="footer">
        <p>© Colaboradores. Hernandez Talamantes Andres Manuel | Hurtado Mijares Priscilla 
        | Murillo Salinas Luis Angel</p>
      </footer>
    </div>
  );
};

export default Login;
