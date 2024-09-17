import { MainMenu, Footer } from './components';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Intro, Wedding, History } from './pages';

const Layout = () => {
  const location = useLocation();
  const isWrapper =
    location.pathname === '/intro' ||
    location.pathname === '/history' ||
    location.pathname === '/details';
  return (
    <>
      {isWrapper && <MainMenu />}
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/history" element={<History />} />
        <Route path="/details" element={<Wedding />} />
        <Route path="*" element={<h1>Recurso No encontrado</h1>} />
      </Routes>
      {isWrapper && <Footer />}
    </>
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
