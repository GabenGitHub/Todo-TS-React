import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setValue('');
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} required/>
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
}

export default App;
