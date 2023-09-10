import { useEffect, useState } from "react";
import ToDo from "./Components/ToDo";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
  updateStatus,
} from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setTodoId] = useState("");
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);

  const handleCheckbox1Change = () => {
    setCheckbox1(!checkbox1);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2(!checkbox2);
  };

  useEffect(() => {
    getAllToDo(checkbox1, checkbox2, setToDo);
  }, [checkbox1, checkbox2]);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <div className="add_input">
            <input
              className="addText"
              type="text"
              placeholder="Add ToDos..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></input>
            <div
              className="add"
              onClick={
                isUpdating
                  ? () =>
                      updateToDo(
                        checkbox1,
                        checkbox2,
                        toDoId,
                        text,
                        setToDo,
                        setText,
                        setIsUpdating
                      )
                  : () => addToDo(checkbox1, checkbox2, text, setText, setToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>

          <div className="status">
            <label className="checkbox">
              Completed
              <input
                className="check"
                type="checkbox"
                checked={checkbox1}
                onChange={handleCheckbox1Change}
              />
            </label>

            <label className="checkbox">
              Incomplete
              <input
                className="check"
                type="checkbox"
                checked={checkbox2}
                onChange={handleCheckbox2Change}
              />
            </label>
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              completed={item.completed}
              updateStatus={() =>
                updateStatus(
                  checkbox1,
                  checkbox2,
                  item._id,
                  item.completed,
                  setToDo
                )
              }
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() =>
                deleteToDo(checkbox1, checkbox2, item._id, setToDo)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
