import React from "react";
import { SideNavbar } from "../../component";
import { useNote } from "../../context/note-context";

const TrashNotePage = () => {
  const {
    noteState: { notesTrash },
  } = useNote();

  return (
    <>
      <main className="page-container">
        <SideNavbar />
        <section className="component-section">
          {notesTrash.length !== 0 ? (
            notesTrash.map((trash) => (
              <div className="wrapper-container" key={trash._id}>
                <div
                  className="note-container"
                  style={{ backgroundColor: trash.color }}
                >
                  <div className="note-title flex flex-space-between">
                    <p>{trash.title}</p>
                    <p>
                      <i className="fas fa-map-pin"></i>
                    </p>
                  </div>

                  <div className="note-content">
                    <p>{trash.description}</p>
                  </div>

                  <div className="note-function flex flex-space-between">
                    <div className="left-navbar">
                      <div style={{ margin: "1rem", fontSize: "0.9rem" }}>
                        {trash.tag}
                      </div>
                      <div style={{ margin: "1rem", fontSize: "0.9rem" }}>
                        {trash.priority}
                      </div>
                    </div>
                    <div className="right-Navbar"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Nothing inside Trash</div>
          )}
        </section>
      </main>
    </>
  );
};

export { TrashNotePage };
