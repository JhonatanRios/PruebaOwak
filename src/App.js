import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import logo from './logo.svg';
import './scss/reset.css';
import './scss/materialize.css';
import './scss/style.css';

//import './js/materialize.js';
//import './js/init.js';
const lupa = '/assets/buscar.png';
const casa = '/assets/mi-venta-de-garage.png';
const fondo = '/assets/hero_background.png';
const flecha = '/assets/arrow.png';

export class App extends React.Component {
  render() {
    return(
      <div className="containerBody">
        <nav className="containerHeader " role="navigation">
          <div className="nav-wrapper container containerBot">
            <ul className="right hide-on-med-and-down">
              <li><a className="botton" href="">NOSOTROS</a></li>
              <li><a className="botton" href="">PRODUCTOS</a></li>
              <li><a className="botton" href="">CONTACTO</a></li>
            </ul>
            <img src={lupa} class="botonBuscar"/>
        
            <ul id="nav-mobile" className="sidenav">
              <li><a className="bottonNav" href="">NOSOTROS</a></li>
              <li><a className="bottonNav" href="">PRODUCTOS</a></li>
              <li><a className="bottonNav" href="">CONTACTO</a></li>
              <i className="botonBuscar material-icons">search</i>
            </ul>
            <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
        </nav>

        <div className="containerCabezera">
          <div className="containerInfoCab">
            <div className="ladoDer">
              <h1 className="titulo">Mi Venta de Garage</h1>
              <p className="parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, rem, enim sequi ratione iusto fugit sint mollitia quo laboriosam maiores itaque nisi eos nulla perspiciatis!</p>
              <div className="containerBotConoce">
                <div className="botConoce">
                  <p className="textBot">
                    Conoce Más
                  </p>
                  <img src={flecha} className="arrow"/>
                </div>
              </div>
            </div>
            <div className="ladoIzq">
                <img src={casa} className="imgCasa"/>
            </div>
          </div>
          <img src={fondo} className="imgFondo"/>
        </div>
        
        <div className="containerCategorias">
          <div className="containerTitulo">
              <h1 className="titulo">Categorías</h1>
          </div>
          <div className="container">
            <div className="section">
              <div className="row" id="row">
                <div className="col s12 m4 categoria">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="containerProductos">
        </div>
      </div>
    );
  }
}