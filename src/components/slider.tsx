import { useState } from 'react';
import image1 from "../assets/img/1.jpg"
import image2 from "../assets/img/2.jpg"

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    image1,
    image2
  ];
  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="slider-container">
      <img src={images[currentImage]} alt={`Imagen ${currentImage + 1}`} className="slider-image" />
      <div className="slider-controls">
        {images.map((_, index) => (
          <div
            key={index}
            className={`slider-dot ${currentImage === index ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
