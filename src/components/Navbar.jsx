import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NoteContext } from "../context/NotesContext";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const { searchQuery, setSearchQuery } = useContext(NoteContext);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-700 flex flex-col md:flex-row items-center justify-between shadow-md z-50 p-4 md:px-12">
      <h1 className="text-2xl font-bold text-gray-100 mb-3 md:mb-0">
        📄Notes App
      </h1>

      <div className="flex items-center bg-slate-600 rounded-lg px-3 py-2 w-full md:w-1/3">
        <FiSearch className="text-gray-300 text-xl mr-2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes..."
          className="bg-transparent text-gray-200 outline-none w-full placeholder-gray-400"
        />
      </div>

      <div className="flex items-center gap-8 mt-3 md:mt-0">
        <Link
          to="/"
          className="text-lg text-gray-200 hover:text-white transition"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="bg-slate-400 hover:bg-slate-500 text-white py-2 px-4 rounded-md transition"
        >
          Add Note
        </Link>
      </div>
    </nav>
  );
}
