import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <nav className="w-full flex flex-row justify-center items-center p-8">
      <ul className="flex flex-row gap-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "text-black" : "text-gray-400"
            }
          >
            Favorites
          </NavLink>
        </li>
        <li className="text-gray-400">Sign Out</li>
      </ul>
    </nav>
  );
};

export default Layout;
