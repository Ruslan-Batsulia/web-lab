import Field from "../Field/Field";
import styles from "./SearchTaskForm.module.css";

interface SearchTaskFormProps {
  onSearchInput: (query: string) => void;
}

export default function SearchTaskForm(props: SearchTaskFormProps) {
  const {
    onSearchInput,
  } = props;

  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        id="search-task"
        label="Search task"
        type="search"
        onInput={({currentTarget}) => onSearchInput(currentTarget.value)}
      />
    </form>
  );
}
