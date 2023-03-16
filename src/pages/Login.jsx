import { useState } from "react"
import { useLocation, useNavigate, useNavigation, Form, useActionData } from "react-router-dom"
import { loginUser } from "../api"

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  try {
    const data = await loginUser({email, password})
    localStorage.setItem('loggedIn', true)
    return data
  } catch (err) {
    return {
      error: err.message
    }
  }
}

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
  const [status, setStatus] = useState('idle')
  const location = useLocation()
  const navigate = useNavigate()
  const redirectPath = location.state?.redirectPath || '/host'
  const data = useActionData()
  const navigation = useNavigation()

  if(data?.token) {
    navigate(redirectPath, {replace: true})
  }

  return(
    <div className="login-container">
      {(location.state ? <div className="message warning">{location.state.message}</div> : "")}
      {(data?.error ? <div className="message error">{data.error}</div> : "")}
      <h1>Sign in to your account</h1>
      <Form className="login-form" action="/login" method="post">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <button
          disabled={navigation.state === 'submitting'}
          >
          {navigation.state === "submitting"
            ? "Logging in..."
            : "Log in"
          }
          </button>
      </Form>
    </div>
  )
}