import TodoItem from "./../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

interface TodoListProps {
  tasks: {
    id: string;
    title: string;
    isDone: boolean;
  }[];
}

export default function TodoList(props: TodoListProps) {
  const {
    tasks = [],
  } = props;

  return ((tasks.length > 0) ? (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </ul>
  ) : (
    <p className={styles.emptyMessage}>
      {"No tasks yet"}
    </p>
  ));
}
