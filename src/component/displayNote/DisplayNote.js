import React from "react";
import { useNote } from "../../context/note-context";

const DisplayNote = ({ note }) => {
  const { noteState, noteDispatch } = useNote();

  const editNoteHandler = () => {
    noteDispatch({ type: "SHOW_EDIT_BOX", payload: !noteState.isEdit });
    noteDispatch({ type: "EDIT_NOTE", payload: note });
  };

  return (
    <>
      <div class="wrapper-container">
        <div class="note-container">
          <div class="note-title flex flex-space-between">
            <p>{note.title}</p>
            <p>
              <i class="fas fa-map-pin"></i>
            </p>
          </div>

          <div class="note-content">
            <p>{note.description}</p>
          </div>

          <div class="note-function flex flex-space-between">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { DisplayNote };
