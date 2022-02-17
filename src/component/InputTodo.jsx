import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, onClickAllDelete } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
      <button onClick={onClickAllDelete}>一括削除</button>
    </div>
  );
};
