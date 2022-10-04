import React, { useState } from 'react';

export default function MinutesToHours() {
  const [amount, setAmount] = useState('');
  const [inverted, setInverted] = useState(false);

  const onChange = (e) => {
    setAmount(e.target.value);
  };

  const reset = () => {
    setAmount('');
  };

  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes : </label>
        <input
          id="minutes"
          type="number"
          placeholder="minutes"
          onChange={onChange}
          value={inverted ? amount * 60 : amount}
          disabled={inverted}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours : </label>
        <input
          id="hours"
          type="number"
          placeholder="hours"
          onChange={onChange}
          value={inverted ? amount : (amount / 60).toFixed(1)}
          disabled={!inverted}
        />
      </div>
      <button onClick={reset}>reset</button>
      <button onClick={onInvert}>{inverted ? 'Turn Back' : 'Invert'}</button>
    </div>
  );
}
