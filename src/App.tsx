import React, { useState } from 'react';
import './App.css';

interface ITodo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [ ...todos, {text: text, complete: false} ];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [ ...todos ];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [ ...todos ];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input-field" value={value} onChange={event => setValue(event.target.value)} required/>
        <button className="button" type="submit"><span>Add todo</span></button>
      </form>
      <section>
        {
          todos.map((todo: ITodo, index: number) => 
            <div className="todo" key={index}>
                  <div className={"todo-text " + (todo.complete ? "completed" : "")}>{todo.text}</div>
                  <button type="button" className="button" onClick={() => completeTodo(index)}>
                    <span>{todo.complete ? "Incomplete" : "Complete"}</span>
                  </button>
                  <button type="button" className="button-remove" onClick={() => removeTodo(index)}>&times;</button>
              <hr/>
            </div>
          )
        }
      </section>
    </div>
  );
}

export default App;
