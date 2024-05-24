import { useState, useReducer, useRef } from "react";
import "./App.scss";
import Button from "./components/Button";

//리듀서 등록
const reducer = (todoList, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...todoList];
    case "UPDATE":
      return todoList.map((item) =>
        item.id == action.data.id ? action.data : item
      );
    case "DELETE":
      return todoList.filter((item) => item.id !== action.data.id);
  }
};

function App() {
  const [todoList, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState(""); //new todo
  const [updateInput, setUpdateInput] = useState("");
  const [updateId, setUpdateId] = useState(null);
  const [updateVisible, setUpdateVisible] = useState(false);
  const idRef = useRef(1);
  //add
  const onCreateHandler = () => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: input,
      },
    });
    setInput("");
  };
  //update
  const onUpdateHandler = (id) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        content: updateInput,
      },
    });
    setInput("");
  };
  //delete
  const onDeleteHandler = (id) => {
    dispatch({
      type: "DELETE",
      data: {
        id,
      },
    });
    setInput("");
  };

  return (
    <div className="ym_todo_wrap">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="ym_todo_area">
        <div className="todo_head">
          <div className="head_left">
            <h2>이름을 입력하세요</h2>
          </div>
          <div className="head_right">
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <div className="todo_body">
          <div className="todo_input">
            <input
              type="text"
              value={input}
              placeholder="하고싶은 일을 적어주세요."
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <Button text={"추가"} type={"btntype3"} onClick={onCreateHandler} />
          </div>
          <div className="todo_list">
            <h3>오늘 내가 하고싶은 일</h3>
            {todoList.map((item) => {
              return (
                <div className="todo_item" key={item.id}>
                  {item.id == updateId && updateVisible ? (
                    <div className="todo_item_edit">
                      <input
                        type="text"
                        value={updateInput}
                        onChange={(e) => {
                          setUpdateInput(e.target.value);
                        }}
                      />
                    </div>
                  ) : (
                    <p>{item.content}</p>
                  )}

                  <Button
                    text={"수정"}
                    type={"btntype1"}
                    onClick={() => {
                      setUpdateId(item.id);
                      setUpdateVisible(!updateVisible);
                      onUpdateHandler(item.id);
                      setUpdateInput("");
                    }}
                  />
                  <Button
                    text={"삭제"}
                    type={"btntype2"}
                    onClick={() => {
                      onDeleteHandler(item.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
