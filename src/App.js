import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { todoList, sentence, editMode } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Todo App</h1>
            <input type="text" onChange={this.props.ChangeInput} value={sentence} />
            {!editMode && <button onClick={this.props.AddToList}>Add to list</button>}
            {editMode && <button onClick={this.props.UpdateList}>Update list</button>}
            <br /><br />
            <table border="2">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                {todoList.map((val, index) => {
                  return <tr>
                    <td>{val}</td>
                    <td onClick={() => this.props.Edit(index)}>Edit</td>
                    <td onClick={() => this.props.Delete(val)}>Delete</td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sentence: state.sentence,
    todoList: state.todoList,
    editMode: state.editMode
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeInput: (e) => dispatch({ type: "INPUTCHANGE", value: e.target.value }),
    AddToList: () => dispatch({ type: "ADD" }),
    Delete: (val) => dispatch({ type: "DELETE", value: val }),
    Edit: (val) => dispatch({ type: "EDIT", value: val }),
    UpdateList: () => dispatch({ type: "UPDATE" })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);