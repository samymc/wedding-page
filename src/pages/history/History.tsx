import { useContext, useEffect } from 'react';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router-dom';

export const History = () => {
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, []);
  return <></>;
};
