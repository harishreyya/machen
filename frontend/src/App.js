import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  return (
    
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/userlist" element={<UserList/>} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
