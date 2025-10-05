import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NaturalPage from './pages/NaturalPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/naturals' element={<NaturalPage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
