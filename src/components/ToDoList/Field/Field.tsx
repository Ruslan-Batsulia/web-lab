import styles from "./Field.module.css";

export default function Field() {
  return (
    <div className={styles.field}>
      <label
        className={styles.label}
        htmlFor="new-task"
      >
        {"New task"}
      </label>

      <input
        className={styles.input}
        id="new-task"
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
}
