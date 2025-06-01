import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CardClass from "../components/CardClass";
import Jumbotron from "./Jumbotron";

const ContentHomeLayout = () => {
  const inputTodo = useRef();

  const [todo, setTodo] = useState([]);
  const [onUpdate, setOnUpdate] = useState(null);

  const fetchTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const titles = json.map((item) => item.title)
        setTodo(titles);
      });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const addTodo = () => {
    if (onUpdate !== null) {
      const todo = inputTodo.current.value;
      inputTodo.current.value = "";
      setTodo((dataBefore) => {
        dataBefore[onUpdate] = todo;
        return [...dataBefore];
      });
      setOnUpdate(null);
    } else {
      const todo = inputTodo.current.value;
      inputTodo.current.value = "";
      setTodo((dataBefore) => {
        return [...dataBefore, todo];
      });
    }
  };

  const deleteTodo = (index) => {
    setTodo((dataBefore) => {
      return dataBefore.filter((item, i) => i !== index);
    });
  };

  const updatePrepare = (index) => {
    const currentTodo = todo[index];
    inputTodo.current.value = currentTodo;
    setOnUpdate(index);
  };

  return (
    <div className="content-home-layout" style={{ padding: "20px" }}>
      {/* <Jumbotron /> */}
      <div
        style={{
          width: "600px",
          margin: "auto",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <input ref={inputTodo} type="text" placeholder="Masukan Todo" />
        <button onClick={addTodo}>
          {onUpdate === null ? "Add" : "Update"}
        </button>
        <br />
        <ul>
          {todo.map((item, index) => {
            return (
              <li style={{ margin: "20px" }} key={index}>
                {item}{" "}
                <button onClick={() => updatePrepare(index)}>Edit</button>{" "}
                <button onClick={() => deleteTodo(index)}>Hapus</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContentHomeLayout;
