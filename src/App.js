import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCard from './pages/addcard/AddCard';
import Mypage from './pages/mypage/mypage';
import DetailCard from './pages/detailCard/DetailCard';
import Login from './pages/login/login';
import Join from './pages/join/join';
import Sentence from './pages/sentence-page/sentence';
import DetailSen from './pages/sentence-page/DetailSen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sentence" element={<Sentence />}/>
          <Route path='/sen-card' element={<DetailSen />}/>
          <Route path="/add-card" element={<AddCard />}/>
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/word-card" element={<DetailCard />} />
          <Route path="/login" element={<Login />} />
          <Route path='/join' element={<Join />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;