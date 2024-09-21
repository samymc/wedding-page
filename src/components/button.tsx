import { ReactNode } from 'react';

export const Button: React.FC<{ type: any, children: ReactNode }> = ({ type, children }) => {
  return (
    <button type={type}>
      <span>{children}</span>
    </button>
  );
};
