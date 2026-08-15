import styles from "./SearchTaskForm.module.css";

export default function SearchTaskForm() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label
          className={styles.label}
          htmlFor="search-task"
        >
          {"Search task"}
        </label>

        <input
          className={styles.input}
          id="search-task"
          placeholder=" "
          autoComplete="off"
          type="search"
        />
      </div>
    </form>
  );
}
