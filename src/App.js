import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
