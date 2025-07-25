import NewUserFrom from "./components/NewUserFrom";
import UserList from "./components/UserList";


export default function Home() {
  return (
  <div className="flex flex-col gap-6 p-20">
    <h1 className="font-bold text-3xl">ADD USER</h1>

    <NewUserFrom />
    <UserList />
  </div>
  );
}
