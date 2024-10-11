import { Button } from '../../../components';
import image1 from '../../../assets/img/img2.jpeg';
import { useNavigate } from 'react-router-dom';

export const Section1: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="intro-section1 mb-4">
      <div>
        <h3>Nos vamos a casar</h3>
        <h1>Jazmin & Samy</h1>
        <div className="info merriweather-regular mb-2">
          <p>Sábado, 23 de nov 2024</p>
          <p>{'Parroquia Santa Beatriz'}</p>
        </div>
        <div className="flex mt-4">
          <Button buttonProps={{onClick:()=>navigate("/details")}}>Detalles</Button>
        </div>
      </div>
      <div className='image-box'>
        <img src={image1} alt="Image1" />
      </div>
    </div>
  );
};
