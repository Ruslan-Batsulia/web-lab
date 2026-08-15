import styles from "./ToDoList.module.css";

export default function ToDoList() {
  return (
    <section className={styles.todolist}>
      <div className={"container"}>
        <div className={styles.todo}>
          <h1 className={styles.title}>{"To Do List"}</h1>

          <form className={styles.form}>
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

            <button className={styles.button} type="submit">{"Add"}</button>
          </form>

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

          <div className={styles.info}>
            <div className={styles.totalTasks}>
              {"Total tasks: "}
              <span>{0}</span>
            </div>

            <button
              type="button"
              className={styles.deleteAllButton}
            >
              {"Delete all"}
            </button>
          </div>

          <ul className={styles.list}>
            <li className={styles.item}>
              <input
                className={styles.checkBox}
                id="task-1"
                type="checkbox"
                checked
              />

              <label
                className={styles.checkBoxLabel}
                htmlFor="task-1"
              >
                {"Task 1"}
              </label>

              <button
                className={styles.deleteButton}
                aria-label="Delete"
                title="Delete"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="#757575"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li className={styles.item}>
              <input
                className={styles.checkBox}
                id="task-2"
                type="checkbox"
              />

              <label
                className={styles.checkBoxLabel}
                htmlFor="task-2"
              >
                {"Task 2"}
              </label>

              <button
                className={styles.deleteButton}
                aria-label="Delete"
                title="Delete"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="#757575"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
          </ul>

          <div className={styles.emptyMessage}></div>
        </div>
      </div>
    </section>
  );
}
