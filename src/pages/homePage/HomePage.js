import React from "react";
import "./homePage.css";
import { useNote } from "../../context/note-context";
import { CreateNote, DisplayNote, EditNote, SideNavbar } from "../../component";

const HomePage = () => {
  const {
    noteState: { notes, isEdit },
  } = useNote();

  return (
    <main className="page-container">
      <SideNavbar />
      <section className="component-section">
        <CreateNote />

        <div>
          {notes.length === 0 ? (
            <div>No Notes yet</div>
          ) : (
            notes.map((note) => <DisplayNote key={note._id} note={note} />)
          )}
        </div>

        {isEdit && <EditNote />}
      </section>
    </main>
  );
};

export { HomePage };
