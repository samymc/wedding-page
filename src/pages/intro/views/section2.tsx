import React from 'react';
import image2 from '../../../assets/img/img1.png';

export const Section2: React.FC = () => {
  return (
    <div className="intro-section2">
      <div>
        <h3>Celebrando nuestro amor con quien amamos</h3>
      </div>
      <div className="info">
        <div className="image-box">
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <ul>
            <li>
              <h3>Ceremonia: 4pm</h3>
              <p>
                Parroquia Santa Beatriz (Av. Militar
                1812, Lince 15046)
              </p>
            </li>
            <li>
              <h3>Recepción: 6pm</h3>
              <p>
                Av. Tomas Valle 822, Los Olivos
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
