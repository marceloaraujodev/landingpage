// import axios from 'axios';
// import InstaCode from './InstaCode';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import Map from './components/Map';
import OurProducts from './components/OurProducts';
// import reviewsData from '../reviews';
import Reviews from './components/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [instaCurrentIndex, setInstaCurrentIndex] = useState(0);
  const containerWidth = 270;


  function handleWhatsClick() {
    console.log('click');
    const phone = 554791131999;

    const message = '';

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl);
  }


  function instaLefClick() {
    const newIndex = instaCurrentIndex - 1;
    setInstaCurrentIndex(newIndex < 0 ? 5 : newIndex);
  }

  function instaRigtClick() {
    const newIndex = instaCurrentIndex + 1;
    setInstaCurrentIndex(newIndex >= 6 ? 0 : newIndex);
  }

  return (
    <>
      <div className="whats" onClick={handleWhatsClick}>
        <i className="bi bi-whatsapp"></i>
      </div>

      <button className="floatingBtn" onClick={handleWhatsClick}>
        Entre em contato
      </button>

      <div className="container-my">
        <header className="header">
          <img src="/logo.jpg" className="logo" />
          {/* <ul>
            <li>Colchões</li>
            <li>Travesseiros</li>
            <li>Acessórios</li>
            <li>Bases de Cama</li>
          </ul> */}
          <div className="small-menu">
            <i className="bi bi-list small-menu"></i>
          </div>
        </header>

        <section className="hero">
          <div className="global-padding">
            <div className="container-m">
              <div className="large-padding-section">
                <div className="left-content-text">
                  <h1>Os melhores Colchões!</h1>
                  <p className="text-xl">Descubra como dormir melhor hoje!</p>
                </div>
                <div className="hero-btn-container">
                  <button className="hero-btn" onClick={handleWhatsClick}>
                    Fale com um atendente
                    <span className="click-icon">
                      <img className="click-icon" src="/click-icon-white.png" />
                    </span>
                  </button>
                </div>
                <div className="text-discount">
                  ATÉ 48% <span>OFF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section-right">
          <div className="products">
            <div className="product-grid">
              <div className="grid-item">
                <div className="product-info-container">
                  <div className="product-description-container-right">
                  <div className='block-left-info'>
                    <div className="product-title">
                      Excelência Em Tecnologia e Qualidade
                    </div>
                    <div className="product-description-right">
                      Trabalhamos com marcas que investem constantemente em
                      estudos e inovações internacionais que são tendências em
                      conforto, saúde, bem-estar e durabilidade.
                    </div>
                    </div>
                  </div>
                  <div className="product-img">
                    <img className="grid-product-img" src="/store-2.jpg" />
                  </div>
                </div>
              </div>
              <div className="payment-methods">
                <div className="payment-methods-inner-container">
                  <i className="bi bi-check2-circle check"></i>
                  <span className="payment-methods-span">
                    12 vezes sem juros no cartão
                  </span>
                </div>
                <div className="payment-methods-inner-container">
                  <i className="bi bi-check2-circle check"></i>
                  <span className="payment-methods-span">
                    Pague com 2 cartões
                  </span>
                </div>
                <div className="payment-methods-inner-container">
                  <img
                    src="/icon-truck.png"
                    className="truck-icon"
                    alt="frete"
                  />
                  <span className="payment-methods-span">
                    Frete grátis para Brusque e Região
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="products-section-left">
          <div className="products-section">
            <div className="products">
              <div className="product-grid">
                <div className="grid-item">
                  <div className="product-info-container">
                    <div className="product-img">
                      <img className="grid-product-img" src="/store-1.jpg" />
                    </div>
                    <div className="product-description-container-left">
                      <div className="product-title">CONCEPT COLCHÕES</div>
                      <div className="product-description-left">
                        Com filial em Brusque desde 2022, o grupo Castor Concept
                        atua há mais de 36 anos no mercado. Atendendo com
                        satisfação todos os cliente sendo referência de
                        qualidade, proporcionando qualidade de vida, conforto e
                        bem estar
                      </div>
                      {/* <div className="btn-info">
                        <button className="ver-oferta">VER OFERTA</button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="insta">
          <div className="insta-title"> Confere nosso instagram!</div>
          <i className="bi bi-instagram social-media-icon"></i>
          {/* <div className="insta-option">
                    <div className="insta-card">
                      <InstaCode url="https://www.instagram.com/p/C38A66Ju4__/?utm_source=ig_embed&amp;utm_campaign=loading" />
                    </div>
                    <div className="insta-card">
                      <InstaCode url="https://www.instagram.com/p/CyOOhwTuJff/?utm_source=ig_embed&amp;utm_campaign=loading" />
                    </div>
                    <div className="insta-card">
                      <InstaCode url="https://www.instagram.com/p/Com0dehuRzJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" />
                    </div>
                  </div> */}
          <div className="insta-relative">
            <div className="insta-card-container">
              <div className="insta-carouselWrapper ">
                <div className="insta-visibility">
                  <div
                    className="insta-carouselContainer transition"
                    style={{
                      transform: `translateX(-${
                        instaCurrentIndex * containerWidth
                      }px)`,
                    }}
                  >
                    <a href="https://www.instagram.com/castorconceptcolchoes/">
                      <div className="insta-card-fixed-container">
                        <img
                          src="/insta1.jpg"
                          alt="insta"
                          className="insta-card-fixed"
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/castorconceptcolchoes/">
                      <div className="insta-card-fixed-container">
                        <img
                          src="/insta2.jpg"
                          alt="insta"
                          className="insta-card-fixed"
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/castorconceptcolchoes/">
                      <div className="insta-card-fixed-container">
                        <img
                          src="/insta3.jpg"
                          alt="insta"
                          className="insta-card-fixed"
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/castorconceptcolchoes/">
                      <div className="insta-card-fixed-container">
                        <img
                          src="/insta4.jpg"
                          alt="insta"
                          className="insta-card-fixed"
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/castorconceptcolchoes/">
                      <div className="insta-card-fixed-container">
                        <img
                          src="/insta5.jpg"
                          alt="insta"
                          className="insta-card-fixed"
                        />
                      </div>
                    </a>
                    <a href="https://www.instagram.com/castorconceptcolchoes/">
                      <div className="insta-card-fixed-container">
                        <img
                          src="/insta6.jpg"
                          alt="insta"
                          className="insta-card-fixed"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <button className="carousel-btn insta-next-btn">
                <i className="bi bi-chevron-left" onClick={instaLefClick}></i>
              </button>
              <button
                className="carousel-btn insta-prev-btn"
                onClick={instaRigtClick}
              >
                <i className="bi bi-chevron-right "></i>
              </button>
            </div>
          </div>
        </section>

        <Reviews />
        <OurProducts onClick={handleWhatsClick}/>
        <Map />

        <footer className="footer">
          <div className="footer-content-container">
            <div className="footer-block-top">
              <div className="footer-content">
                <div className="footer-title">Localização</div>
                <div className="footer-content-inner">
                  <div className="icon-container-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="footer-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div className="address">
                    n° 236 - Rua: Hercilio Luz, sala 001, Brusque - SC,
                    88350-300
                  </div>
                </div>
              </div>

              <div className="footer-content">
                <div className="footer-title">Contatos</div>
                <div className="footer-content-inner">
                  <div className="icon-container-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="footer-icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div className="phone">47 991131999 </div>
                </div>
              </div>

              <div className="footer-content">
                <div className="footer-title">Formas de Pagemntos</div>
                <div className="footer-content-inner">
                  <div className="icon-container-inner">
                    <img
                      src="/icon-mastercard.png"
                      alt="master icon"
                      className="payment-icon"
                    />
                    <img
                      src="/icon-visa.png"
                      alt="master icon"
                      className="payment-icon"
                    />
                    <img
                      src="/icon-pix-white.png"
                      alt="master icon"
                      className="payment-icon"
                    />
                    <img
                      src="/icon-boleto.png"
                      alt="master icon"
                      className="payment-icon"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-block-bottom">
              <div className="footer-content-logo">
                <img src="/logo.jpg" className="logo-footer" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

{
  /* <section className="tamanhos">
          <div className="tamanhos-text">
            <h1>Diversos tamanhos disponíveis para o seu conforto</h1>
            <p>Medidas em centímetros</p>
          </div>
          <div className="icon-container">
            <div className="icon-content-container">
              <a href="#" className="icon-cards-sizes">
                <img src="./solteiro.png" className="sizes-icon-img" />
                <p>Solteiro</p>
              </a>

              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Solteiro King</p>
              </a>
              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Casal</p>
              </a>
              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Queen</p>
              </a>
              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>King</p>
              </a>
            </div>
          </div>
        </section> */
}

{
  /* <section className="medium">
          <div className="medium-title">
            O que faz os colchões x serem únicos?
          </div>
          <div className="medium-card-container">
            <div className="medium-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 72 72"
                className="medium-svg"
              >
                <defs></defs>
                <path
                  className="cls-1"
                  d="M70.54,44.42H48.15a1,1,0,0,1,0-1.92H69.58V18.29a.79.79,0,0,0-.51-.75.8.8,0,0,0-.89.21l-2.93,3.17a8.4,8.4,0,0,1-12.58-.27,6.47,6.47,0,0,0-9.58-.33L42,21.42a8.4,8.4,0,0,1-12.26-.24l-.55-.61a6.5,6.5,0,0,0-4.82-2.14h0a6.47,6.47,0,0,0-4.82,2.15l-.35.39A8.41,8.41,0,0,1,13,23.76h0A8.43,8.43,0,0,1,6.76,21L3.82,17.79a.79.79,0,0,0-.89-.2.78.78,0,0,0-.51.75V42.5H23.9a1,1,0,0,1,0,1.92H1.46a1,1,0,0,1-1-1V18.34A2.7,2.7,0,0,1,2.24,15.8a2.69,2.69,0,0,1,3,.7l2.94,3.23A6.51,6.51,0,0,0,13,21.84h0a6.5,6.5,0,0,0,4.8-2.15l.36-.4a8.37,8.37,0,0,1,6.24-2.78h0a8.39,8.39,0,0,1,6.24,2.78l.55.61A6.4,6.4,0,0,0,35.87,22a6.27,6.27,0,0,0,4.77-2L41.71,19a8.41,8.41,0,0,1,12.43.43,6.47,6.47,0,0,0,4.8,2.29,6.54,6.54,0,0,0,4.9-2.08l2.93-3.18a2.73,2.73,0,0,1,4.73,1.85V43.46A1,1,0,0,1,70.54,44.42Z"
                />
                <path
                  className="cls-1"
                  d="M36,56.43a13,13,0,1,1,13-13A13,13,0,0,1,36,56.43Zm0-24A11.06,11.06,0,1,0,47.06,43.46,11.07,11.07,0,0,0,36,32.4Z"
                />
                <path
                  className="cls-1"
                  d="M35.22,48.91a.93.93,0,0,1-.6-.21l-4.28-3.4a1,1,0,1,1,1.19-1.5l3.52,2.8,5.26-6.85a1,1,0,0,1,1.34-.18,1,1,0,0,1,.18,1.35L36,48.54a1,1,0,0,1-.65.36Z"
                />
              </svg>
              <h3>Design Ergonômico</h3>
              <p>Colchões com até 5 camadas</p>
              <button className="btn-medium">Saiba mais</button>
            </div>

            <div className="medium-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 72 72"
                className="medium-svg"
              >
                <defs></defs>
                <path
                  className="cls-1"
                  d="M70.54,44.42H48.15a1,1,0,0,1,0-1.92H69.58V18.29a.79.79,0,0,0-.51-.75.8.8,0,0,0-.89.21l-2.93,3.17a8.4,8.4,0,0,1-12.58-.27,6.47,6.47,0,0,0-9.58-.33L42,21.42a8.4,8.4,0,0,1-12.26-.24l-.55-.61a6.5,6.5,0,0,0-4.82-2.14h0a6.47,6.47,0,0,0-4.82,2.15l-.35.39A8.41,8.41,0,0,1,13,23.76h0A8.43,8.43,0,0,1,6.76,21L3.82,17.79a.79.79,0,0,0-.89-.2.78.78,0,0,0-.51.75V42.5H23.9a1,1,0,0,1,0,1.92H1.46a1,1,0,0,1-1-1V18.34A2.7,2.7,0,0,1,2.24,15.8a2.69,2.69,0,0,1,3,.7l2.94,3.23A6.51,6.51,0,0,0,13,21.84h0a6.5,6.5,0,0,0,4.8-2.15l.36-.4a8.37,8.37,0,0,1,6.24-2.78h0a8.39,8.39,0,0,1,6.24,2.78l.55.61A6.4,6.4,0,0,0,35.87,22a6.27,6.27,0,0,0,4.77-2L41.71,19a8.41,8.41,0,0,1,12.43.43,6.47,6.47,0,0,0,4.8,2.29,6.54,6.54,0,0,0,4.9-2.08l2.93-3.18a2.73,2.73,0,0,1,4.73,1.85V43.46A1,1,0,0,1,70.54,44.42Z"
                />
                <path
                  className="cls-1"
                  d="M36,56.43a13,13,0,1,1,13-13A13,13,0,0,1,36,56.43Zm0-24A11.06,11.06,0,1,0,47.06,43.46,11.07,11.07,0,0,0,36,32.4Z"
                />
                <path
                  className="cls-1"
                  d="M35.22,48.91a.93.93,0,0,1-.6-.21l-4.28-3.4a1,1,0,1,1,1.19-1.5l3.52,2.8,5.26-6.85a1,1,0,0,1,1.34-.18,1,1,0,0,1,.18,1.35L36,48.54a1,1,0,0,1-.65.36Z"
                />
              </svg>
              <h3>Design Ergonômico</h3>
              <p>Colchões com até 5 camadas</p>
              <button className="btn-medium">Saiba mais</button>
            </div>

            <div className="medium-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 72 72"
                className="medium-svg"
              >
                <defs></defs>
                <path
                  className="cls-1"
                  d="M70.54,44.42H48.15a1,1,0,0,1,0-1.92H69.58V18.29a.79.79,0,0,0-.51-.75.8.8,0,0,0-.89.21l-2.93,3.17a8.4,8.4,0,0,1-12.58-.27,6.47,6.47,0,0,0-9.58-.33L42,21.42a8.4,8.4,0,0,1-12.26-.24l-.55-.61a6.5,6.5,0,0,0-4.82-2.14h0a6.47,6.47,0,0,0-4.82,2.15l-.35.39A8.41,8.41,0,0,1,13,23.76h0A8.43,8.43,0,0,1,6.76,21L3.82,17.79a.79.79,0,0,0-.89-.2.78.78,0,0,0-.51.75V42.5H23.9a1,1,0,0,1,0,1.92H1.46a1,1,0,0,1-1-1V18.34A2.7,2.7,0,0,1,2.24,15.8a2.69,2.69,0,0,1,3,.7l2.94,3.23A6.51,6.51,0,0,0,13,21.84h0a6.5,6.5,0,0,0,4.8-2.15l.36-.4a8.37,8.37,0,0,1,6.24-2.78h0a8.39,8.39,0,0,1,6.24,2.78l.55.61A6.4,6.4,0,0,0,35.87,22a6.27,6.27,0,0,0,4.77-2L41.71,19a8.41,8.41,0,0,1,12.43.43,6.47,6.47,0,0,0,4.8,2.29,6.54,6.54,0,0,0,4.9-2.08l2.93-3.18a2.73,2.73,0,0,1,4.73,1.85V43.46A1,1,0,0,1,70.54,44.42Z"
                />
                <path
                  className="cls-1"
                  d="M36,56.43a13,13,0,1,1,13-13A13,13,0,0,1,36,56.43Zm0-24A11.06,11.06,0,1,0,47.06,43.46,11.07,11.07,0,0,0,36,32.4Z"
                />
                <path
                  className="cls-1"
                  d="M35.22,48.91a.93.93,0,0,1-.6-.21l-4.28-3.4a1,1,0,1,1,1.19-1.5l3.52,2.8,5.26-6.85a1,1,0,0,1,1.34-.18,1,1,0,0,1,.18,1.35L36,48.54a1,1,0,0,1-.65.36Z"
                />
              </svg>
              <h3>Design Ergonômico</h3>
              <p>Colchões com até 5 camadas</p>
              <button className="btn-medium">Saiba mais</button>
            </div>
          </div>
        </section> */
}

{
  /* <section className="hero2">
          <div className="hero2-title">
            O que faz os colchões x serem únicos?
          </div>
          <div className="hero2-container">
            <img
              src="https://live.staticflickr.com/65535/53626632129_dda35aa002_w.jpg"
              className="hero2-container-img"
            />
          </div>
        </section> */
}
