import TodoItem from "./../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

interface TodoListProps {
  tasks: {
    id: string;
    title: string;
    isDone: boolean;
  }[];
  filteredTasks: {
    id: string;
    title: string;
    isDone: boolean;
  }[] | null;
  onDeleteButtonClick: (taskId: string) => void;
  onTaskCompleteChange: (
    taskId: string,
    isDone: boolean,
  ) => void;
}

export default function TodoList(props: TodoListProps) {
  const {
    tasks = [],
    filteredTasks,
    onDeleteButtonClick,
    onTaskCompleteChange,
  } = props;

  const hasTasks: boolean = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTasks) {
    return (
      <p className={styles.emptyMessage}>
        {"No tasks yet"}
      </p>
    );
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return (
      <p className={styles.emptyMessage}>
        {"Tasks not found"}
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {(filteredTasks ?? tasks).map((task) => (
        <TodoItem
          key={task.id}
          onDeleteButtonClick={onDeleteButtonClick}
          onTaskCompleteChange={onTaskCompleteChange}
          {...task}
        />
      ))}
    </ul>
  );
}
