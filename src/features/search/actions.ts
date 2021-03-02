import { SearchGithubAPI } from "../../api/GithubServices";
import { GithubResponseObject, ReachedOurRateLimit } from "../../api/GithubTypes";
import { CLEAR_RESULTS, SEARCH, SearchActionTypes, SearchState, SearchTDO, SEARCH_FAILURE, SEARCH_SUCCESS } from "./types";
import { ThunkAction } from 'redux-thunk'




export const searchInit = (): SearchActionTypes => {
  return {
    type: SEARCH
  }
}



export const searchSuccess = (res: GithubResponseObject): SearchActionTypes => {
  return {
    type: SEARCH_SUCCESS,
    payload: res
  }
}


export const searchFailed = (): SearchActionTypes => {
  return {
    type: SEARCH_FAILURE
  }
}


export const thunkSearch = (data: SearchTDO): ThunkAction<void, SearchState, unknown, SearchActionTypes> => async dispatch => {
  {
    dispatch(searchInit());
    const result = await SearchGithubAPI(data);
    if (ReachedOurRateLimit(result)) {
      dispatch(searchFailed())
    } else dispatch(searchSuccess(result))
  }
}


export const clearResults = (): SearchActionTypes => {
  return {
    type: CLEAR_RESULTS
  }
}