import {
  Header,
  ToDoList,
  Footer,
} from "@/src/components";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ToDoList />
      </main>
      <Footer />
    </>
  );
}
