import { useContext, useEffect } from 'react';
import { LoginContext } from '../../context/loginContext';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/backButton';
import VideoPlayer from '../../components/videoPlayer';

export const History = () => {
  const { isLogged } = useContext(LoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogged) {
      navigate('/wedding-page');
    }
  }, []);
  return (
    <div className="mt-6 history">
      <BackButton
        onClick={() => {
          navigate("/wedding-page/intro");
        }}
      />
      <div className={'flex justify-center'}>
        <h3>Nuestra Historia</h3>
      </div>
      <VideoPlayer/>
    </div>
  );
};
