import * as React from 'react';
import './style.css';
// import Input from './Input';

export default function App() {
  const [value, setValue] = React.useState('');
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('value: ', value);
    setCount(value.length);
  });
  return (
    <div>
      <div>Value: {value}</div>
      <div>Count: {count}</div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}
