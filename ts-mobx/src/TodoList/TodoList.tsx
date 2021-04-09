import { useObserver } from 'mobx-react-lite';
import React, { useState } from 'react';
import { TodoStoreImple } from './TodoStore';

interface TodoListProps {
  todoStore: TodoStoreImple;
}

// FC = functional Components
const TodoList: React.FC<TodoListProps> = ({ todoStore }) => {
  const [value, setValue] = useState<string>('');
  const status = todoStore.status;

  return useObserver(() => (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
      />
      <button
        onClick={() => {
          todoStore.addTodo(value);
          setValue('');
        }}
      >
        submit
      </button>
      <p>completed: {status.completed}</p>
      <p>remaining: {status.remaining}</p>
      <ul>
        {todoStore.todos.map((todo) => (
          <li
            onClick={() => {
              todoStore.toggleTodo(todo.id);
            }}
          >
            [{todo.completed ? 'x' : ' '}]{todo.title}
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default TodoList;
