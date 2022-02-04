import React from 'react';
import {Link} from 'react-router-dom';
import Cartwidget from '../Cartwidget';

const navbar = () => {
  return (
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
      <Link to='/'>
          <img src='./PSX_20220123_175005.jpg' width='70'/>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to='/' >Home</Link>
        </li>
        <li className="nav-item mx-auto">
          <Link className="nav-link" to='/Productos'>Productos</Link>
        </li>
        <li className="nav-item mx-auto">
          <Link className="nav-link" to='/Contacto'>Contacto</Link>
        </li>
        <li>
          <Cartwidget/>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
  )
};

export default navbar;
