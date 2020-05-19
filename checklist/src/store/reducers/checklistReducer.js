import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, CLEAR_COMPLETED, EDIT_TASK } from "../actions/checklistActions"

export const initialState = {
    checklist: []
}

export const checklistReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                checklist: [
                    ...state.checklist,
                    {
                        id: randomId(),
                        task: action.payload,
                        completed: false
                    }
                ]
            }

        case CLEAR_COMPLETED:
            return {
                ...state,
                checklist: state.checklist.filter(task => !task.completed)
            }

        case TOGGLE_TASK:
            return {
                ...state,
                checklist: state.checklist.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task)
            }

        case DELETE_TASK:
            return {
                ...state,
                checklist: state.checklist.filter(task => task.id !== action.payload)
            }

        case EDIT_TASK:
            return {
                ...state,
                checklist: state.checklist.map(task => task.id === action.payload.id ? {...task, task: action.payload} : task)
            }


        default:
            return state
    }
}

function randomId(){
    return Math.floor(Math.random() * 10000000000000)
}