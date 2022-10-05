import React, { useState } from 'react';
import MinutesToHours from './MinutesToHours';
import KmToMiles from './KmToMiles';

export default function Converter() {
  const [index, setIndex] = useState('xx');
  const onSelect = (e) => {
    setIndex(e.target.value);
  };

  return (
    <div>
      <h1>SuperConverter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select Your Units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === 'xx' ? 'Please Select Your Units' : null}
      {index === '0' ? <MinutesToHours /> : null}
      {index === '1' ? <KmToMiles /> : null}
    </div>
  );
}
