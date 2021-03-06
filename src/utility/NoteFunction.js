import axios from "axios";
import { ErrorToast, InfoToast } from "../component";

export const addToNotesList = async (note, setNote, noteDispatch, token) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note: note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
      setNote({
        ...note,
        pinned: false,
        title: "",
        description: "",
        priority: "Low",
        color: "#F7F7F7",
        noteCreatedAt: null,
      });
    }
    InfoToast("Note Created successfully");
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const updateNote = async (editNote, noteState, noteDispatch, token) => {
  try {
    const response = await axios.post(
      `/api/notes/${noteState.editItem._id}`,
      { note: editNote },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
      noteDispatch({ type: "SHOW_EDIT_BOX", payload: !noteState.isEdit });
    }
    InfoToast("Note updated successfully");
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const deleteNote = async (note, noteDispatch, token) => {
  try {
    const response = await axios.delete(`/api/notes/${note._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
      noteDispatch({ type: "TRASH_NOTE", payload: note });
    }
    InfoToast("Note moved to trash");
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const archiveNote = async (note, noteDispatch, token) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note: note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      noteDispatch({ type: "ADD_NOTE", payload: response.data.notes });
      noteDispatch({ type: "ARCHIVE_NOTE", payload: response.data.archives });
    }
    InfoToast("Note moved to archive");
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const trashArchiveNote = async (note, noteDispatch, token) => {
  try {
    const response = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      noteDispatch({
        type: "TRASH_ARCHIVE_NOTE",
        payload: response.data.archives,
      });
    }
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};

export const restoreArchiveNote = async (note, noteDispatch, token) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 200) {
      noteDispatch({
        type: "RESTORE_ARCHIVE_NOTE",
        payload: {
          notesData: response.data.notes,
          archivedData: response.data.archives,
        },
      });
    }
  } catch (error) {
    ErrorToast("seems to be error", error);
  }
};
