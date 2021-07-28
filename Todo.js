import React from 'react'
import {Checked} from "./Checked";

export const Todo=(props)=> {
    let myStyle = {
        minHeight: "70vh",
        margin : "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-4">Todo List</h3>
            {props.todo.length===0? "No todos to display":
            props.todo.map((todo)=>{
                return (<Checked todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })
            }
            
        </div>
    )
}
