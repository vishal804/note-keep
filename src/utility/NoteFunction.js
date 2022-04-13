import axios from "axios";

export const addToNotesList = async (note, setNote, setNotes, token) => {
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
      setNotes(response.data.notes);
      setNote({ ...note, title: "", description: "" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = async (_id, note, setNote, setNotes, token) => {
  try {
    const response = await axios.post(
      `/api/notes/${_id}`,
      { note: note },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      setNotes(response.data.notes);
      setNote({ ...note, title: "", description: "" });
    }
  } catch (error) {
    console.log(error);
  }
};
