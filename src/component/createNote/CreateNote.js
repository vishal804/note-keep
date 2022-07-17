import React, { useState } from "react";
import "./createNote.css";
import { useAuth } from "../../context/auth-context";
import { useNote } from "../../context/note-context";
import { addToNotesList } from "../../utility/NoteFunction";
import { ColorPalette } from "../index";

const CreateNote = () => {
  const { note, setNote, noteState, noteDispatch } = useNote();
  const [label, setLabel] = useState("Label");
  const {
    authState: { token },
  } = useAuth();

  const noteList = { ...note, label };

  const addToNotes = () => {
    addToNotesList(noteList, setNote, noteDispatch, token);
  };

  return (
    <>
      <div className="wrapper-container">
        <div className="note-container" style={{ backgroundColor: note.color }}>
          <div className="note-title flex flex-space-between">
            <input
              className="note-title-input"
              type="text"
              placeholder="Title"
              autoFocus
              value={note.title}
              onChange={(e) =>
                setNote({
                  ...note,
                  title: e.target.value,
                  noteCreatedAt: new Date().getTime(),
                })
              }
            />
            <p onClick={(e) => setNote({ ...note, isPinned: true })}>
              <i className="fas fa-map-pin"></i>
            </p>
          </div>

          <div className="note-content">
            <textarea
              className="note-description"
              rows="5"
              type="text"
              placeholder="Take a note..."
              value={note.description}
              onChange={(e) =>
                setNote({ ...note, description: e.target.value })
              }
            />
          </div>
          {/* Tags */}
          <div className="note-function flex flex-space-between">
            <div className="left-navbar">
              <div>
                <select
                  className="tag"
                  onChange={(e) => setLabel(e.target.value)}
                >
                  {noteState.labels.map((labelOption) => (
                    <option value={labelOption} key={labelOption}>
                      {labelOption}
                    </option>
                  ))}
                </select>

                <select
                  className="tag"
                  onChange={(e) =>
                    setNote({
                      ...note,
                      priority: e.target.value,
                    })
                  }
                >
                  <option value="Priority" hidden>
                    Priority
                  </option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <ColorPalette note={note} setNote={setNote} />
            </div>

            <div className="right-navbar">
              <button className="btn" onClick={addToNotes}>
                Add Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CreateNote };
