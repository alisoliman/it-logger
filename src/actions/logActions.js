import {ADD_LOG, GET_LOGS, LOGS_ERROR, SET_LOADING} from "./types";

// Add a new log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        })
    }
};

// Get Logs from the server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: LOGS_ERROR,
            payload: e.response.data
        })
    }
};

// Set loading to true
export const setLoading = () => {
    return {type: SET_LOADING};
};