import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import AppBarExampleIcon from './UI/AppBar';

class App extends Component {

  render() {
    return (
      <div>
        <AppBarExampleIcon />
            <div className = 'row justify-content-center align-items-center inputBox'>
              <div className = 'col offset-4'>
                <input type='text' onKeyPress={(event) => this.props.addTask(event)} 
                                   className='form-control box' 
                                   placeholder='Enter the task' />  
              </div>
            </div>
            <br />            
          <List className='list' taskLists={this.props.tL} deleteTask={(event)=> this.props.deleteTask(event)}/>
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
    addTask: (event) => { dispatch({ type: actionTypes.ADDTASK, value: event.target.value, eventValue:event }) },
    deleteTask: (event) => { dispatch({ type: actionTypes.DELETETASK, value: event.target.dataset.value }) },
    getTask: (event) => { dispatch({ type: actionTypes.GETTASK, value: event.target.value }) },
    //submitTask: (event) => { dispatch({ type: actionTypes.SUBMITTASK, value: event }) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
