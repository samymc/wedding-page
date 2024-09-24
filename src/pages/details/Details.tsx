import { useContext, useEffect } from 'react';
import { Section1 } from './views/section1';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext';

export const Details = () => {
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, []);
  return (
    <div className="details">
      <Section1 />
    </div>
  );
};
