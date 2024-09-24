import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import flower from '../assets/img/img5.png';
import ring from '../assets/img/img3.png';

export const MainLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro');
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <div className="central-circle">
        <img src={ring} alt="ring" />
      </div>
      <div className="loading-wrapper">
        <div className="circle c1">
          <img src={flower} alt="flower" />
        </div>
        <div className="circle c2">
          <img src={flower} alt="flower" />
        </div>
        <div className="circle c3">
          <img src={flower} alt="flower" />
        </div>
        <div className="circle c4">
          <img src={flower} alt="flower" />
        </div>
        <div className="circle c5">
          <img src={flower} alt="flower" />
        </div>
        <div className="circle c6">
          <img src={flower} alt="flower" />
        </div>
      </div>
      <div className='loading'>
        <h1>Cargando ...</h1>
      </div>
    </>
  );
};
