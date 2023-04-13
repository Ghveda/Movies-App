import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userLogout } from "store/slice/userSlice";

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <nav className="w-full flex flex-row justify-center items-center p-8">
      <ul className="flex flex-row gap-10 items-center">
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
        <li className="text-gray-400">
          <Button onClick={() => dispatch(userLogout())}>Sign Out</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
