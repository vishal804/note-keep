import { useState, createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducer/noteReducer";

const NotesContext = createContext();
const useNote = () => useContext(NotesContext);

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState({
    pinned: false,
    title: "",
    description: "",
    priority: "Priority",
    color: "#F7F7F7",
  });
  const [noteState, noteDispatch] = useReducer(NotesReducer, {
    notes: [],
    isEdit: false,
    editItem: {
      pinned: false,
      title: "",
      description: "",
      priority: "Priority",
      color: "#F7F7F7",
    },
    notesTrash: [],
    notesArchive: [],
    labels: ["Label", "Work", "Office", "Party", "Personal"],
  });

  return (
    <NotesContext.Provider value={{ note, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { useNote, NoteProvider };
