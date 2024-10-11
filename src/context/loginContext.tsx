import { useState, createContext } from 'react';

// Crear el contexto
const LoginContext = createContext({
  isLogged: false,
  setIsLogged: (k:any)=>k
});

const LoginProvider: React.FC<any> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
