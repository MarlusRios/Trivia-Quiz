import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import GameBoolean from './pages/GameBoolean';
import GameMultiple from './pages/GameMultiple';
import FinishPage from './pages/FinishPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/quiz/multiple" element={<GameMultiple />} />
      <Route path="/quiz/boolean" element={<GameBoolean />} />
      <Route path="/quiz/finish" element={<FinishPage />}></Route>
    </Routes>
  );
}

export default App;
