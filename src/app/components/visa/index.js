import React, { useState } from 'react';
import './style.scss';

const VisaMoadl = ({action}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [nameHolder, setNameHolder] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };
  const handleNameHolderChange = (e) => {
    setNameHolder(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action()
  }
  return (
    <div className="payment-form">
      <div className="card">
        <div className="card-header">Payment</div>
        <div className="card-body">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiryDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Name Holder</label>
              <input
                type="text"
                id="expiryDate"
                value={nameHolder}
                onChange={handleNameHolderChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolder">Card Holder</label>
              <input
                type="password"
                id="cardHolder"
                value={cardHolder}
                onChange={handleCardHolderChange}
              />
            </div>
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisaMoadl;