import { Button } from '../../../components';
import image1 from '../../../assets/img/img1.png';

export const Section1: React.FC = () => {
  return (
    <div className="intro-section1 mb-4">
      <div>
        <h3>Nos vamos a casar</h3>
        <h1>Jazmin & Samy</h1>
        <div className="info merriweather-regular mb-2">
          <p>Sábado, 23 de nov 2024</p>
          <p>{'Parroquia santa beatriz (Av. Militar 1812, Lince 15046)'}</p>
        </div>
        <div className="flex">
          <Button>Detalles</Button>
        </div>
      </div>
      <div className='image-box'>
        <img src={image1} alt="Image1" />
      </div>
    </div>
  );
};
