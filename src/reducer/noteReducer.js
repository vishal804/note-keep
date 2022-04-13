const NotesReducer = (noteState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return {
        ...noteState,
        notes: payload,
      };

    case "SHOW_EDIT_BOX":
      return {
        ...noteState,
        isEdit: payload,
      };

    case "EDIT_NOTE":
      return {
        ...noteState,
        editItem: payload,
      };

    default:
      return noteState;
  }
};

export { NotesReducer };
