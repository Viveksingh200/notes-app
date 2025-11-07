import React, { useContext } from 'react';
import NoteForm from '../components/NoteForm';
import { useNavigate } from "react-router-dom";
import { NoteContext } from '../context/NotesContext';

export default function AddNote() {
  const navigate = useNavigate();
  const { addNote } = useContext(NoteContext); 

  const handleAdd = (note) => {
    addNote(note);
    navigate("/"); 
  };

  return (
    <div>
      <h1 className='text-center mt-8 text-3xl font-bold underline'>Add Note</h1>
      <NoteForm onSubmit={handleAdd} />
    </div>
  );
}
