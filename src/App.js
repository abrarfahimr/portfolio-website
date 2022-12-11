import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useState } from 'react';
import WorkPage from './pages/WorkPage/WorkPage';

function App() {

  //Set up states
  const [sidebar, setSideBar] = useState(false);

  //Open and close side bar
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
          <Route path='/work/:id' element={<WorkPage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
