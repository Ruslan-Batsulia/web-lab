import TodoItem from "./../TodoItem/TodoItem";

import styles from "./TodoList.module.css";

export default function TodoList() {
  const hasTasks: boolean = true;

  if (!hasTasks) {
    return (
      <div className={styles.emptyMessage}></div>
    );
  }

  return (
    <ul className={styles.list}>
      <TodoItem />
      <li className={styles.item}>
        <input
          className={styles.checkBox}
          id="task-2"
          type="checkbox"
        />

        <label
          className={styles.label}
          htmlFor="task-2"
        >
          {"Task 2"}
        </label>

        <button
          className={styles.deleteButton}
          aria-label="Delete"
          title="Delete"
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
    </ul>
  );
}
