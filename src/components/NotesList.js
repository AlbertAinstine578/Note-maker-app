import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({notes,handleText,handleDeleteNote}) => {
    return(
        <div className="notes-list">
            {notes.map((note) => <Note id={note.id} text = {note.text} date = {note.date} handleDeleteNote = {handleDeleteNote} />)}
            <AddNote handleText={handleText}  />
        </div>
    )
}

export default NotesList;