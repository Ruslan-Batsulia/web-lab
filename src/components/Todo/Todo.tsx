"use client";

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

  const deleteAllTasks = () => {
    console.log("Видаляємо всі задачі");
  }

  const deleteTask = (taskId: string) => {
    console.log("Видаляємо задачу з id:", taskId);
  }

  const toggleTaskComplete = (
    taskId: string,
    isDone: boolean,
  ) => {
    console.log(
      "Задачу", taskId,
      isDone ? "виконано" : "не виконано"
    );
  }

  const filterTask = (query: string) => {
    console.log("Пошук:", query);
  }

  const addTask = () => {
    console.log("Задача додана");
  }

  return (
    <section className={styles.todolist}>
      <div className={"container"}>
        <div className={styles.todo}>
          <h1 className={styles.title}>{"To Do List"}</h1>
          <AddTaskForm addTask={addTask} />
          <SearchTaskForm onSearchInput={filterTask} />
          <TodoInfo
            total={tasks.length}
            onDeleteAllButtonClick={deleteAllTasks}
          />
          <TodoList
            tasks={tasks}
            onDeleteButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
          />
        </div>
      </div>
    </section>
  );
}
