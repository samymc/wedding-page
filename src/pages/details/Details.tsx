import { useContext, useEffect } from 'react';
import { Section1 } from './views/section1';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext';
import { BackButton } from '../../components/backButton';

export const Details = () => {
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, []);
  return (
    <div className="details mt-6">
      <BackButton onClick={()=>{navigate("/wedding-page/intro")}}/>
      <Section1 />
    </div>
  );
};
