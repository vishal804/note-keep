import React from "react";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import { archiveNote, deleteNote } from "../../utility/NoteFunction";

const DisplayNote = ({ note }) => {
  const { noteState, noteDispatch } = useNote();

  const {
    authState: { token },
  } = useAuth();

  const editNoteHandler = () => {
    noteDispatch({ type: "SHOW_EDIT_BOX", payload: !noteState.isEdit });
    noteDispatch({ type: "EDIT_NOTE", payload: note });
  };

  return (
    <>
      <div className="wrapper-container">
        <div className="note-container">
          <div className="note-title flex flex-space-between">
            <p>{note.title}</p>
            <p>
              <i className="fas fa-map-pin"></i>
            </p>
          </div>

          <div className="note-content">
            <p>{note.description}</p>
          </div>

          <div className="note-function flex flex-space-between">
            <div className="left-navbar">
              <div style={{ margin: "1rem", fontSize: "0.9rem" }}>
                {note.tag}
              </div>
              <div style={{ margin: "1rem", fontSize: "0.9rem" }}>
                {note.priority}
              </div>
            </div>
            <div className="right-Navbar">
              <i
                className="icon-style fas fa-edit"
                onClick={() => {
                  editNoteHandler();
                }}
              ></i>
              <i
                className="icon-style fas fa-trash"
                onClick={() => deleteNote(note, noteDispatch, token)}
              ></i>
              <i
                className="icon-style fas fa-archive"
                onClick={() => archiveNote(note, noteDispatch, token)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DisplayNote };
