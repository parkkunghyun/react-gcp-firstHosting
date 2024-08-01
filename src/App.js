import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// function todoReducer(todos, action) {
//   switch (action.type) {
//     case 'INSERT':
//       return todos.concat(action.todo);
//     case 'REMOVE':
//       return todos.filter((todo) => todo.id !== action.id);
//     case 'TOGGLE':
//       return todos.map((todo) =>
//         todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
//       );
//     default:
//       return todos;
//   }
// }

function App() {
  //const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2500); // 값이 변경되어도 리렌더링 되지않음
  //

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    //dispatch({ type: 'INSERT', todo });
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    //dispatch({ type: 'REMOVE', id });
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    //dispatch({ type: 'TOGGLE', id });
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
