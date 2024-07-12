import { useState} from 'react'
import './App.css'

function App() {

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vatRate, setVatRate] = useState(0.07); // Example: 7% VAT rate

  const discountedPrice = price - price * discount;

  const vatAmount = discountedPrice * vatRate;

  const grossPrice = discountedPrice + vatAmount;

  const handle = (e) => {
    const value = parseFloat(e.target.value) || 0;
    if (e.target.name === 'price') {
      setPrice(value);
    } else {
      setDiscount(value);
    }
  };

  return (
    <>
      <p style={{ fontSize: '30pt' }}>Price:
        <input type="number" name="price" style={{ fontSize: '30pt' }} onChange={handle} />
      </p>
      <p style={{ fontSize: '30pt' }}>Discount:
        <input type="number" name="discount" style={{ fontSize: '30pt' }} onChange={handle} />
      </p>
      <h1>VAT = {vatAmount.toFixed(2)}</h1>
      <h1>Gross Price = {grossPrice.toFixed(2)}</h1>
    </>
  );
}

export default App
