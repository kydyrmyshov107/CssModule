import React, { useState } from "react";
import s from "./Main.module.css";
import styled from "styled-components";

const Main = ({ todo }) => {
  const [todoNew, setTodoNew] = useState(todo);
  const [genre, setGenre] = useState("");

  const changeGenre = (e) => {
    setGenre(e.target.value);
    if (e.target.value === "Все") {
      setTodoNew(todo);
    } else {
      const filteredTodo = todo.filter((todo) => todo.nameG === e.target.value);
      setTodoNew(filteredTodo);
    }
  };

  const StyleSelect = styled.select`
    color: white;
    background: rgb(2, 2, 110);
    border: none;
    outline: none;
    border-radius: 25px;
  `;
  return (
    <div>
      <StyleSelect className={s.aside} onChange={changeGenre} value={genre}>
        <option value="Все">Все</option>
        <option value="Комедии">Комедии</option>
        <option value="Фантастика">Фантастика</option>
        <option value="Боевики">Боевики</option>
        <option value="Ужасы">Ужасы</option>
      </StyleSelect>
      <div className={s.box}>
        {todoNew.map((item) => {
          return (
            <div className={s.card} key={item.id}>
              <h5> {item.name}</h5>
              <img src={item.img} alt={item.name} />
              <p> {item.nameG}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Main;
