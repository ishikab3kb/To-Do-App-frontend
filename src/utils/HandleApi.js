import axios from "axios";

const baseUrl = "https://to-do-app-backend-tbei.onrender.com";
// const baseUrl = "http://localhost:5000";

const getAllToDo = (checkbox1, checkbox2, setToDo) => {
  axios
    .post(baseUrl, { completed: checkbox1, incomplete: checkbox2 })
    .then(({ data }) => {
      console.log("data -->", data);
      setToDo(data);
    });
};

const updateStatus = (checkbox1, checkbox2, todoId, setToDo) => {
  axios
    .post(baseUrl + "/updateStatus", { _id: todoId, completed: true })
    .then((data) => {
      console.log(data);
      getAllToDo(checkbox1, checkbox2, setToDo);
    })
    .catch((err) => console.log(err));
};

const addToDo = (checkbox1, checkbox2, text, setText, setToDo) => {
  axios
    .post(baseUrl + "/save", { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(checkbox1, checkbox2, setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (
  checkbox1,
  checkbox2,
  toDoId,
  text,
  setToDo,
  setText,
  setIsUpdating
) => {
  axios
    .post(baseUrl + "/update", { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(checkbox1, checkbox2, setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (checkbox1, checkbox2, toDoId, setToDo) => {
  axios
    .post(baseUrl + "/delete", { _id: toDoId })
    .then((data) => {
      console.log(data);
      getAllToDo(checkbox1, checkbox2, setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo, updateStatus };
