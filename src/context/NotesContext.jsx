import { createContext, useState, useEffect, Children } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {nanoid} from "nanoid";

export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useLocalStorage("notes", []);
    const [searchQuery, setSearchQuery] = useState("");

    const addNote = (note) => {
        const newNote = { ...note, id:nanoid(), date: new Date().toISOString() };
        setNotes([...notes, newNote]);
    }

    const editNote = (id, updatedNote) => {
        setNotes(prevNotes => ( prevNotes.map(note =>
      note.id === id ? { ...note, ...updatedNote } : note
        )));
    }

    const deleteNote = (id) =>{
        setNotes(notes.filter((note) => note.id !==id));
    }

    const filteredNote = notes.filter((n) => (
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        n.content.toLowerCase().includes(searchQuery.toLowerCase())
    ))

    return(
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote, searchQuery, setSearchQuery, filteredNote}}>
            {children}
        </NoteContext.Provider>
    )
}