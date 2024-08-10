import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/Home">SafeZone</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Emergency">Emergency</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/LearnProtect">Learn&Protect</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Community">Community</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Login">Login</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
