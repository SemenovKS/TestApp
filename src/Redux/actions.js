import {ADD_TODO,REFRESH_STATE} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload:{
        id: ++nextTodoId,
        content
    }
});
export const refreshState = state => ({
    type: REFRESH_STATE,
    state
})