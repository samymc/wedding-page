import { useContext} from 'react';
import { Login, MainLoading } from '../../components';
import { LoginContext } from '../../context/loginContext';

export const Home = () => {
  const {isLogged, setIsLogged} = useContext(LoginContext)
  return (
    <div className="home justify-center flex">
      {!isLogged ? <Login /> : <MainLoading/>}
    </div>
  );
};
