import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="flex bg-stone-100 justify-center">
        <ul className="flex items-center gap-10 font-bold text-xl h-16">
          <li className=" hover:text-red-800">
            <Link to={"/"}> Quiz page</Link>
          </li>
          <li className="hover:text-red-800">
            <Link to={"/AdminPage"}>Admin</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
