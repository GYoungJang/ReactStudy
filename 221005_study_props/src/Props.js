import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Props() {
  function Btn({ text, changValue, fontSize = 12 }) {
    return (
      <button
        onClick={changValue}
        style={{
          backgroundColor: 'tomato',
          color: 'white',
          padding: '10px 20px',
          border: 0,
          borderRadius: 10,
          fontSize: fontSize === true ? 18 : fontSize,
        }}
      >
        {text}
      </button>
    );
  }
  const [value, setValue] = useState('Save Change');
  const changeValue = () =>
    setValue(value === 'Save Change' ? 'Revert Change' : 'Save Change');

  Btn.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number || PropTypes.bool,
  };
  return (
    <div>
      <Btn text={value} changValue={changeValue} fontSize={true} />
      <Btn text="Continue" />
    </div>
  );
}
