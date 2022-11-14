import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faWindowClose } from '@fortawesome/free-solid-svg-icons'

function Note({ id, title, text, date, deleteNote, closeNote, openModal, modalIsOpen }) {
  return (
    <div className="note">
      <div className="noteHeader">
        <div className="noteDate">
          {date}
        </div>
        {
        modalIsOpen == false ? ( 
          <div className="deleteNote" onClick={() => deleteNote(id)}>
          <FontAwesomeIcon icon={faTrash} />
          </div>
        ) : ( 
          <div className="closeNote" onClick={() => closeNote()}>
          <FontAwesomeIcon icon={faWindowClose} />
          </div>
        ) }
        
      </div>
      <div className="noteBody" onClick={ () => modalIsOpen == false ? openModal(id) : closeNote() }>
        <div className="noteTitle">
          {title}
        </div>
        <div className="noteText">
          {text} (#{id + 1})
        </div>
      </div>
    </div>
  );
}
export default Note;