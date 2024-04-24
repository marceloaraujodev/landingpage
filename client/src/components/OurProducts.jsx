/* eslint-disable no-unused-vars */
import Modal from "./Modal";
import { useState, useEffect } from "react";

export default function OurProducts() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [photoCurrentIndex, setPhotoCurrentIndex] = useState(0);

  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 600);

  /* changing size of photos in the carousel - 
    1 set how many images you want do display horizontally. 
    2 change the width on the css file and here for the productContainer
    3 product name convetion should follow this /product-1.JPG
    there is 20px of of padding on each side. this is on .product-container in the css file */
  let displayProducts = 3;
  const productContainerWidth = 370; 
  let productCarouselWrapperWidth = displayProducts * productContainerWidth
  console.log(productCarouselWrapperWidth)

  useEffect(() => {
    // const fetchData = async () => {
    //   // "https://landingpage-server-2k7v.onrender.com"
    //   const response = await axios.get('http://localhost:4000');
    //   console.log(response.data.data);
    //   const data = response.data.data;
    //   setReviews((prevReviews) => [...prevReviews, ...data]);
    // };
    // fetchData();
    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [smallScreen]);

  useEffect(() => {
    setSmallScreen(window.innerWidth < 600);
  }, []);

  // Event handler for window resize
  const handleResize = () => {
    setSmallScreen(window.innerWidth < 600);
  };

  function openModal(imgSrc) {
    setModalOpen(true);
    setSelectedImg(imgSrc)
  }

  function closeModal() {
    setModalOpen(false);
  }

  // photoCurrentIndex * productContainerWidth
  let products = 10;
  let productElements = [];
  


  for(let i= 1; i < products; i++){
    const filename = `/product-${i}.JPG` 

    productElements.push(
      <div className="product-gallery-wrapper" key={i}>
      <div
        className="review-container transition"
        style={{
          transform: `translateX(-${
            photoCurrentIndex * productContainerWidth
          }px)`,
        }}
      >
        <div className="product-gallery-container" onClick={() => openModal(filename)}>
              <img
                src={filename} 
                className="product-gallery-photo-carousel"
              />
        </div>
      </div>
    </div>
    )
  }

  function handleLefClick() {
    if (smallScreen) {
      const newIndex = photoCurrentIndex - 1;
      setPhotoCurrentIndex(newIndex < 0 ? productElements.length - 1 : newIndex);
    } else {
      const newIndex = photoCurrentIndex - 1;
      setPhotoCurrentIndex(newIndex < 0 ? productElements.length - 3 : newIndex);
    }
  }

  function handleRigtClick() {
    if (smallScreen) {
      const newIndex = photoCurrentIndex + 1;
      setPhotoCurrentIndex(newIndex >= productElements.length ? 0 : newIndex);
    } else {
      const newIndex = photoCurrentIndex + 1;
      setPhotoCurrentIndex(newIndex >= productElements.length - 2 ? 0 : newIndex);
    }
  }


  return (
    <>
    <section className="product-gallery">
    <h1 className="product-gallery-title">Nossos Produtos</h1>
    <div className="product-gallery-carousel-wrapper" style={{ width: productCarouselWrapperWidth }}>
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
{modalOpen && <Modal isOpen={modalOpen} >
<img src={selectedImg} alt='selected img' />
<button className='btnModal' onClick={closeModal}>X</button>
</Modal>}
</>
  )
}
