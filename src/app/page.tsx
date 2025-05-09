"use client";

import { FormEvent, useReducer, useRef } from "react";
import { todosReducer, ITodoActionType, ITodo } from "./reducers/todosReducer";
import { v4 as uuidv4 } from "uuid";
import Todo from "./todoItem";

export default function Home() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const addRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = addRef.current?.value ?? "";
    if (text !== "") {
      dispatch({
        type: ITodoActionType.Added,
        id: uuidv4(),
        text: addRef.current?.value ?? "",
      });
    }
  };

  const handleChange = (todo: ITodo) => {
    dispatch({
      type: ITodoActionType.Changed,
      todo: { ...todo, done: !todo.done },
    });
  };

  const handleRemove = (id: string) => {
    dispatch({
      type: ITodoActionType.Deleted,
      id,
    });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>TODO APP 2025 Next.js</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        ))}
        <div className="flex">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-100"
            onSubmit={handleAdd}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="todo"
              >
                New Todo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="todo"
                type="text"
                placeholder="New todo"
                ref={addRef}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Add
            </button>
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Built for testing!
      </footer>
    </div>
  );
}
