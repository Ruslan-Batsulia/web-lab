import Field from "./../Field/Field";
import AddButton from "./../AddButton/AddButton";

import styles from "./AddTaskForm.module.css";

export default function AddTaskForm() {
  return (
    <form className={styles.form}>
      <Field />
      <AddButton />
    </form>
  );
}
