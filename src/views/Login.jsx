import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login, handleUser } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handlepage = () => navigate("/register");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const response = login({ email, password });

    if (!response) {
      setError(true);
      return;
    }

    handleUser({ email, password });
    navigate("/");
  };

  return (
    <section className="login-container">
      <div className="login-box">
        <h2 className="login-title">Bienvenido</h2>
        <p className="login-subtitle">Inicia sesión para continuar</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Correo electrónico"
              onChange={handleChangeEmail}
              className="login-input"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Contraseña"
              onChange={handleChangePassword}
              className="login-input"
              required
            />
          </div>
          
          <button type="submit" className="btn-primary">Ingresar</button>
          
          {error && <p className="error-message">❌ Error al ingresar, revisa tus datos</p>}
        </form>

        <div className="login-footer">
          <p>¿No tienes cuenta?</p>
          <button onClick={handlepage} className="btn-secondary">Registrarse</button>
          <a className="about-link" href="/Acerca">Acerca de la App</a>
        </div>
      </div>
    </section>
  );
};

export { Login };