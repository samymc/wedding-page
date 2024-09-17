import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="copy">{'copyright'}</div>
      <div>
        <div className="cursor-pointer">
          <p>Historia</p>
        </div>
        <div className="cursor-pointer">
          <p>Nuestra Boda</p>
        </div>
      </div>
    </div>
  );
};
