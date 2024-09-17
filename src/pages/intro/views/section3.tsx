import React from 'react';
import { Button } from '../../../components';

export const Section3: React.FC = () => {
  return (
    <div className="intro-section3">
      <div className='flex justify-center'>
        <h1>¡Esperamos verte!</h1>
      </div>
      <div className="flex justify-center mt-2">
        <div>
          <Button>Detalles</Button>
        </div>
      </div>
    </div>
  );
};
