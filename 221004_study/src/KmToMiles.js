import React, { useState } from 'react';

export default function KmToMiles() {
  const [amount, setAmount] = useState('');
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => setAmount(e.target.value);
  const reset = () => setAmount('');
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="km">Km : </label>
        <input
          id="km"
          type="number"
          placeholder="Km"
          onChange={onChange}
          disabled={inverted}
          value={inverted ? (amount * 1.609).toFixed(1) : amount}
        />
      </div>
      <div>
        <label htmlFor="miles">Miles : </label>
        <input
          id="miles"
          type="number"
          placeholder="Miles"
          onChange={onChange}
          disabled={!inverted}
          value={inverted ? amount : (amount / 1.609).toFixed(1)}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onInvert}>{inverted ? 'Turn Back' : 'Invert'}</button>
    </div>
  );
}
