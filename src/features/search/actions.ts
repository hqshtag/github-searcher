import { SearchGithubAPI } from "../../api/GithubServices";
import {
  GithubErrorResponse,
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

export const searchFailed = (err: GithubErrorResponse): SearchActionTypes => {
  return {
    type: SEARCH_FAILURE,
    payload: err,
  };
};

export const initialSearch =
  (
    data: SearchTDO
  ): ThunkAction<void, SearchState, unknown, SearchActionTypes> =>
  async (dispatch) => {
    dispatch(searchInit());
    const result = await SearchGithubAPI(data);
    if (ReachedOurRateLimit(result)) {
      dispatch(searchFailed(result));
    } else dispatch(searchSuccess(result));
  };

export const infiniteSearch =
  (
    data: SearchTDO
  ): ThunkAction<void, SearchState, unknown, SearchActionTypes> =>
  async (dispatch) => {
    const result = await SearchGithubAPI(data);
    if (ReachedOurRateLimit(result)) {
      dispatch(searchFailed(result));
    } else dispatch(updateSearchResults(result));
  };

export const loadNext = (): SearchActionTypes => {
  return {
    type: LOADNEXT,
  };
};
export const updateSearchResults = (
  res: GithubResponseObject
): SearchActionTypes => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    payload: res,
  };
};

export const clearResults = (): SearchActionTypes => {
  return {
    type: CLEAR_RESULTS,
  };
};
