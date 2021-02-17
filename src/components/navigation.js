import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" href="/">
        Site Name
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemoBlock"
        aria-controls="navbarTogglerDemoBlock"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemoBlock">
        <ul className="navbar-nav ml-auto mt-2 mt-md-0 mr-md-4">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reactstrap">
              Reactstrap
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
