import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/homepage/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCard from './pages/addcard/AddCard';
import Mypage from './pages/mypage/mypage';
import DetailCard from './pages/detailCard/DetailCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header navigate={navigate} /> */}
      {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-card" element={<AddCard />}/>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/word-card" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;