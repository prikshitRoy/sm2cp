import { Footer } from "./component/footer/Fotter";
import { Header } from "./component/header/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-items-center">
      <Header className="">
        <div className="flex-1 text-left">left</div>
        <div className="flex-1 text-center">middle</div>
        <div className="flex-1 text-right">right</div>
      </Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start py-2 flex-grow h-[600px]">
        Hello Everybody!!
      </main>
      <Footer>Footer</Footer>
    </div>
  );
}
