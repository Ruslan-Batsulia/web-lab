import Field from "../Field/Field";
import styles from "./SearchTaskForm.module.css";

export default function SearchTaskForm() {
  return (
    <form className={styles.form}>
      <Field
        id="search-task"
        label="Search task"
        type="search"
      />
    </form>
  );
}
