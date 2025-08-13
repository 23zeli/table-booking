// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Menu from './Component/Menu';
import OrderOnline from './Component/OrderOnline';
import Reservations from './Component/Reservations';
import Login from './Component/Login';
import MenuBar from './Component/MenuBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/login-page"
            element={
              <div>
                <Login />
              </div>
            }
          />
          <Route
            // path="*"
            path="/"
            element={
              <div>
                <MenuBar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/reservations" element={<Reservations />} />
                  <Route path="/specials" element={<OrderOnline />} />
                </Routes>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
