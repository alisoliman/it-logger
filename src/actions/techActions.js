import {ADD_TECH, DELETE_TECH, GET_TECHS, SET_LOADING, TECHS_ERROR} from "./types";

// Get Techs from the server
export const getTechs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs');
        const data = await res.json();
        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        })
    }
};

// Delete Tech from the server
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        })
    }
};

// Add Technician to Server
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (e) {
        dispatch({
            type: TECHS_ERROR,
            payload: e.response.statusText
        })
    }
};


// Set loading to true
export const setLoading = () => {
    return {type: SET_LOADING};
};