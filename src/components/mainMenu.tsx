import { useNavigate } from 'react-router-dom';
import '../App.css';
import useSound from 'use-sound';
import sound from '../assets/sound/sound.mp3';
import { useEffect, useState } from 'react';

export const MainMenu: React.FC = () => {
  const [play, { stop }] = useSound(sound);
  const [isPlayed, setIsPlayed] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPlayed) {
      play();
    } else {
      stop();
    }
  }, [isPlayed]);

  return (
    <div className="menuBar">
      <div
        onClick={() => {
          setIsPlayed(!isPlayed);
        }}
      >
        <div className="icon-play">
          {!isPlayed ? (
            <i className="fa fa-play" />
          ) : (
            <i className="fa fa-stop" />
          )}
        </div>
      </div>
      <div
        onClick={() => {
          navigate('/history');
        }}
      >
        <p>Historia</p>
      </div>
      <div
        onClick={() => {
          navigate('/details');
        }}
      >
        <p>Detalles</p>
      </div>
    </div>
  );
};
