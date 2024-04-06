import './App.css';
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SellCarPage from './pages/SellCarPage';
import UpdateCarPage from './pages/UpdateCarPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sellCar" element={<SellCarPage />} />
      <Route path="/updateCar/:id" element={<UpdateCarPage />} />
    </Routes>
  );
}

export default App;
