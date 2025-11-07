import React, { useContext } from "react";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../context/NotesContext";

export default function Home() {
  const { filteredNote } = useContext(NoteContext);

  return (
    <div className="flex mt-44 md:mt-24 md:ml-12 flex-wrap">
      {filteredNote.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center text-gray-500 mx-auto">
          <p className="text-2xl font-semibold mb-3">No Notes Yet 📄</p>
          <p className="text-gray-400">Start by adding your first note!</p>
        </div>
      ) : (
        filteredNote.map((note) => <NoteCard key={note.id} note={note} />)
      )}
    </div>
  );
}
