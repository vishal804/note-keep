import React from "react";
import "./createNote.css";
import { useAuth } from "../../context/auth-context";
import { useNote } from "../../context/note-context";
import { addToNotesList } from "../../utility/NoteFunction";

const CreateNote = () => {
  const { note, setNote, setNotes } = useNote();

  const {
    authState: { token },
  } = useAuth();

  return (
    <>
      <div class="wrapper-container">
        <div class="note-container">
          <div class="note-title flex flex-space-between">
            <input
              className="note-title-input"
              type="text"
              placeholder="Title"
              autoFocus
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
            <p onClick={(e) => setNote({ ...note, isPinned: true })}>
              <i class="fas fa-map-pin"></i>
            </p>
          </div>

          <div class="note-content">
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
          <div class="note-function flex flex-space-between">
            <div className="left-navbar">
              <div className="note-tags">
                <select
                  className="tag"
                  onChange={(e) =>
                    setNote({
                      ...note,
                      tag: e.target.value,
                    })
                  }
                >
                  <option value="Label" hidden>
                    Label
                  </option>
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
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
            </div>

            <div className="right-navbar">
              <button
                className="btn"
                onClick={() => addToNotesList(note, setNote, setNotes, token)}
              >
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
