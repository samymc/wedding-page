import { MainMenu, Footer } from './components';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Intro, Details, History } from './pages';
import { Home } from './pages/home';
import { LoginProvider } from './context/loginContext';

const Layout = () => {
  const location = useLocation();
  const isWrapper =
    location.pathname === '/intro' ||
    location.pathname === '/history' ||
    location.pathname === '/details';
  return (
    <LoginProvider>
      <div className="layout">
        {isWrapper && <MainMenu />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/history" element={<History />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<h1>Recurso No Encontrado</h1>} />
        </Routes>
        {isWrapper && <Footer />}
      </div>
    </LoginProvider>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
