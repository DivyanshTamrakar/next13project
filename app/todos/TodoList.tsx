import Link from "next/link";
import React from "react";
import { Todo } from "../../typing";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Promise<Todo[]> = res.json();
  return todos;
};
async function TodoList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo: Todo) => {
        return (
          <p key={todo.id}>
            {<Link href={`/todos/${todo.id}`}>Todo :{todo.id}</Link>}
          </p>
        );
      })}
    </>
  );
}

export default TodoList;
