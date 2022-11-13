function AddNote({ addNoteHandler }) {
  return (
    <button className="addNoteButton" onClick={addNoteHandler}>
        Add Note
    </button>
  );
}

export default AddNote;
