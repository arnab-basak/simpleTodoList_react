import React, {Component} from 'react';
import ToDoElement from './ToDoElement/ToDoElement'
import './ToDo.css';

//class based stateful component
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoInput: '',
      toDoList: [{
        done: false,
        value: 'test1'
      },{
        done: false,
        value: 'test2'
      },
      {
        done: true,
        value: 'test3'
      }]
    };
  }

  // Adds an element to the list of ToDo
  addAToDoElement (event, self) {
    const tempState = {...self.state}; // copying to: not to modify original state
    if (tempState.toDoInput.length === 0) {
      return;
    }
    const toDoObject = {  // Object to be pushed
      done: false,
      value: tempState.toDoInput
    };
    tempState.toDoList.push(toDoObject);
    tempState.toDoInput = '';
    document.getElementById('input').value = '';
    self.setState(tempState);
  }

  //sets the value of input to state
  setToDoInput (event) {
    let value = event.target.value;
    this.setState({toDoInput: value});
  }

  //deletes a todo item
  deleteToDoItem (index) {
    const tempState = {...this.state};  
    tempState.toDoList.splice(index, 1);
    this.setState(tempState);
  }

  //toggles the state for the element
  toggleCheckBox(index) {
    const tempState = {...this.state};  
    tempState.toDoList[index].done = !tempState.toDoList[index].done;
    this.setState(tempState);
  }

  render () {
    return (
      <div>
        <div className="center">
          <h3>To do list</h3>
          <input type="text" id="input" className="newTodoText" 
             onChange={this.setToDoInput.bind(this)} 
             value={this.state.toDoInput}
             placeholder="Jot down something..." >
          </input>
          <button className="addItem"
            onClick={ (event) => this.addAToDoElement(event, this)}>Add</button>
        </div>
        <ToDoElement list={this.state.toDoList} 
          checkClick={this.toggleCheckBox.bind(this)}
          click={this.deleteToDoItem.bind(this)}></ToDoElement>
      </div>
    );
  }
}
export default ToDo;