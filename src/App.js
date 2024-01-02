
import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes,setNotes] = useState([]);
const [searchText,setSearchText] = useState("");
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  };

  const deletNode = (id) => {
   const newNotes = notes.filter((note)=> note.id !== id);
   setNotes(newNotes);
  }

  return(
    <div className="container">
      <Header/>
      <Search handleSearchNote = {setSearchText} />
      <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleText={addNote} handleDeleteNote = {deletNode}  />
    </div>
  )
}

export default App;
