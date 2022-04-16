import React from "react";
import { SideNavbar } from "../../component";
import { useNote } from "../../context/note-context";
import { useAuth } from "../../context/auth-context";
import {
  trashArchiveNote,
  restoreArchiveNote,
} from "../../utility/NoteFunction";

const ArchiveNotePage = () => {
  const {
    noteState: { notesArchive },
    noteDispatch,
  } = useNote();

  const {
    authState: { token },
  } = useAuth();

  return (
    <>
      <main className="page-container">
        <SideNavbar />
        <section className="component-section">
          {notesArchive.length !== 0 ? (
            notesArchive.map((archive) => (
              <div className="wrapper-container" key={archive._id}>
                <div
                  className="note-container"
                  style={{ backgroundColor: archive.color }}
                >
                  <div className="note-title flex flex-space-between">
                    <p>{archive.title}</p>
                    <p>
                      <i className="fas fa-map-pin"></i>
                    </p>
                  </div>

                  <div className="note-content">
                    <p>{archive.description}</p>
                  </div>

                  <div className="note-function flex flex-space-between">
                    <div className="left-navbar">
                      <div style={{ margin: "1rem", fontSize: "0.9rem" }}>
                        {archive.label}
                      </div>
                      <div style={{ margin: "1rem", fontSize: "0.9rem" }}>
                        {archive.priority}
                      </div>
                    </div>
                    <div className="right-Navbar">
                      <i
                        className="icon-style fas fa-trash-restore"
                        onClick={() =>
                          restoreArchiveNote(archive, noteDispatch, token)
                        }
                      ></i>
                      <i
                        className="icon-style fas fa-trash"
                        onClick={() =>
                          trashArchiveNote(archive, noteDispatch, token)
                        }
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Nothing inside archive</div>
          )}
        </section>
      </main>
    </>
  );
};

export { ArchiveNotePage };
