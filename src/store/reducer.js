import * as actionTypes from './actions';


const initialState = {
    eventValue: null,
    taskList: [],
    deletedTask: null
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDTASK:
        if(action.eventValue.key === 'Enter')
        {
            console.log('Enter key pressed')
            return {
                ...state,
                taskList:state.taskList.concat(action.value)
            }
        }

        case actionTypes.DELETETASK:
            const updatedTaskList= state.taskList.filter(task=>(
                action.value!==task
            ))
            return {
                ...state,
                taskList: updatedTaskList
            }

        case actionTypes.GETTASK:
            return {
                ...state,
                deletedTask: action.value
            }
            

        default :
            return state
    }
}