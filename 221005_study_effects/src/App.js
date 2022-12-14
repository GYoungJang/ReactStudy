import { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('i run only once');
  }, []);
  useEffect(() => {
    console.log('i run when "keyword" changes');
  }, [keyword]);
  useEffect(() => {
    console.log('i run when "counter" changes');
  }, [counter]);
  useEffect(() => {
    console.log('i run when "keyword & counter" changes');
  }, [keyword, counter]);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR', keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here!"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}
