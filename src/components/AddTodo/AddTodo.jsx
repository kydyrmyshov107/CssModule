import React, { useRef } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";
import styled from "styled-components";
const AddTodo = ({ todo, setTodo }) => {
  // const [value, setValue] = useState("");
  // const [value2, setValue2] = useState("");
  // const [value3, setValue3] = useState("");
  const value = useRef(null);
  const value2 = useRef(null);
  const value3 = useRef(null);
  function saveTodo() {
    if (
      value.current.value === "" ||
      value2.current.value === "" ||
      value3.current.value === ""
    ) {
      alert("write something");
    } else {
      setTodo([
        ...todo,
        {
          id: Math.random(),
          name: value.current.value,
          img: value2.current.value,
          nameG: value3.current.value,
          status: true,
        },
      ]);
    }
    value.current.value = "";
    value2.current.value = "";
    value3.current.value = "";
  }

  const StyledForm = styled.form`
    display: flex;
    align-items: center;
  `;
  const StyleInput = styled.input`
    border: none;
    outline: none;
    border: 1px solid #2271b1;
    border-radius: 20px;
    width: 400px;
  `;
  const StyleButton = styled.button`
    background: #0066ff;
    color: white;
    &:hover {
      background-color: #0066ff;    
      color: white;
    }
  `;
  return (
    <Row>
      <Col>
        <div className={s.addTodoForm}>
          <StyledForm>
            <StyleInput
              placeholder="name movie"
              ref={value}
              // onChange={(e) => setValue(e.target.value)}
            />
            <StyleInput
              placeholder="img link"
              ref={value2}
              // onChange={(e) => setValue2(e.target.value)}
            />
            <StyleInput
              placeholder="genre"
              ref={value3}
              // onChange={(e) => setValue3(e.target.value)}
            />

            <StyleButton onClick={saveTodo} className="btn">
              save
            </StyleButton>
          </StyledForm>
        </div>
      </Col>
    </Row>
  );
};
export default AddTodo;
