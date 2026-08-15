import TodoInfo from "./TodoInfo/TodoInfo";
import TodoList from "./TodoList/TodoList";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

import styles from "./Todo.module.css";

export default function Todo() {
  const tasks: {
    id: string;
    title: string;
    isDone: boolean;
  }[] = [{
    id: "task-1",
    title: "Task 1",
    isDone: true,
  }, {
    id: "task-2",
    title: "Task 2",
    isDone: true,
  }, {
    id: "task-3",
    title: "Task 3",
    isDone: false,
  }];

  return (
    <section className={styles.todolist}>
      <div className={"container"}>
        <div className={styles.todo}>
          <h1 className={styles.title}>{"To Do List"}</h1>
          <AddTaskForm />
          <SearchTaskForm />
          <TodoInfo total={tasks.length} />
          <TodoList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
