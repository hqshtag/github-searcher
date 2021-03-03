import { act } from "react-dom/test-utils";
import { CLEAR_RESULTS, LOADNEXT, SEARCH, SearchActionTypes, SearchState, SEARCH_FAILURE, SEARCH_SUCCESS, UPDATE_SEARCH_RESULTS } from "./types";


const initialState: SearchState = {
  loading: false,
  result: undefined,
  errors: []
}


const reducer = (state = initialState, action: SearchActionTypes): SearchState => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        loading: true
      }
    case LOADNEXT:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        result: action.payload,
        loading: false
      }

    case SEARCH_SUCCESS: //return data to result array[]
      return {
        ...state,
        result: action.payload.items,
        loading: false
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false
      }
    case CLEAR_RESULTS:
      return {
        ...state,
        result: undefined,
      }
    default:
      return state
  }
}

export default reducer;