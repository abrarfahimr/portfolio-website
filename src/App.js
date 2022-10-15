import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [sidebar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header toggleSideBar={toggleSideBar} sidebar={sidebar} />
        <NavBar toggleSideBar={toggleSideBar} sidebar={sidebar} />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
