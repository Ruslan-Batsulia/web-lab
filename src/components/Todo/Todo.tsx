"use client";

import TodoInfo from "./TodoInfo/TodoInfo";
import TodoList from "./TodoList/TodoList";
import { useEffect, useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState<string>("");

  const deleteAllTasks = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  const deleteTask = (taskId: string) => {
    const updatedTasks: {
      id: string;
      title: string;
      isDone: boolean;
    }[] = tasks.filter((task) => task.id !== taskId);

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  const toggleTaskComplete = (
    taskId: string,
    isDone: boolean,
  ) => {
    const updatedTasks: {
      id: string;
      title: string;
      isDone: boolean;
    }[] = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isDone }
      }

      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
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

      const updatedTasks: {
        id: string;
        title: string;
        isDone: boolean;
      }[] = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTaskTitle("");
      setSearchQuery("");
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  }

  useEffect(() => {
    const savedTasks: string | null = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const clearSearchQuery: string = searchQuery.trim().toLowerCase();
  const filteredTasks: { id: string; title: string; isDone: boolean; }[] | null
    = clearSearchQuery.length > 0
    ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null;

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
          <SearchTaskForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <TodoInfo
            total={tasks.length}
            onDeleteAllButtonClick={deleteAllTasks}
          />
          <TodoList
            tasks={tasks}
            filteredTasks={filteredTasks}
            onDeleteButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
          />
        </div>
      </div>
    </section>
  );
}
