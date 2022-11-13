import './Note.css';

function Note({ id, text, date }) {
  return (
    <div className="note">
      <div className="noteId">
        #{id}
      </div>
      <div className="noteText">
        {text}
      </div>
      <div className="noteDate">
        {date}
      </div>
    </div>
  );
}
export default Note;