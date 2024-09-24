import { useContext, useEffect } from 'react';
import { Section1, Section2, Section3 } from './views';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router-dom';

export const Intro = () => {
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, []);
  return (
    <div className='intro'>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};
