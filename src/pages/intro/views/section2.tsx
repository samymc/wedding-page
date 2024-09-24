import React from 'react';
import image2 from '../../../assets/img/img2.png'

export const Section2: React.FC = () => {
  return (
    <div className='intro-section2'>
      <div>
        <h3>Celebrando nuestro amor con quien amamos</h3>
      </div>
      <div className='info'>
        <div className='image-box'>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <ul>
            <li>Ceremonia</li>
            <li>Recepción</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
