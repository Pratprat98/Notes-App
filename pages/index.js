import React, { useState } from 'react'

const index = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (e) => {
    if(e.target.name === 'title') setTitle(e.target.value)
  }
  const handleContentChange = (e) => {
    if(e.target.name === 'content') setContent(e.target.value)
  }

  const addNotes = () => {
    setNotes([...notes, {title, content}])
    setTitle('')
    setContent('')
  }

  const deleteNotes = (e) => {
    const noteToDelete = e.target.parentElement
    setNotes(notes.filter(note => note !== noteToDelete))
  }


  return (
    <>
    <header>
        <h1>Notes App</h1>
    </header>
    <main>
        <div className="note-container">
            <div className="note">
                <label className='title' htmlFor="title">Title:</label>
                <input onChange={handleTitleChange} type="text" name='title' id='title' value={title} placeholder='Title goes here'/>
                <textarea onChange={handleContentChange} className='textarea' name="content" id="content" value={content} cols="27" rows="10"></textarea>
                <button onChange={deleteNotes} className="delete-button">Delete</button>
            </div>
        </div>
        {notes.map((items)=>{return(<div className='note-container'>
          <div className='note'>
          <h4 className='content'>{items.title}</h4>
          <p className='content'>{items.content}</p>
          </div>
        </div>)})}
        <button onClick={addNotes} id="add-note-button">Add Note</button>
    </main>
    </>
  )
}

export default index
