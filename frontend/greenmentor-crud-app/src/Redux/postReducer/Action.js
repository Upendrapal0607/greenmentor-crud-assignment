import axios from "axios"

import { DELETE_REQUEST_SUCCESS, GET_REQUEST_SUCCESS, POST_REQUEST_SUCCESS, TASK_REQUEST, TASK_REQUEST_FAIL, UPDATE_REQUEST_SUCCESS } from "./ActionType"
import { taskBashUrl } from "../../url/url.js";

export const getAllTask = () => async dispatch => {
    try {
        dispatch({ type: TASK_REQUEST })
        await axios.get(taskBashUrl).then(res => {
            dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data })
            console.log(res.data);
        }).catch(err => {
            dispatch({ type: TASK_REQUEST_FAIL })
        })
    } catch (error) {
        dispatch({ type: TASK_REQUEST_FAIL })
    }

}
export const updateTask = (id, payload,token="mytoken") => dispatch => {
    const requesttaskBashUrl = `${taskBashUrl}/update/${id}`;
    try {
        dispatch({ type: TASK_REQUEST })
        return axios.patch(requesttaskBashUrl, payload,
            {
                headers: {
                    Authorization: token,
                }
            }).then(res => {
                dispatch({ type: UPDATE_REQUEST_SUCCESS, payload: res.data })
                return res.data
            }).catch(err => {
                dispatch({ type: TASK_REQUEST_FAIL })
            })
    } catch (error) {
        dispatch({ type: TASK_REQUEST_FAIL })
    }
}

export const DeletelProduct = (id,token="mytoken") => dispatch => {

    try {
        dispatch({ type: TASK_REQUEST })
        return axios.delete(`${taskBashUrl}/delete/${id}`, { headers: { Authorization: token } }).then(res => {
            dispatch({ type: DELETE_REQUEST_SUCCESS, payload:res.data })
            return res.data
        }).catch(err => {
            dispatch({ type: TASK_REQUEST_FAIL })
        })
    } catch (error) {
        dispatch({ type: TASK_REQUEST_FAIL })
    }
}
export const AddTask = (payload,token="mytoken") => dispatch => {
    try {

        dispatch({ type: TASK_REQUEST })
        return axios.post(`${taskBashUrl}/addtask`, payload, { headers: { Authorization: token } }).then(res => {
            dispatch({ type: POST_REQUEST_SUCCESS, payload: res.data })
            console.log(res.data);
            return res.data
        }).catch(rrror=>{
            dispatch({ type: TASK_REQUEST_FAIL })
        })
    } catch (error) {
        dispatch({ type: TASK_REQUEST_FAIL })

    }

}