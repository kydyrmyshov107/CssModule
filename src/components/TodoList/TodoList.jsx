import React, { useState } from "react";
import { Button } from "react-bootstrap";
import s from "./TodoList.module.css";
const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  const [valueGenre, setValueGenre] = useState("");

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
        item.nameG = valueGenre;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }
  return (
    <div className={s.cards}>
      {/* {todo.map((item) => (
        <div key={item.id} className={s.list}>
          {edit == item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={s.title}>
              <h2>{item.title}</h2>
              <p>{item.nameG}</p>
            </div>
          )}
          {edit == item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)}>save</Button>
            </div>
          ) : (
            <div>
              <img src={item.img} alt="" />
              <div className={s.card}>
                <Button onClick={() => deleteTodo(item.id)}>delete</Button>
                <Button
                  onClick={() => editTodo(item.id, item.title)}
                  className={s.btn}
                >
                  edit
                </Button>
              </div>
            </div>
          )}
        </div>
      ))} */}
    </div>
  );
};
export default TodoList;
