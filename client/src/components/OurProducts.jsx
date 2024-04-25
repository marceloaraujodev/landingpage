/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Modal from './Modal';
import { useState, useEffect } from 'react';

export default function OurProducts({onClick}) {
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 600);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [photoCurrentIndex, setPhotoCurrentIndex] = useState(0);
  const [displayProducts, setDisplayProducts] = useState(3)
  const [productContainerWidth, setProductContainerWidth] = useState(370);
  // const [carouselWidth, setCarouselWidth] = useState(displayProducts * productContainerWidth);

  /* changing size of photos in the carousel - 
    1 set how many images you want do display horizontally. 
    2 change the width on the css file and here for the productContainer
    3 product name convetion should follow this /product-1.JPG
    there is 20px of of padding on each side. this is on .product-container in the css file 
  */


  // Add event listener to handle window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [smallScreen]);

  /* calculates the width of the .product-gallery-carousel-container dynamically setting
   the container so you dont have to touch the css for the width. adjust here. 
   for widescreens width is 370 then * the products you want to display. in the small screen the default is 270, if you want to adjust

   ⚠️ the extra 4px just look at the individual element width with dev tools and you see 374 
   */
  useEffect(() => {
    setSmallScreen(window.innerWidth < 600);
      if (smallScreen) {
        setProductContainerWidth(270)
        setDisplayProducts(1)
      }
  }, [smallScreen, displayProducts, productContainerWidth]);

  // Event handler for window resize
  const handleResize = () => {
    setSmallScreen(window.innerWidth < 600);
  };

  function openModal(imgSrc) {
    setModalOpen(true);
    setSelectedImg(imgSrc);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const carouselWidth = displayProducts * productContainerWidth;
  let products = 10;
  let productElements = [];

  for (let i = 1; i < products; i++) {
    const filename = `/product-${i}.JPG`;

    productElements.push(
      <div className="product-gallery-wrapper" key={i}>
        <div
          className="product-gallery-container transition"
          style={{
            transform: `translateX(-${
              photoCurrentIndex * productContainerWidth
            }px)`,
          }}
        >
          <div
            className="product-gallery-container">
            <img 
              src={filename} 
              className="product-gallery-photo-carousel" 
              onClick={() => openModal(filename)}  
            />
            <button className='buyNow'> <i className="bi bi-whatsapp"></i><span className='btnTextBuyNow' onClick={onClick}>COMPRAR AGORA</span> </button>
          </div>
        </div>
      </div>
    );
  }

  function handleLefClick() {
    if (smallScreen) {
      const newIndex = photoCurrentIndex - 1;
      setPhotoCurrentIndex(
        newIndex < 0 ? productElements.length - 1 : newIndex
      );
    } else {
      const newIndex = photoCurrentIndex - 1;
      setPhotoCurrentIndex(
        newIndex < 0 ? productElements.length - 3 : newIndex
      );
    }
  }

  function handleRigtClick() {
    if (smallScreen) {
      const newIndex = photoCurrentIndex + 1;
      setPhotoCurrentIndex(newIndex >= productElements.length ? 0 : newIndex);
    } else {
      const newIndex = photoCurrentIndex + 1;
      setPhotoCurrentIndex(
        newIndex >= productElements.length - 2 ? 0 : newIndex
      );
    }
  }

  return (
    <>
      <section className="product-gallery">
        <h1 className="product-gallery-title">Nossos Produtos</h1>
        <div
          className="product-gallery-carousel-wrapper"
          style={{ width: carouselWidth }}
        >
          <div className="product-gallery-carousel-container">
            {productElements}

          </div>
          <button className="carousel-btn next-btn">
            <i className="bi bi-chevron-left" onClick={handleLefClick}></i>
          </button>
          <button className="carousel-btn prev-btn" onClick={handleRigtClick}>
            <i className="bi bi-chevron-right "></i>
          </button>
          
        </div>
      </section>
      {modalOpen && (
        <Modal isOpen={modalOpen}>
          <img src={selectedImg} alt="selected img" />
          <button className="btnModal" onClick={closeModal}>
            X
          </button>
        </Modal>
      )}
    </>
  );
}
