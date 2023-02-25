import * as React from 'react';

const Input = (props): JSX.Element => {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          props.onValueChange(<Input />);
        }}
      />
    </div>
  );
};

export default Input;
