import React from 'react'

const index = () => {
 console.log("Hello from index.js");
  return (
    <>
    <header>
        <h1>Notes App</h1>
    </header>
    <main>
        <div className="note-container">
            <div className="note">
                <h2>Note Title</h2>
                <p>This is the content of the note. You can write your notes here.</p>
                <button className="delete-button">Delete</button>
            </div>
    
        </div>
        <button id="add-note-button">Add Note</button>
    </main>
    </>
  )
}

export default index
