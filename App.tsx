import * as React from 'react';
import './style.css';

export default function App() {
  const [input, setInput] = React.useState(0);
  const [resultmod2, setResult2] = React.useState('');
  const [resultmod10, setResult10] = React.useState('');

  React.useEffect(() => {
    if (input % 2 == 0) {
      setResult2('odd');
    } else {
      setResult2('event');
    }
    if (input % 10 == 0) {
      setResult10('true');
    } else {
      setResult10('false');
    }
  });

  return (
    <React.Fragment>
      <div>
        <div>
          input: <b>{input}</b>
        </div>
        <div>
          even or odd: <b>{resultmod2}</b>
        </div>
        <div>
          Divisible by 10 : <b>{resultmod10}</b>
        </div>
        <form>
          <input
            type="number"
            onChange={(event) => {
              setInput(Number(event.target.value));
            }}
            required
          />
          <input type="submit" />
        </form>
      </div>
    </React.Fragment>
  );
}
