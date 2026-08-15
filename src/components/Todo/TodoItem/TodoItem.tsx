import styles from "./TodoItem.module.css";

interface TodoItemProps {
  id: string;
  title: string;
  isDone: boolean;
  onDeleteButtonClick: (taskId: string) => void;
  onTaskCompleteChange: (
    taskId: string,
    isDone: boolean,
  ) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const {
    id,
    title,
    isDone = false,
    onDeleteButtonClick,
    onTaskCompleteChange,
  } = props;

  return (
    <li className={styles.item}>
      <input
        className={styles.checkBox}
        id={id}
        type="checkbox"
        checked={isDone}
        onChange={({target}) => {
          onTaskCompleteChange(id, target.checked);
        }}
      />

      <label
        className={styles.label}
        htmlFor={id}
      >
        {title}
      </label>

      <button
        className={styles.deleteButton}
        aria-label="Delete"
        title="Delete"
        onClick={() => onDeleteButtonClick(id)}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  );
}
