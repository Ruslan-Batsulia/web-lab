import styles from "./AddButton.module.css";

export default function AddButton() {
  return (
    <button
      className={styles.button}
      type="submit"
    >
      {"Add"}
    </button>
  );
}
