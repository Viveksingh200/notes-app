import React, { useContext } from "react";
import { NoteContext } from "../context/NotesContext";
import { useNavigate, useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { FiArrowLeft } from "react-icons/fi";

export default function EditNote() {
  const { id } = useParams();
  const { notes, editNote } = useContext(NoteContext);
  const navigate = useNavigate();

  const noteToEdit = notes.find((n) => n.id === id);

  const handleEdit = (updatedNote) => {
    editNote(id, updatedNote);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-300 p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          Edit Note
        </h1>

        {noteToEdit ? (
          <NoteForm initialData={noteToEdit} onSubmit={handleEdit} />
        ) : (
          <p className="text-center text-red-500 font-medium">
            Note not found!
          </p>
        )}
      </div>
    </div>
  );
}
