import React, { Component } from 'react'

const users=(props)=> {
    return (
      <div className="App">
      <h3>User List</h3>
        {props.data.map((item,i)=>
            <ul key={i}>
                <li>{item.name}</li>
                <li>{item.age}</li>
                <li>{item.mobile}</li>
                <button onClick={e=>props.onEdit(item,i)}>Edit</button>
                <button onClick={e=>props.onDelete(i)}>Delete</button>
            </ul>    
         )}
      </div>
    )
}

export default users
