import { useState, createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducer/noteReducer";

const NotesContext = createContext();
const useNote = () => useContext(NotesContext);

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    description: "",
    tag: "Label",
    priority: "Priority",
  });
  const [noteState, noteDispatch] = useReducer(NotesReducer, {
    notes: [],
    isEdit: false,
    editItem: {
      pinned: false,
      title: "",
      description: "",
      tag: "Tag",
      priority: "Priority",
    },
    notesTrash: [],
    notesArchive: [],
  });

  return (
    <NotesContext.Provider value={{ note, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { useNote, NoteProvider };
