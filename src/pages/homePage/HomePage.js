import React from "react";
import "./homePage.css";
import { useNote } from "../../context/note-context";
import {
  CreateNote,
  DisplayNote,
  EditNote,
  Filter,
  SideNavbar,
} from "../../component";

const HomePage = () => {
  const {
    noteState: { notes, isEdit, filters },
  } = useNote();

  const sortNotesByPriority = (filter, notes) => {
    const lowPriorityNotes = notes.filter((note) => note.priority === "Low");
    const hightPriorityNotes = notes.filter((note) => note.priority === "High");
    const mediumtPriorityNotes = notes.filter(
      (note) => note.priority === "Medium"
    );
    if (filter.sortByPriority === "HIGH_TO_LOW_PRIORITY") {
      return [
        ...hightPriorityNotes,
        ...mediumtPriorityNotes,
        ...lowPriorityNotes,
      ];
    } else if (filter.sortByPriority === "LOW_TO_HIGH_PRIORITY") {
      return [
        ...lowPriorityNotes,
        ...mediumtPriorityNotes,
        ...hightPriorityNotes,
      ];
    } else {
      return notes;
    }
  };

  const sortNotesBy = (filter, notes) => {
    let newData = [...notes];
    if (filter.sortBy === "OLDEST_FIRST") {
      return newData.sort((a, b) => a.noteCreatedAt - b.noteCreatedAt);
    } else if (filter.sortBy === "NEWEST_FIRST") {
      return newData.sort((a, b) => b.noteCreatedAt - a.noteCreatedAt);
    } else {
      return notes;
    }
  };

  const sortNotesPriority = sortNotesByPriority(filters, notes);
  const sortNotes = sortNotesBy(filters, sortNotesPriority);
  return (
    <main className="page-container">
      <SideNavbar />
      <section className="component-section">
        <CreateNote />

        <div>
          {sortNotes.length === 0 ? (
            <div>No Notes yet</div>
          ) : (
            sortNotes.map((note) => <DisplayNote key={note._id} note={note} />)
          )}
        </div>

        {isEdit && <EditNote />}
      </section>
      <Filter />
    </main>
  );
};

export { HomePage };
