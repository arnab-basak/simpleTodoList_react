import React from 'react';

// function based component and stateless
const ToDoElement = (props) => {
  const doneCss = {
    textDecoration: 'line-through'
  };
  const listJSX = props.list.map((listItem, index) => {
    return ( 
      <div key={index}>
        <input type="checkbox" onClick={() => props.checkClick(index)}></input>
        <span style={listItem.done ? doneCss : null}>{listItem.value}</span>
        <button onClick={()=>props.click(index)}>x</button>
      </div>
    )
  })
  return (
    listJSX
  );
}

export default ToDoElement;