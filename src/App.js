import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Missions from './components/missions/missions';
import Dragons from './components/dragons/dragons';
import Rockets from './components/rockets/rockets';
import Profile from './components/profile/profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Dragons" element={<Dragons />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
