import TodoInfo from "./TodoInfo/TodoInfo";
import TodoList from "./TodoList/TodoList";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

import styles from "./Todo.module.css";

export default function Todo() {
  return (
    <section className={styles.todolist}>
      <div className={"container"}>
        <div className={styles.todo}>
          <h1 className={styles.title}>{"To Do List"}</h1>
          <AddTaskForm />
          <SearchTaskForm />
          <TodoInfo />
          <TodoList />
        </div>
      </div>
    </section>
  );
}
