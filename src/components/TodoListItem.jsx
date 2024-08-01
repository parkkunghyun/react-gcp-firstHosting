import React from 'react';
import { IoIosCheckbox } from 'react-icons/io';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
//import { IoIosCheckboxOutline } from 'react-icons/io';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

import '../scss/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <IoIosCheckbox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>

      <div className="remove" onClick={() => onRemove(id)}>
        <IoIosRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
