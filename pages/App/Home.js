import React, { useState, useRef } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Note from '../components/Note';
import { FETCH_TODOS, ADD, DESTROY } from '../queries/todos';

function Home() {
  const input = useRef(null);
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');
  const fetchedTodos = useQuery(FETCH_TODOS);
  const [addTodo] = useMutation(ADD);
  const [destroyTodo] = useMutation(DESTROY);

  function setNotesState() {
    setNotes([...notes, { title: noteText, completed: false, id: `${noteText}${Math.random()}` }]);
    setNoteText('');
  }

  function updateNoteText(e) {
    const { value } = e.target;
    setNoteText(value);
  }

  async function addNote() {
    if (noteText === '') return null;
    setNotesState();
    await addTodo({ variables: { title: noteText } });
    fetchedTodos.refetch();
    input.current.focus();
  }

  function handleKeyPress({ key }) {
    if (key === "Enter") {
      setNotesState();
    }
  }

  function deleteNote(id) {
    setNotes([...notes.filter(note => note.id !== id)]);
    destroyTodo({ variables: { id } });
  }

  function renderNotes() {
    return notes.map(({ title, id }) => (
      <Note key={id} title={title} deleteMethod={() => deleteNote(id)} />
    ));
  }

  return (
    <div className="container">
      <div className="header">Todo App</div>
      {renderNotes()}
      <div className="button" onClick={addNote}>+</div>
      <input 
        placeholder="Enter Notes" 
        className="input"
        type="text"
        value={noteText} 
        ref={input}
        onKeyPress={handleKeyPress}
        onChange={updateNoteText}
      />
    </div>
  )
}

export default Home;
