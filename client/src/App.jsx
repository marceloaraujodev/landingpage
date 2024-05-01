
import { useState } from 'react';
import Map from './components/Map';
import OurProducts from './components/OurProducts';
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
                      Excelência em tecnologia e qualidade
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
                <div className="footer-title">Formas de Pagamento</div>
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

