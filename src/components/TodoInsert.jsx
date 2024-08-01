import React, { useCallback, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../scss/TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
      console.log(value);
    },
    [value],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); // submit하면 새로 고침하는데 그거 방지
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" action="" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
        type="text"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInsert;
