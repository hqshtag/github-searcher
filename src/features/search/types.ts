import {
  GithubResponseObject,
  GithubItemsType,
  GithubErrorResponse,
} from "../../api/GithubTypes";

export interface SearchTDO {
  keyword: string;
  type: SearchTypes;
  page: number;
}

export enum SearchTypes {
  users = "users",
  repositories = "repositories",
  issues = "issues",
}

export interface SearchState {
  loading: Boolean;
  result: SearchResult;
  page: number;
  errors?: [];
}

export interface SearchResult {
  data: [GithubItemsType] | GithubItemsType[];
  count: number;
  hasMore: boolean;
}

export const LOADNEXT = "LOADNEXT";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export interface LoadNextAction {
  type: typeof LOADNEXT;
}

export interface UpdateSearchResultAction {
  type: typeof UPDATE_SEARCH_RESULTS;
  payload: GithubResponseObject;
}

export const SEARCH = "SEARCH";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const CLEAR_RESULTS = "CLEAR_RESULTS";

interface SearchAction {
  type: typeof SEARCH;
}

interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS;
  payload: GithubResponseObject;
}

interface SearchFailureAction {
  type: typeof SEARCH_FAILURE;
  payload: GithubErrorResponse;
}

interface ClearSearchResultAction {
  type: typeof CLEAR_RESULTS;
}

export type SearchActionTypes =
  | SearchAction
  | SearchSuccessAction
  | SearchFailureAction
  | ClearSearchResultAction
  | UpdateSearchResultAction
  | LoadNextAction;
