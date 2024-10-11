import React from 'react';
import { Button } from '../../../components';
import { useNavigate } from 'react-router-dom';

export const Section3: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="intro-section3">
      <div className='flex justify-center'>
        <h1>¡Esperamos verte!</h1>
      </div>
      <div className="flex justify-center mt-2">
        <div>
        <Button buttonProps={{onClick:()=>navigate("/details")}}>Detalles</Button>
        </div>
      </div>
    </div>
  );
};
