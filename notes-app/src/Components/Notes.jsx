import { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import './Notes.css';

function Notes() {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = () => {
    setNotes((prevState) => [
      ...prevState,
        {
            text: 'Example note',
            date: new Date().toLocaleString()
        }
    ]);
  };

  return (
    <>
    <div className="notesForm">
      <AddNote addNoteHandler={addNoteHandler}/>
    </div>
    <div className="notes">
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index + 1}
          text={note.text}
          date={note.date}
        />
      ))}
    </div>
    </>
  );
}

export default Notes;