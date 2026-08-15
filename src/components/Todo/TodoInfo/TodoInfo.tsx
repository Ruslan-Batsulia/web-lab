import styles from "./TodoInfo.module.css";

interface TodoInfoProps {
  total: number;
  onDeleteAllButtonClick: () => void;
}

export default function TodoInfo(props: TodoInfoProps) {
  const {
    total,
    onDeleteAllButtonClick,
  } = props;

  return (
    <div className={styles.info}>
      <div className={styles.totalTasks}>
        {"Total tasks: "}
        <span>{total}</span>
      </div>

      {(total > 0) && (
        <button
          type="button"
          className={styles.deleteAllButton}
          onClick={onDeleteAllButtonClick}
        >
          {"Delete all"}
        </button>
      )}
    </div>
  );
}
