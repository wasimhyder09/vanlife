import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({email: "", password: ""})
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError(null)
    loginUser(loginFormData)
    .then(data => {
      localStorage.setItem("loggedIn", true)
      navigate('/host', {replace: true})
    })
    .catch(err => {
      setError(err)
    })
    .finally(() => {
      setStatus("idle")
    })
  }

  function handleChange(e) {
    const {name, value} = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  return(
    <div className="login-container">
      {(location.state ? <div className="message warning">{location.state.message}</div> : "")}
      {(error ? <div className="message error">{error.message}</div> : "")}
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email address"
           value={loginFormData.email}
           autoComplete="off"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          value={loginFormData.password}
          autoComplete="off"
        />
        <button
          disabled={status === 'submitting'}
          >
          {status === "submitting"
            ? "Logging in..."
            : "Log in"
          }
          </button>
      </form>
    </div>
  )
}