import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotals = () => {
      const discountedPrice = price - discount;
      const v = discountedPrice * 0.07;
      setVat(v.toFixed(2));
      const total = discountedPrice + v;
      setTotal(total.toFixed(2));
    };
    calculateTotals();
  }, [price, discount]);

  function handle(e) {
    let value = parseFloat(e.target.value) || 0;
    if (e.target.name === "price") {
      setPrice(value);
    } else {
      setDiscount(value);
    }
  }

  return (
    <>
      <p style={{fontSize: '30pt'}}>Price:
        <input type="number" name="price" style={{fontSize: '30pt'}} onChange={handle} />
      </p>
      <p style={{fontSize: '30pt'}}>Discount:
        <input type="number" name="discount" style={{fontSize: '30pt'}} onChange={handle} />
      </p>
      <h1>VAT = {vat}</h1>
      <h1>Gross Price = {total}</h1>
    </>
  );
}

export default App
