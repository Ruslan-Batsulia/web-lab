import Field from "../Field/Field";
import styles from "./SearchTaskForm.module.css";

interface SearchTaskFormProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchTaskForm(props: SearchTaskFormProps) {
  const {
    searchQuery,
    setSearchQuery,
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
        value={searchQuery}
        onInput={({currentTarget}) => setSearchQuery(currentTarget.value)}
      />
    </form>
  );
}
