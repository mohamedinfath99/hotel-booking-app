import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import SearchList from './pages/SearchList/SearchList'
import Hotel from './pages/hotel/Hotel'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<SearchList/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
