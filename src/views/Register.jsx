import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { register, handleUser } = useContext(ChatContext);
  const navigate = useNavigate();

  const handlepage = (e) => {
    navigate("/Login");
  };

  const handleChangeNombre = (e) => setNombre(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const response = register({ nombre, email, password });

    if (!response) {
      setError(true);
      return;
    }

    handleUser({ nombre, email, password });
    navigate("/");
  };

  return (
    <section className="register-page">
      <h2 className="register-title">Crear usuario</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="register-input"
          minLength={3}
          required
          type="text"
          placeholder="Tu nombre"
          onChange={handleChangeNombre}
        />
        {nombre.length < 3 && (
          <p className="error-form">Minimo 3 caracteres</p>
        )}

        <input
          className="register-input"
          required
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChangeEmail}
        />
        {!email.includes("@") && <p className="error-form">Mail no valido</p>}

        <input
          className="register-input"
          minLength={6}
          required
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
        />
        {password.length < 6 && (
          <p className="error-form">Contraseña débil (minimo 6)</p>
        )}

        <button className="register-button">Registrarse</button>
        {error && <p className="error-form">Error al registrarse</p>}
      </form>

      <button className="login-button" onClick={handlepage}>
        Login
      </button>

      <a className="about-link" href="/Acerca">
        Acerca
      </a>
    </section>
  );
};

export { Register };