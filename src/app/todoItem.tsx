import React from "react";
import { ITodo } from "./reducers/todosReducer";

interface ITodoItem {
  todo: ITodo;
  handleChange: (todo: ITodo) => void;
  handleRemove: (id: string) => void;
}

export default function TodoItem(props: ITodoItem) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-100 flex items-center justify-between">
      <span
        onClick={() => props.handleChange(props.todo)}
        style={{
          textDecorationLine: props.todo.done ? "line-through" : "none",
        }}
      >
        {props.todo.text}
      </span>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => props.handleRemove(props.todo.id)}
      >
        Remove
      </button>
    </div>
  );
}
