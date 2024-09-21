import { useState } from 'react';
import { Login } from '../../components';

export const Home = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <div className="home justify-center flex">
      {!isLogged ? <Login /> : <></>}
    </div>
  );
};
