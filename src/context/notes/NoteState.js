import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host ="http://localhost:5000"
  
  const notesInitial = [
    
      {
        "_id": "6433b35d6aec47c64eb5fcd9",
        "user": "6433b2294a360783be70be38",
        "title": "captain America",
        "description": "hollywood movie",
        "tag": "fiction",
        "date": "2023-04-10T06:57:33.837Z",
        "__v": 0
      },
      {
        "_id": "6433b36a6aec47c64eb5fcdb",
        "user": "6433b2294a360783be70be38",
        "title": "captain America 2",
        "description": "hollywood movie",
        "tag": "fiction",
        "date": "2023-04-10T06:57:46.731Z",
        "__v": 0
      },
      {
        "_id": "6433b3706aec47c64eb5fcdd",
        "user": "6433b2294a360783be70be38",
        "title": "captain America 3",
        "description": "hollywood movie",
        "tag": "fiction",
        "date": "2023-04-10T06:57:52.052Z",
        "__v": 0
      },
      {
        "_id": "6433b3746aec47c64eb5fcdf",
        "user": "6433b2294a360783be70be38",
        "title": "captain America 4",
        "description": "hollywood movie",
        "tag": "fiction",
        "date": "2023-04-10T06:57:56.881Z",
        "__v": 0
      },
      {
        "_id": "6433b3746aec47c64eb5fcdfg",
        "user": "6433b2294a360783be70be38",
        "title": "captain America 4",
        "description": "hollywood movie",
        "tag": "fiction",
        "date": "2023-04-10T06:57:56.881Z",
        "__v": 0
      },
      {
        "_id": "6433b3746aec47c64eb5fcdfhh",
        "user": "6433b2294a360783be70be38",
        "title": "captain America 4",
        "description": "hollywood movie",
        "tag": "fiction",
        "date": "2023-04-10T06:57:56.881Z",
        "__v": 0
      }
    
  ]
  const [notes, setNotes] = useState(notesInitial)

  // add notes 
  const addNote = async (title,description,tag) =>
  {
    console.log("adding a note");
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzM2IyMjk0YTM2MDc4M2JlNzBiZTM4In0sImlhdCI6MTY4MTEwOTgwM30.Vjt2HgJPHJWJcBuArHKffjel7mXY0GQTQ2hMQJdHcHs"
      },
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
   
    
    const note={
      "_id": "6433b3746aec47c64eb5fcdfh",
      "user": "6433b2294a360783be70be38",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-04-10T06:57:56.881Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
    
  }

  // delete notes
  const deleteNote=(id)=>{
    console.log("delete note with id"+ id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }

  // edit notes
  const editNote= async(title,description,tag,id)=>{
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/6433b35d6aec47c64eb5fcd9`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        "auth-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzM2IyMjk0YTM2MDc4M2JlNzBiZTM4In0sImlhdCI6MTY4MTEwOTgwM30.Vjt2HgJPHJWJcBuArHKffjel7mXY0GQTQ2hMQJdHcHs"
      },
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
  

    // logic to edit on client side 
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id==id){
        element.title=title;
        element.description=description;
        element.tag=tag
      }
      
    }

  }

  // get notes
  const getNotes=()=>{

  }

  

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
  }

export default NoteState;