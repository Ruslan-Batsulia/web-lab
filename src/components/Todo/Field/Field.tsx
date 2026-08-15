import styles from "./Field.module.css";

interface FieldProps {
  id: string;
  label: string;
  type?: "text" | "search";
}

export default function Field(props: FieldProps) {
  const {
    id,
    label,
    type = "text",
  } = props;

  return (
    <div className={styles.field}>
      <label
        className={styles.label}
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className={styles.input}
        id={id}
        placeholder=" "
        autoComplete="off"
        type={type}
      />
    </div>
  );
}
