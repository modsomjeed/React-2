import * as React from 'react';
import './style.css';
import Input from './Input';

export default function App() {
  const [input, setInput] = React.useState('');

  const onChange = (v) => {
    setInput(v);
  };

  return (
    <React.Fragment>
      Input: {input}
      <Input onValueChange={onChange} />
    </React.Fragment>
  );
}
