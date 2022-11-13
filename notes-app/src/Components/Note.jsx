import './Note.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Note({ id, text, date, deleteNote }) {
  return (
    <div className="note">
      <div className="noteHeader">
        <div className="noteDate">
          {date}
        </div>
        <div className="deleteNote" onClick={() => deleteNote(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <div className="noteText">
        {text} (#{id + 1})
      </div>

    </div>
  );
}
export default Note;