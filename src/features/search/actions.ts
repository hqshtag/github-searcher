import { SearchGithubAPI } from "../../api/GithubServices";
import {
  GithubItemsType,
  GithubResponseObject,
  ReachedOurRateLimit,
} from "../../api/GithubTypes";
import {
  CLEAR_RESULTS,
  LOADNEXT,
  SEARCH,
  SearchActionTypes,
  SearchState,
  SearchTDO,
  SEARCH_FAILURE,
  SEARCH_SUCCESS,
  UPDATE_SEARCH_RESULTS,
} from "./types";
import { ThunkAction } from "redux-thunk";

export const searchInit = (): SearchActionTypes => {
  return {
    type: SEARCH,
  };
};


export const searchSuccess = (res: GithubResponseObject): SearchActionTypes => {
  return {
    type: SEARCH_SUCCESS,
    payload: res,
  };
};

export const searchFailed = (): SearchActionTypes => {
  return {
    type: SEARCH_FAILURE,
  };
};

export const initialSearch = (
  data: SearchTDO
): ThunkAction<void, SearchState, unknown, SearchActionTypes> => async (
  dispatch
) => {
  dispatch(searchInit());
  const result = await SearchGithubAPI(data);
  if (ReachedOurRateLimit(result)) {
      dispatch(searchFailed());
    } else dispatch(searchSuccess(result));
  };


export const loadNext = (): SearchActionTypes => {
  return {
    type: LOADNEXT
  }
}
export const updateSearchResults = (res: [GithubItemsType]): SearchActionTypes => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    payload: res
  }
}


export const clearResults = (): SearchActionTypes => {
  return {
    type: CLEAR_RESULTS,
  };
};
