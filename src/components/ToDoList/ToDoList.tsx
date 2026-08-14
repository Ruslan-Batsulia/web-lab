import styles from "./ToDoList.module.css";

export default function ToDoList() {
  return (
    <section className={styles.todolist}>
      <div className={"container"}>
        {"To Do List"}
      </div>
    </section>
  )
}
