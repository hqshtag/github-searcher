import { CLEAR_RESULTS, SEARCH, SearchActionTypes, SearchState, SearchTypes, SEARCH_FAILURE, SEARCH_SUCCESS } from "./types";


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