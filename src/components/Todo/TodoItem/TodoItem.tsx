import styles from "./TodoItem.module.css";

export default function TodoItem() {
  return (
    <li className={styles.item}>
      <input
        className={styles.checkBox}
        id="task-1"
        type="checkbox"
        checked
      />

      <label
        className={styles.label}
        htmlFor="task-1"
      >
        {"Task 1"}
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
  );
}
