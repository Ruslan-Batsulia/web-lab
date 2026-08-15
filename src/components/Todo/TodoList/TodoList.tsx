import TodoItem from "./../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

interface TodoListProps {
  tasks: {
    id: string;
    title: string;
    isDone: boolean;
  }[];
  onDeleteButtonClick: (taskId: string) => void;
  onTaskCompleteChange: (
    taskId: string,
    isDone: boolean,
  ) => void;
}

export default function TodoList(props: TodoListProps) {
  const {
    tasks = [],
    onDeleteButtonClick,
    onTaskCompleteChange,
  } = props;

  return ((tasks.length > 0) ? (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          onDeleteButtonClick={onDeleteButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.emptyMessage}>
      {"No tasks yet"}
    </p>
  ));
}
