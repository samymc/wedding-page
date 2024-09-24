import { ReactNode } from 'react';

export const Button: React.FC<{ buttonProps?: any; children?: ReactNode }> = ({
  buttonProps,
  children,
}) => {
  return (
    <button className={(buttonProps?.disabled) ? "button-disabled": "button-able"} {...buttonProps}>
      <span>{children}</span>
    </button>
  );
};
