import { SEARCH, SearchActionTypes, SearchState, SearchTypes, SEARCH_FAILURE, SEARCH_SUCCESS } from "./types";


const initialState: SearchState = {
  text: "hqshtag",
  type: SearchTypes.users,
  loading: false,
  errors: []
}


const reducer = (state = initialState, action: SearchActionTypes) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        loading: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export default reducer;