import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <header className="flex justify-between items-center p-2 sticky">
      <Link to={"/"}>
        <div className="flex items-center ">
          <img
            className="w-[50px] pr-1"
            src="https://clipart.info/images/ccovers/1590430652red-youtube-logo-png-xl.png"
          />
          <h1 className="text-white text-2xl">Youtube</h1>
        </div>
      </Link>
      <form className="flex items-center  rounded">
        <input
          type="text"
          className="px-4 py-1 rounded-2xl bg-white text-black outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link
          to={`/results?search_query=${query}`}
          className="mr-2 bg-white p-2 mx-2 rounded-2xl "
        >
          <FiSearch className="text-black " />
        </Link>
      </form>
      <FaBell className="mr-4" />
    </header>
  );
};

export default Header;
