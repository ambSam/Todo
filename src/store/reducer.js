import * as actionTypes from './actions';


const initialState = {
    eventValue: null,
    taskList: [],
    deletedTask: null
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDTASK:
            return {
                ...state,
                eventValue:action.value
            }

        case actionTypes.DELETETASK:
            const updatedTaskList= state.taskList.filter(task=>(
                state.deletedTask!==task
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

        case actionTypes.SUBMITTASK:
            action.value.preventDefault();
            return {
                ...state,
                taskList: state.taskList.concat(state.eventValue)
            }

        default :
            return state
    }
}