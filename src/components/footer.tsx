import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="footer">
      <div className="copy">© 2099 Creado por Jazmin y Samy - Powered by <a href="https://www.facebook.com/onerami/" target="_blank">Onerami</a></div>
      <div>
        <div className="cursor-pointer" onClick={()=>navigate("/wedding-page/history")}>
          <p>Historia</p>
        </div>
        <div className="cursor-pointer" onClick={()=>navigate("/wedding-page/details")}>
          <p>Detalles</p>
        </div>
      </div>
    </div>
  );
};
