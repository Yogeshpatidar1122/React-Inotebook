import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  
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
        "_id": "6433b3746aec47c64eb5fcdfh",
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
  const addNote=()=>{
    
  }

  // delete notes
  const deleteNote=()=>{

  }

  // edit notes
  const editNote=()=>{

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