import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./component/InputTodo";
import { IncompleteTodos } from "./component/IncompleteTodos";
import { CompleteTodos } from "./component/CompleteTodos";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    let flag = false;
    incompleteTodos.forEach((text) => {
      if (text === todoText) {
        flag = true;
      }
    });
    completeTodos.forEach((text) => {
      if (text === todoText) {
        flag = true;
      }
    });
    if (flag) {
      alert("文字が重複しています");
    } else {
      const newTodos = [...incompleteTodos, todoText];
      setIncompleteTodos(newTodos);
    }
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickCompleteDelete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };

  const onClickAllDelete = () => {
    const text = prompt("何か入力してください");
    if (text === "0") {
      setIncompleteTodos([]);
      setCompleteTodos([]);
    } else if (text === "1") {
      setIncompleteTodos([]);
    } else if (text === "2") {
      setCompleteTodos([]);
    } else {
      alert("正常な処理がされませんでした");
    }
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        onClickAllDelete={onClickAllDelete}
      />

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
        onClickCompleteDelete={onClickCompleteDelete}
      />
    </>
  );
};
