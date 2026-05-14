import {Link, useNavigate} from 'react-router-dom'

import {
  FaHome,
  FaUser,
  FaSearch,
} from 'react-icons/fa'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const {searchInput, setSearchInput} = props

  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  return (
    <nav className="header-container">

      <div className="header-content">

        <Link
          to="/"
          className="website-logo-container"
        >

          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="website logo"
            className="website-logo"
          />

          <h1 className="logo-heading">
            Insta Share
          </h1>

        </Link>

        <div className="search-container">

          <FaSearch className="search-icon" />

          <input
            type="search"
            placeholder="Search"
            className="search-input"
            value={searchInput}
            onChange={onChangeSearch}
          />

        </div>

        <ul className="nav-menu">

          <li className="nav-item">

            <Link
              to="/"
              className="nav-link"
            >

              <FaHome className="nav-icon" />

            </Link>

          </li>

          <li className="nav-item">

            <Link
              to="/profile"
              className="nav-link"
            >

              <FaUser className="nav-icon" />

            </Link>

          </li>

          <li className="nav-item">

            <button
              type="button"
              className="logout-button"
              onClick={onClickLogout}
            >
              Logout
            </button>

          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Header