import React from 'react';
import './List.css';

const list = (props) => {
    //console.log(props.taskLists[0]);
    return (
        <div className='center'>
                {props.taskLists.map(taskList => (
                    <ul key={taskList} className = 'list-group list-group-flush'>
                        <li data-value={taskList} className = 'list-group-item' onClick={(event) => props.deleteTask(event)}>{taskList}</li>
                    </ul>
                ))}
        </div>
    )
}

export default list;