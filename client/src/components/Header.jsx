import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#d4d4d4]">
      <div className="flex justify-between items-center max-w-61 p-2">
        <Link to="../App.jsx">
          <h1 className="m-1">
            <span className=" text-slate-700 ">Swapnil</span>
            <span className="font-bold">Esatate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-2 flex items-center justify-between w-30 sm:w-80 lg:w-100 rounded-lg">
          <input
            className="outline-none bg-transparent border-none rounded-none"
            placeholder="Search..."
          />
          <FaSearch className="text-slate-500" />
        </form>

        <nav>
          <ul className="flex">
            <li className=" hidden sm:inline text-slate-700 hover:underline m-2">
              Home
            </li>
            <li className=" hidden sm:inline text-slate-700 hover:underline m-2">
              About
            </li>
            <li className="  hidden sm:inline text-slate-700 hover:underline m-2">
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
