import { useContext, useEffect } from 'react';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/backButton';

export const History = () => {
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
  }, []);
  return (
    <div className="mt-6">
      <BackButton
        onClick={() => {
          navigate("/intro");
        }}
      />
    </div>
  );
};
