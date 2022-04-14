import axios from "axios";

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
      setNote({ ...note, title: "", description: "" });
    }
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};
