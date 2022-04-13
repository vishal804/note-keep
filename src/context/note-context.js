import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [note, setNote] = useState({
    isPinned: false,
    title: "",
    description: "",
    tag: "Tag",
    priority: "Priority",
    selectedBackgroundColor: "#faf8f8",
  });

  const [edit, setEdit] = useState({
    isEdit: false,
    editItem: {
      _id: null,
      isPinned: false,
      title: "",
      description: "",
      tag: "Tag",
      priority: "Priority",
      selectedBackgroundColor: "#faf8f8",
    },
  });

  const [notes, setNotes] = useState([]);

  return (
    <NoteContext.Provider
      value={{ note, setNote, notes, setNotes, edit, setEdit }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
