import React, { useState } from 'react';

export default function MinutesToHours() {
  const [amount, setAmount] = useState();
  const [inverted, setInverted] = useState(false);
  const onChange = (e) => setAmount(e.target.value);
  const reset = () => setAmount(0);
  const onInvert = () => {
    reset();
    setInverted((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="minutes">
          Minutes :
          <input
            id="minutes"
            placeholder="Minutes"
            type="number"
            value={inverted ? amount * 60 : amount}
            onChange={onChange}
            disabled={inverted}
          />
        </label>
      </div>
      <div>
        <label htmlFor="hours">
          Hours :
          <input
            id="hours"
            placeholder="Hours"
            type="number"
            value={inverted ? amount : Math.round(amount / 60)}
            onChange={onChange}
            disabled={!inverted}
          />
        </label>
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onInvert}>{inverted ? 'Turn Back' : 'Invert'}</button>
    </div>
  );
}
