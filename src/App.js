import React from 'react';
import M from 'materialize-css';
//import M from './js/materialize.js';

import './scss/style.css';
import './scss/reset.css';
import './scss/materialize.css';

import categories from './js/categories.json';
import products from './js/products.json'

const lupa = '/assets/buscar.png';
const casa = '/assets/mi-venta-de-garage.png';
const fondo = '/assets/hero_background.png';
const flecha = '/assets/arrow.png';
const categUno = '/assets/categories/clothing.png';
const categDos = '/assets/categories/technology.jpg';
const categTres = '/assets/categories/home.jpg';
const categCua = '/assets/categories/books.jpg';
const productUno = '/assets/products/shirt.png';
const productDos = '/assets/products/tv.jpg';
const productTres = '/assets/products/sofa.jpg';
const productCua = '/assets/products/playstation.jpg';
const productCin = '/assets/products/got.jpg';
const red1 = '/assets/redes/instagram.png';
const red2 = '/assets/redes/facebook.png';
const red3 = '/assets/redes/twitter.png';

const formatterPeso = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
})

export class App extends React.Component {

  componentDidMount(){
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  renderImgCateg(catego) {
    if (catego === 1) {
      return categUno
    } else if (catego === 2) {
      return categDos
    } else if (catego === 3) {
      return categTres
    } else if (catego === 4) {
      return categCua
    }
  }

  renderImgProduct(product) {
    if (product === 1) {
      return productUno
    } else if (product === 2) {
      return productDos
    } else if (product === 3) {
      return productTres
    } else if (product === 4) {
      return productCua
    } else if (product === 5) {
      return productCin
    }
  }

  renderTextCategProduc(text) {
    if (text === 1) {
      return 'Ropa'
    } else if (text === 2) {
      return 'Tecnología'
    } else if (text === 3) {
      return 'Hogar'
    } else if (text === 5) {
      return 'Libros'
    }
  }

  renderColorCategProduc(text) {
    if (text === 1) {
      return 'contCategProduct1'
    } else if (text === 2) {
      return 'contCategProduct2'
    } else if (text === 3) {
      return 'contCategProduct3'
    } else if (text === 5) {
      return 'contCategProduct4'
    }
  }

  render() {
    return(
      <div className="containerBody">
        <nav className="containerHeader " role="navigation">
          <div className="nav-wrapper container containerBot">
            <ul className="right hide-on-med-and-down contNav">
              <div className='contBotones'>
                <li><a className="botton" href="">NOSOTROS</a></li>
                <li><a className="botton" href="">PRODUCTOS</a></li>
                <li><a className="botton" href="">CONTACTO</a></li>
              </div>
              <img src={lupa} class="botonBuscar"/>
            </ul>
        
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
                {
                  categories.categories.map((categ, index) => {
                    return(
                      <div className="categoria">
                        <img src={this.renderImgCateg(categ.id)} className="imgCateg"/>
                        <h3 className='tituCateg'>{categ.name}</h3>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="containerProductos">
          <div className="containerTitulo">
            <h1 className="titulo">Productos</h1>
          </div>
          <div className="container">
            <div className="section">
              <div className="row" id="row">
                {
                  products.products.map((product, index) => {
                    return(
                      <div className="producto">
                        <div className='contImgProduct'>
                          <div className={this.renderColorCategProduc(product.category_id)}>
                            <h2 className='tituCategProduct'>{this.renderTextCategProduc(product.category_id)}</h2>
                          </div>
                          <img src={this.renderImgProduct(product.id)} className="imgProduct"/>
                        </div>
                        <div className='contText'>
                          <h2 className='tituProduct'>{product.name}</h2>
                          <h3 className='tituPrice'>{formatterPeso.format(product.price)}</h3>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="containerFooter">
          <div className="contDer">
            <h4 className="text empresa">Owak</h4>
            <h4 className="text derechos">Copyright © 2018</h4>
          </div>
          <div className="contIzq">
            <img src={red1} className="redes"/>
            <img src={red2} className="redes"/>
            <img src={red3} className="redes"/>
          </div>
        </div>
      </div>
    );
  }
}