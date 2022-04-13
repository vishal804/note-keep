import React from "react";
import "./homePage.css";
import { CreateNote, SideNavbar } from "../../component";

const HomePage = () => {
  return (
    <main class="page-container">
      <SideNavbar />
      <section class="component-section">
        <CreateNote />

        {/* <div>
          {notes.length === 0 ? (
            <div>No Notes yet</div>
          ) : (
            notes.map((note) => <Note note={note} />)
          )}
        </div>

        {edit.isEdit && <EditNote1 />} */}
      </section>
    </main>
  );
};

export { HomePage };
