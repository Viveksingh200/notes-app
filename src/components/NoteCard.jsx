import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../context/NotesContext";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 

export default function NoteCard({ note }) {
  const navigate = useNavigate();
  const { deleteNote } = useContext(NoteContext);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      deleteNote(note.id);
    }
  };

  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 m-4 md:ml-12 sm:ml-8">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 break-words">
        {note.title || "Untitled Note"}
      </h2>

      {/* Content */}
      <p className="text-gray-600 text-base mb-4 whitespace-pre-wrap break-words pb-12 pt-4">
        {note.content?.length > 150
          ? note.content.slice(0, 150) + "..."
          : note.content || "No content provided."}
      </p>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => navigate(`/edit/${note.id}`)}
          className="flex items-center justify-center gap-2 flex-1 mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 rounded-lg shadow transition duration-200"
        >
          <FaEdit /> Edit
        </button>

        <button
          onClick={handleDelete}
          className="flex items-center justify-center gap-2 flex-1 ml-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg shadow transition duration-200"
        >
          <FaTrashAlt /> Delete
        </button>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-400 mt-3 text-right">
        {new Date(note.date).toLocaleString()}
      </p>
    </div>
  );
}
