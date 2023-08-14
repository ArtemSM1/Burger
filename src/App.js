import React from 'react';
import Home from './pages/Home';
import Shop from './styled-components/Shop/PromoShop/Shop';
import Cart from './pages/Cart';
import { Routes, Route } from "react-router-dom";
import Items from './styled-components/Items';



class App extends React.Component {

  render() {
    return (
      <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="shop" element={<Shop/>}/>
            <Route path="Cart" element={<Cart/>}/>
          </Routes>
      </div>
    );
  }
}

export default App;
