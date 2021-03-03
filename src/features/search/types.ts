import { type } from "os";
import { GithubResponseObject, GithubItemsType } from "../../api/GithubTypes";

export interface SearchTDO {
  keyword: string
  type: SearchTypes
}

export enum SearchTypes {
  users = "users",
  repositories = "repositories",
  issues = "issues"
}


export interface SearchState {
  loading: Boolean
  result?: [GithubItemsType]
  errors?: []
}


export const LOADNEXT = "LOADNEXT";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export interface LoadNextAction {
  type: typeof LOADNEXT
}

export interface UpdateSearchResultAction {
  type: typeof UPDATE_SEARCH_RESULTS
  payload: [GithubItemsType]
}




export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAILURE = "SEARCH_FAILURE"


export const CLEAR_RESULTS = "CLEAR_RESULTS"



interface SearchAction {
  type: typeof SEARCH,
}



interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS
  payload: GithubResponseObject
}

interface SearchFailureAction {
  type: typeof SEARCH_FAILURE
}


interface ClearSearchResultAction {
  type: typeof CLEAR_RESULTS
}


export type SearchActionTypes = SearchAction | SearchSuccessAction | SearchFailureAction | ClearSearchResultAction | UpdateSearchResultAction | LoadNextAction;