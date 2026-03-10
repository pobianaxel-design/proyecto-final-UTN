import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Register = () => {
const  [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const { register, handleUser } = useContext(ChatContext)

  const navigate = useNavigate()

  const handlepage = (e) => {
  navigate("/Login")
 }
  const handleChangeNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const response = register({ nombre, email, password })

    if (!response) {
        console.log("error")
      setError(true)
      return
    }

    handleUser({ nombre, email, password })
        console.log("no error")
    navigate("/")
  }

  return (
    <section>
      <h2 className="title-login">Crear usuario</h2>
      <form onSubmit={handleSubmit}>
       <input
          type="text"
          placeholder="Tu nombre"
          onChange={handleChangeNombre}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChangeEmail}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={handleChangePassword}
        />
        <button>Registrarse</button>
        {
          error && <p className="error-form">Error al registrarse</p>
        }
      </form>
      <button onClick={handlepage}>login</button>
    </section>
  )
}

export { Register}