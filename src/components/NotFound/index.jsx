import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-container">

      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="not found"
        className="not-found-image"
      />

      <h1 className="not-found-heading">
        Page Not Found
      </h1>

      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>

      <Link to="/">
        <button
          type="button"
          className="home-button"
        >
          Home Page
        </button>
      </Link>

    </div>
  )
}

export default NotFound