import React from "react";

import { BiEdit } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";

const ToDo = ({ text, completed, updateStatus, updateMode, deleteToDo }) => {
  const todoClass = completed ? "todo completed" : "todo incomplete";

  return (
    <div className={todoClass}>
      <div className="text">{text}</div>
      <div className="icons">
        <TiTick className="icon" onClick={updateStatus} />
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
