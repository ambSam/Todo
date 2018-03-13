import React from 'react';
import './Dropdown.css';
import SecondaryButton from '../UI/SecondaryButton';

const dropdown = (props) => {
    return (
        <div className='center'>
            <select className='select' onChange={(event)=>props.getSelectedValue(event)}>
                {props.taskLists.map(taskList => (
                    <option key={taskList}>{taskList}</option>
                ))}
            </select>
            <SecondaryButton deleteTask={props.deleteTask} className='button'>Delete Task</SecondaryButton>
        </div>
    )

}

export default dropdown;