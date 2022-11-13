import { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import './Notes.css';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);

  const addNoteHandler = () => {
    setNotes((prevState) => [
      ...prevState,
        {
            id: noteCounter,
            text: 'Example note',
            date: new Date().toLocaleString('en-US', {
              day: 'numeric',
              year: 'numeric',
              month: 'short',
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric'
          })
        }
    ]);
    setNoteCounter(noteCounter + 1);
  };

  const deleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      const remainingNotes = notes.filter((note) => note.id !== id);
      setNotes(remainingNotes);
    }
  };

  return (
    <>
    <div className="notesForm">
      <AddNote addNoteHandler={addNoteHandler}/>
    </div>
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
    </div>
    </>
  );
}

export default Notes;