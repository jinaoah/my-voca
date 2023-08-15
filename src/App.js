import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/homepage/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCard from './pages/addcard/AddCard';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-card" element={<AddCard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;