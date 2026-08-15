import Field from "./../Field/Field";
import AddButton from "./../AddButton/AddButton";

import styles from "./AddTaskForm.module.css";

interface AddTaskFormProps {
  addTask: () => void;
}

export default function AddTaskForm(props: AddTaskFormProps) {
  const {
    addTask,
  } = props;

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask();
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        id="new-task"
        label="New task title"
      />
      <AddButton />
    </form>
  );
}
