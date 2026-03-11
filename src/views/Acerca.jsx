const Acerca = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">Clon WhatsApp</h1>

      <h3 className="about-subtitle">Descripción del proyecto</h3>
      <p className="about-text">
        Este proyecto es un clon de WhatsApp desarrollado como trabajo final del curso
        de Desarrollo Web Frontend. Permite registrar usuarios, enviar mensajes
        y mantener la sesión activa mediante React Context.
      </p>

      <h3 className="about-subtitle">Partes principales de la aplicación</h3>
      <p className="about-text">
        - Gestión de usuarios con registro y login.<br />
        - Persistencia de sesión usando Context y localStorage.<br />
        - Envío de mensajes entre usuarios seleccionados.<br />
        - Navegación entre páginas públicas y privadas usando React Router.
      </p>

      <h3 className="about-subtitle">Tecnologías utilizadas</h3>
      <p className="about-text">
        React, React Router, Vite, JavaScript, HTML, CSS
      </p>

      <h3 className="about-subtitle">Decisiones de desarrollo</h3>
      <p className="about-text">
        Se utilizó React Context para la persistencia de usuario y localStorage
        para mantener la sesión incluso al recargar la página. Se optó por
        mantener la estructura modular de componentes y vistas para facilitar
        futuras ampliaciones.
      </p>

      <h3 className="about-subtitle">Observaciones</h3>
      <p className="about-text">
        La interfaz se mantiene simple, con el objetivo de enfocarse en la
        funcionalidad y la correcta persistencia de datos.
      </p>

      <a className="about-link" href="/Login">Volver a inicio de sesión</a>
    </div>
  );
};

export { Acerca };