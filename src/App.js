import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import IndexPage from './pags/index';
import Crear from './pags/crear';
import Cuento from './pags/cuento';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/crear" element={<Crear/>} />
        <Route path="/cuento" element={<Cuento/>}/>
      </Routes>
    </Router>
  );
}

export default App;