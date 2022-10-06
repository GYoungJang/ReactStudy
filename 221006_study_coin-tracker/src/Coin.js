import { useState, useEffect } from 'react';

export default function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState('');
  const [selected, setSelected] = useState('');
  const [inverted, setInverted] = useState(false);
  console.log(selected);
  const [name, price] = selected.split(': $');
  console.log(name);
  console.log(price);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = (e) => setMoney(e.target.value);
  const select = (e) => {
    return setSelected(e.target.value);
  };
  const reset = () => setMoney(0);
  const onInverted = () => setInverted((inverted) => !inverted);
  console.log();
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={select} value={selected}>
            <option>코인을 선택해 주세요</option>
            {coins.map((coin) => (
              <option key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
          <input
            onChange={onChange}
            placeholder="원화"
            type="number"
            value={inverted ? money * 1400 * parseInt(price) : money}
            disabled={inverted}
          />
          <span>Won</span>
          <span>⟺</span>
          <input
            onChange={onChange}
            placeholder="코인"
            type="number"
            value={
              inverted ? money : (money / 1400 / parseInt(price)).toFixed(10)
            }
            disabled={!inverted}
          />
          <span>{selected.split(':', 1)}</span>
          <button onClick={onInverted}>
            {inverted ? '원화 -> 환전' : '코인 -> 환전'}
          </button>
          <button onClick={reset}>RESET </button>
          <h6>환율 1400원 기준</h6>
        </div>
      )}
    </div>
  );
}
