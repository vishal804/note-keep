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

    case "TRASH_NOTE":
      return {
        ...noteState,
        notesTrash: [...noteState.notesTrash, payload],
      };

    case "ARCHIVE_NOTE":
      return {
        ...noteState,
        notesArchive: payload,
      };

    case "TRASH_ARCHIVE_NOTE":
      return {
        ...noteState,
        notesArchive: payload,
      };
    case "RESTORE_ARCHIVE_NOTE":
      return {
        ...noteState,
        notes: payload.notesData,
        notesArchive: payload.archivedData,
      };

    case "CREATE_LABEL":
      return { ...noteState, labels: [...noteState.labels, payload] };

    case "SORT_BY_PRIORITY":
      return {
        ...noteState,
        filters: { ...noteState.filters, sortByPriority: payload },
      };

    case "SORT_BY":
      return {
        ...noteState,
        filters: { ...noteState.filters, sortBy: payload },
      };

    case "CLEAR_FILTERS":
      return {
        ...noteState,
        filters: {
          sortByPriority: "",
          sortBy: "",
        },
      };

    case "SHOWNAV":
      return {
        ...noteState,
        showNav: payload,
      };

    default:
      return noteState;
  }
};

export { NotesReducer };
