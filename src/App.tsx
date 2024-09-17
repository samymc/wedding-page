import { MainMenu } from './components/mainMenu';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Intro } from './pages/intro/Intro';

function App() {
  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/nuestra-boda" element={<div />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
