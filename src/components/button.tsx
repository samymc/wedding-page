import { ReactNode } from 'react';

export const Button: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={'button'}>
      <span>{children}</span>
    </div>
  );
};
