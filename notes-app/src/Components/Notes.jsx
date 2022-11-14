import { useState } from "react";
import Modal from 'react-modal';
import Note from "./Note";
import AddNote from "./AddNote";
import './Notes.css';

Modal.setAppElement('#root');

function Notes() {
  const [notes, setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalNote, setModalNote] = useState('');

  const addNoteHandler = () => {
    setNotes((prevState) => [
      ...prevState,
        {
            id: noteCounter,
            title: 'Note title',
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

  const openModal = (id) => {
    let note = notes.filter((note) => note.id == id);
    setModalNote(note[0]);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalNote('');
    setModalIsOpen(false);
  }

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
    >
      { modalIsOpen ? (
        <Note
        key={'ModalNote' + modalNote.id}
        id={modalNote.id}
        title={modalNote.title}
        text={modalNote.text}
        date={modalNote.date}
        deleteNote={deleteNote}
        closeNote={closeModal}
        />
      ) : ('')
      }
      
    </Modal>
    <div className="notesForm">
      <AddNote addNoteHandler={addNoteHandler}/>
    </div>
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
          closeNote={closeModal}
          openModal={openModal}
          modalIsOpen={modalIsOpen}
        />
      ))}
    </div>
    </>
  );
}

export default Notes;