import { useState, useEffect } from 'react';

function Hello() {
  // function byeFn() {
  //   console.log('bye :(');
  // }
  // function hiFn() {
  //   console.log('created :)');
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  useEffect(() => {
    console.log('created :)');
    return () => console.log('destroy :(');
  }, []);

  return <h1>Hello</h1>;
}

export default function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => !current);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'HIDE' : 'SHOW'}</button>
    </div>
  );
}
