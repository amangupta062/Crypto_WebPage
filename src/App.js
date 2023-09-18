import React, { useState } from "react";
import {} from "bootstrap-4-react";

const cryptoData = [
  { id: 1, name: "BTC", symbol: "BTC", price: 25000 },
  { id: 2, name: "DOGE", symbol: "DG", price: 0.75 },
  { id: 3, name: "RIPPLE", symbol: "XRP", price: 1.5 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (crypto) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === crypto.id
    );

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...crypto, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <div className="row justify-content-center">
        {cryptoData.map((crypto, index) => (
          <div className="col-3 text-center m-1" key={crypto.id}>
            <div className="bg-warning h-100 pt-5">
              <h6 className="mb-0">{crypto.name}</h6>
              <h6 className="pt-0">${crypto.price}</h6>
            </div>
            <div>
              <h6 className="bg-dark text-white">
                Qty
              </h6>
              <button
                className="btn btn-info btn-sm"
                onClick={() => addToCart(crypto)}
              >
                Add +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center p-5 mt-5">
        <h4>MY CART</h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">COIN</th>
              <th scope="col">QTY.</th>
              <th scope="col">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((crypto) => (
              <tr key={crypto.id}>
                <td>{crypto.name}</td>
                <td>{crypto.quantity/100}</td>
                <td>${crypto.price/100}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-right" colSpan="3">
                Total: ${calculateTotal()/100}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;