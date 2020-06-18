import React from 'react';
import './ToDoElement.css'

// function based component and stateless
const ToDoElement = (props) => {
  const doneCss = {
    textDecoration: 'line-through'
  };
  const listJSX = props.list.map((listItem, index) => {
    return ( 
      <div className="elementDiv" key={index}>
        <input className="elementCheckBox" 
           type="checkbox" 
           checked={listItem.done}
           onChange={() => props.checkClick(index)}></input>
        <span className="elementText" style={listItem.done ? doneCss : null}>{listItem.value}</span>
        <button className="elementDelete" onClick={() => props.click(index)}>x</button>
      </div>
    )
  })
  return (
    listJSX
  );
}

export default ToDoElement;