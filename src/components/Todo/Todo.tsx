"use client";

import { useState } from "react";
import TodoInfo from "./TodoInfo/TodoInfo";
import TodoList from "./TodoList/TodoList";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

import styles from "./Todo.module.css";

export default function Todo() {
  const [tasks, setTasks] = useState<{
    id: string;
    title: string;
    isDone: boolean;
  }[]>([]);

  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  const deleteAllTasks = () => {
    setTasks([]);
  }

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const toggleTaskComplete = (
    taskId: string,
    isDone: boolean,
  ) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone }
      }

      return task;
    }));
  }

  const filterTask = (query: string) => {
    console.log("Пошук:", query);
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask: {
        id: string;
        title: string;
        isDone: boolean;
      } = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  }

  return (
    <section className={styles.todolist}>
      <div className={"container"}>
        <div className={styles.todo}>
          <h1 className={styles.title}>{"To Do List"}</h1>
          <AddTaskForm
            addTask={addTask}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
          />
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
