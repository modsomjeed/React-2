import * as React from 'react';
import './style.css';
// import Input from './Input';

export default function App() {
  const [state, setState] = React.useState({ firstName: '', lastName: '' });
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(`${state.firstName} : ${state.lastName}`);
  };

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <React.Fragment>
      <div>test</div>
      <form onSubmit={onSubmit}>
        <input
          name="firstName"
          value={state.firstName}
          onChange={onChange}
          required
        />
        <input
          name="lastName"
          value={state.lastName}
          onChange={onChange}
          required
        />
        checkbox radio select
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}
