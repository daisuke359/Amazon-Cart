import './App.css';
import Header from './components/Header';
import CartItems from './components/CartItems';
import CartTotal from './components/CartTotal';
import React, {useState} from 'react';
import data from './Data';

function App() {

  const [cartItems, setcartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="App-main">
        <CartItems items={cartItems} />
        <CartTotal items={cartItems} />
      </div>
    </div>
  );
}

export default App;
