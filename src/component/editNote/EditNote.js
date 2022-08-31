import React, { useState } from "react";
import "./editNote.css";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import { updateNote } from "../../utility/NoteFunction";
import { ColorPalette } from "../index";

const EditNote = () => {
  const { noteState, noteDispatch } = useNote();
  const { editItem } = noteState;

  const {
    authState: { token },
  } = useAuth();

  const [editNote, setEditNote] = useState({
    pinned: editItem.pinned,
    title: editItem.title,
    description: editItem.description,
    priority: editItem.priority,
    color: editItem.color,
  });

  return (
    <>
      <div className="wrapper-container edit-note">
        <div
          className="note-container"
          style={{ backgroundColor: editItem.color }}
        >
          <div className="note-title flex flex-space-between ">
            <input
              className="note-title-input "
              type="text"
              autoFocus
              value={editNote.title}
              onChange={(e) => {
                setEditNote({
                  ...editNote,
                  title: e.target.value,
                });
              }}
            />
          </div>

          <div className="note-content">
            <textarea
              className="note-description"
              rows="5"
              type="text"
              value={editNote.description}
              onChange={(e) => {
                setEditNote({
                  ...editNote,
                  description: e.target.value,
                });
              }}
            />
          </div>

          <div className="note-function flex flex-space-between">
            <div className="left-navbar">
              <div>
                <select
                  className="tag"
                  onChange={(e) => {
                    setEditNote({
                      ...editNote,
                      label: e.target.value,
                    });
                  }}
                >
                  {noteState.labels.map((labelOption) => (
                    <option value={labelOption} key={labelOption}>
                      {labelOption}
                    </option>
                  ))}
                </select>
                <select
                  className="tag"
                  onChange={(e) => {
                    setEditNote({
                      ...editNote,
                      priority: e.target.value,
                    });
                  }}
                >
                  <option value="Priority" hidden>
                    {editItem.priority}
                  </option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <ColorPalette note={editNote} setNote={setEditNote} />
            </div>

            <div className="right-navbar">
              <button
                className="btn"
                onClick={() => {
                  updateNote(editNote, noteState, noteDispatch, token);
                }}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { EditNote };
