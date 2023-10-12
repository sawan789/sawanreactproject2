import React from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addtodo,
  resettodo,
  deletetodo,
  checkboxtodo,
  edittodo,
  submitediting,
  setinputvalue,
} from "./Todoslice";
import "./todo.css";

function Todo() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.list);
  const editing = useSelector((state) => state.todo.editing);
  const newvalue = useSelector((state) => state.todo.value);

  function handlesubmit() {
    if (editing !== null) {
      dispatch(submitediting(newvalue));
    } else {
      dispatch(
        addtodo({
          data: newvalue,
        })
      );
    }
  }
  function handlereset() {
    dispatch(resettodo());
  }

  function handleedit(edit) {
    dispatch(edittodo(edit.id));
  }

  function handledelete(item) {
    dispatch(deletetodo({ newid: item.id }));
  }

  function handlecheckbox(checkedtodo) {
    dispatch(checkboxtodo(checkedtodo));
  }

  return (
    <div className="todo">
      <Container>
        <Row>
          <Col>
            <h1>Todo App Using React-Toolkit</h1>
            <input
              type="text"
              value={newvalue}
              onChange={(e) => {
                dispatch(setinputvalue({ dataname: e.target.value }));
              }}
            ></input>{" "}
            <Button variant="primary" onClick={handlesubmit}>
              {editing === null ? "Add" : "Update"}
            </Button>{" "}
            <Button variant="primary" onClick={handlereset}>
              Reset
            </Button>{" "}
            <br />
            <br />
            {list.map((item) => {
              return (
                !item.ischecked && (
                  <>
                    <p
                      key={item.id}
                      style={{
                        fontSize: "20px",
                        textAlign: "justify",
                        width: "50%",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={item.ischecked}
                        onChange={() => handlecheckbox(item.id)}
                      />{" "}
                      {item.data}
                      <span>
                        <Button
                          id="btn"
                          style={{ color: "red" }}
                          className="btn btn-sm ms-5"
                          onClick={() => handledelete(item)}
                        >
                          X
                        </Button>
                        <Button
                          id="btn"
                          className="btn btn-sm  ms-1"
                          onClick={() => handleedit(item)}
                        >
                          Edit
                        </Button>
                      </span>
                    </p>
                  </>
                )
              );
            })}
            <br />
            {list.map((item) => {
              return (
                item.ischecked && (
                  <>
                    <p
                      key={item.id}
                      style={{
                        textDecoration: "line-through",
                        color: "blue",
                        fontSize: "20px",
                        textAlign: "justify",

                        width: "50%",
                      }}
                    >
                      <input
                        type="checkbox"
                        id="checkbox"
                        checked={item.ischecked}
                        onChange={() => handlecheckbox(item.id)}
                      />{" "}
                      {item.data}
                      <Button
                        id="btn"
                        style={{ color: "red" }}
                        className="btn btn-sm   ms-5"
                        onClick={() => handledelete(item)}
                      >
                        X
                      </Button>
                      <Button
                        id="btn"
                        className="btn btn-sm ms-1 "
                        onClick={() => handleedit(item)}
                      >
                        Edit
                      </Button>
                    </p>
                  </>
                )
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Todo;
