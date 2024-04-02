import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <img src="./public/whats_icon.png" className="whats" />
      <div className="container-my">
        <header className="header">
          <p>Logo</p>
          <ul>
            <li>Colchões</li>
            <li>Travesseiros</li>
            <li>Acessórios</li>
            <li>Bases de Cama</li>
          </ul>
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
                  <p className="text-xl">
                    Aproveite as ofertas de Aniversário Luuna!
                  </p>
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
                    <div className="product-title">Title</div>
                    <div className="product-description">
                      O colchão mais ergonômico e suave, combinação de espumas
                      para um descanso reparador. O colchão mais ergonômico e
                      suave, combinação de espumas para um descanso reparador. O
                      colchão mais ergonômico e suave, combinação de espumas
                      para um descanso reparador.
                    </div>
                    <div className="btn-info">
                      <button className="ver-oferta">VER OFERTA</button>
                    </div>
                  </div>
                  <div className="product-img">
                    <img className="grid-product-img" src="https://live.staticflickr.com/65535/53626614704_a06f47cfdc_b.jpg" />
                  </div>
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
                      <img
                        className="grid-product-img"
                        src="https://live.staticflickr.com/65535/53626614704_a06f47cfdc_b.jpg"
                      />
                    </div>
                    <div className="product-description-container-left">
                      <div className="product-title">Title</div>
                      <div className="product-description">
                        O colchão mais ergonômico e suave, combinação de espumas
                        para um descanso reparador. O colchão mais ergonômico e
                        suave, combinação de espumas para um descanso reparador.
                        O colchão mais ergonômico e suave, combinação de espumas
                        para um descanso reparador.
                      </div>
                      <div className="btn-info">
                        <button className="ver-oferta">VER OFERTA</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tamanhos">
          <div className="tamanhos-text">
            <h1>Diversos tamanhos disponíveis para o seu conforto</h1>
            <p>Medidas em centímetros</p>
          </div>
          <div className="icon-container">
            <div className="icon-content-container">
              <a href="#" className="icon-cards-sizes">
                <img src="./solteiro.png" className="sizes-icon-img" />
                <p>Colchão Soldeiro</p>
              </a>

              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Colchão Soldeiro</p>
              </a>
              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Colchão Soldeiro</p>
              </a>
              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Colchão Soldeiro</p>
              </a>
              <a href="#" className="icon-cards-sizes">
                <img src="./casal.png" className="sizes-icon-img" />
                <p>Colchão Soldeiro</p>
              </a>
            </div>
          </div>
        </section>

        <section className="medium">
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
        </section>

        <section className="hero2">
          <div className="hero2-title">
            O que faz os colchões x serem únicos?
          </div>
          <div className="hero2-container">
            <img src="https://live.staticflickr.com/65535/53626632129_dda35aa002_w.jpg" />
          </div>
        </section>

        <section className="review">
          <div className="review-container">
            <div className="review-container-inner">
              <div className="review-contentContainer">
                <div className="review-photo-container">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="review-photo"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="review-name">Maria Smantha</div>
                <div className="review-profession">Web Developer</div>
                <div className="review-descriptionContainer">
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quod eos id officiis
                    hic tenetur quae quaerat ad velit ab hic tenetur.
                  </p>
                </div>

                <ul className="list-unstyled mb-0 review-reatingContainer">
                  <li>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="review-container-inner">
              <div className="review-contentContainer">
                <div className="review-photo-container">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="review-photo"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="review-name">Maria Smantha</div>
                <div className="review-profession">Web Developer</div>
                <div className="review-descriptionContainer">
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quod eos id officiis
                    hic tenetur quae quaerat ad velit ab hic tenetur.
                  </p>
                </div>

                <ul className="list-unstyled mb-0 review-reatingContainer">
                  <li>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="review-container-inner">
              <div className="review-contentContainer">
                <div className="review-photo-container">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                    className="review-photo"
                    width="150"
                    height="150"
                  />
                </div>
                <div className="review-name">Maria Smantha</div>
                <div className="review-profession">Web Developer</div>
                <div className="review-descriptionContainer">
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Quod eos id officiis
                    hic tenetur quae quaerat ad velit ab hic tenetur.
                  </p>
                </div>

                <ul className="list-unstyled mb-0 review-reatingContainer">
                  <li>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                    <i className="bi bi-star-fill review-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content-container">
            <div className="block-left">
              <div className="footer-content">
                <div className="footer-title">Localização</div>
                <div className="footer-content-inner">
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
                  <p>
                    Av. do Estado Dalmo Vieira, 570 Ariribá, Balneário
                    Camboriú-SC
                  </p>
                </div>
              </div>

              <div className="footer-content">
                <div className="footer-title">Contatos</div>
                <div className="footer-content-inner">
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
                  <p>47 xxxxx-xxxx</p>
                </div>
              </div>
            </div>

            <div className="block-right">
              <div className="footer-content-logo">
                <h1>Logo</h1>
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
  /* <div className='medium-card-container'>
<div className='medium-card'></div> */
}
