import React, { Component } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import PrimaryButton from './UI/PrimaryButton';
import AppBarExampleIcon from './UI/AppBar';

class App extends Component {

  render() {
    return (
      <div>
        <AppBarExampleIcon />
          <form className='form'>
            <label> Task  </label>
            <input type='text' onChange={(event) => this.props.addTask(event)} className='task' placeholder='Enter the task' />
            <br />
            <PrimaryButton submitTask={this.props.submitTask}>Add Task</PrimaryButton>
          </form>
          <Dropdown className='dropdown' taskLists={this.props.tL} deleteTask={this.props.deleteTask}
            getSelectedValue={(event) => this.props.getTask(event)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eV: state.eventValue,
    tL: state.taskList,
    dt: state.deletedTask
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTask: (event) => { dispatch({ type: actionTypes.ADDTASK, value: event.target.value }) },
    deleteTask: (event) => { dispatch({ type: actionTypes.DELETETASK, value: event.target.value }) },
    getTask: (event) => { dispatch({ type: actionTypes.GETTASK, value: event.target.value }) },
    submitTask: (event) => { dispatch({ type: actionTypes.SUBMITTASK, value: event }) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
