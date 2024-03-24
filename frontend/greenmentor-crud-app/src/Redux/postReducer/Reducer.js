import {
  DELETE_REQUEST_SUCCESS,
  GET_REQUEST_SUCCESS,
  TASK_REQUEST,
  TASK_REQUEST_FAIL,
  POST_REQUEST_SUCCESS,
  UPDATE_REQUEST_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  Task: [],
  isError: false,
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TASK_REQUEST:
      return { ...state, isLoading: true };
    case GET_REQUEST_SUCCESS:
      return { ...state, isLoading: false, Task: payload?.taskList };
    case POST_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case TASK_REQUEST_FAIL:
      return { ...state, isLoading: false, Task: [], isError: true };
    case DELETE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case UPDATE_REQUEST_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
