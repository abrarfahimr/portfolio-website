import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useState } from 'react';
import WorkPage from './pages/WorkPage/WorkPage';

function App() {
  const [sidebar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>
        <Header toggleSideBar={toggleSideBar} sidebar={sidebar} />
        <NavBar toggleSideBar={toggleSideBar} sidebar={sidebar} />
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path='/:id' element={<WorkPage/>}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
