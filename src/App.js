/* eslint-disable */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import Navbar from './components/NavBar';

function App() {
    return (
      <div className="container">
      <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='calculator' element={<CalculatorPage />} />
          <Route exact path='quotes' element={<QuotePage />} />
        </Routes>
      </div>
    );
  }


export default App;
