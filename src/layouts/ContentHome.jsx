import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CardClass from "../components/CardClass";
import Jumbotron from "./Jumbotron";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";

const ContentHomeLayout = () => {
  const initialTodos = [
    "Todo 1",
    "Todo 2",
  ];

  const inputTodo = useRef();

  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const [todo, dispatch] = useReducer(todoReducer, initialTodos);
  const [onUpdate, setOnUpdate] = useState(null);

  const fetchTodo = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const titles = json.map((item) => item.title);
        setTodo(titles);
      });
  };

  // useEffect(() => {
  //   fetchTodo();
  // }, []);

  const addTodo = () => {
    if (onUpdate !== null) {
      const todo = inputTodo.current.value;
      inputTodo.current.value = "";
      // setTodo((dataBefore) => {
      //   dataBefore[onUpdate] = todo;
      //   return [...dataBefore];
      // });
      setOnUpdate(null);
    } else {
      const todo = inputTodo.current.value;
      inputTodo.current.value = "";
      dispatch({ type: "ADD", index: onUpdate, todo });
      // setTodo((dataBefore) => {
      //   return [...dataBefore, todo];
      // });
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
    <div
      className="content-home-layout"
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      {/* <Jumbotron /> */}
      <button onClick={toggleTheme}>Ganti Tema</button>
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
