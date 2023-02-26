import * as React from 'react';
import './style.css';

export default function App() {
  const [input, setInput] = React.useState(0);
  const [mod2, setMod2] = React.useState(false);
  const [mod10, setMod10] = React.useState(false);

  React.useEffect(() => {
    setMod2(input % 2 === 0);
    setMod10(input % 10 === 0);
  }, [input]);

  const onSubmit = (event) => {
    event.preventDefault();
    setInput(event.target.input.value);
  };

  return (
    <React.Fragment>
      <div>
        <div>
          input: <b>{input}</b>
        </div>
        <div>
          even or odd: <b>{input && mod2 ? 'odd' : 'even'}</b>
        </div>
        <div>
          Divisible by 10 : <b>{mod10.toString()}</b>
        </div>
        <form onSubmit={onSubmit}>
          <input type="number" name="input" required />
          <input type="submit" />
        </form>
      </div>
    </React.Fragment>
  );
}
