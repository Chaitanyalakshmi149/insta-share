import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const navigate = useNavigate()

  const onSubmitForm = async event => {
    event.preventDefault()

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()

    if (response.ok === true) {

      Cookies.set('jwt_token', data.jwt_token, {
        expires: 30,
      })

      navigate('/')

    } else {
      setShowError(true)
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <div className="login-bg-container">

      <div className="login-card">

        <div className="login-left-container">

          <img
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop"
            alt="website login"
            className="login-image"
          />

        </div>

        <div className="login-right-container">

          <div className="logo-container">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="website logo"
              className="logo-image"
            />

            <h1 className="logo-heading">
              Insta Share
            </h1>

          </div>

          <form
            className="form-container"
            onSubmit={onSubmitForm}
          >

            <h1 className="welcome-text">
              Welcome Back 👋
            </h1>

            <p className="description">
              Login to continue sharing moments
            </p>

            <label className="input-label">
              Username
            </label>

            <input
              type="text"
              className="input-field"
              placeholder="Enter username"
              value={username}
              onChange={event => setUsername(event.target.value)}
            />

            <label className="input-label">
              Password
            </label>

            <input
              type="password"
              className="input-field"
              placeholder="Enter password"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

            {showError && (
              <p className="error-message">
                * {errorMsg}
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  )
}

export default LoginForm