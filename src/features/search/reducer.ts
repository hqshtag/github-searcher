import { act } from "react-dom/test-utils";
import { RESULTS_PER_PAGE } from "../../api/GithubTypes";
import { CLEAR_RESULTS, LOADNEXT, SEARCH, SearchActionTypes, SearchState, SEARCH_FAILURE, SEARCH_SUCCESS, UPDATE_SEARCH_RESULTS } from "./types";


const initialState: SearchState = {
  loading: false,
  result: {
    data: [],
    count: 0,
    hasMore: false
  },
  page: 1,
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
      let prevPageNumber = state.page;
      return {
        ...state,
        page: prevPageNumber + 1,
        loading: true,
      }
    case UPDATE_SEARCH_RESULTS:
      let prevResult = state.result;
      let prevData = state.result.data;
      return {
        ...state,
        result: {
          ...prevResult,
          data: [...prevData, ...action.payload.items]
        },
        loading: false
      }

    case SEARCH_SUCCESS: //return data to result array[]
      let hasMore = action.payload.total_count > (RESULTS_PER_PAGE * state.page);
      return {
        ...state,
        result: {
          data: action.payload.items,
          count: action.payload.total_count,
          hasMore: hasMore,
        },
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
        result: {
          data: [],
          count: 0,
          hasMore: false
        },
        page: 1
      }
    default:
      return state
  }
}

export default reducer;