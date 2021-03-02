import { GithubResponseObject, GithubResponseObjectItemsType } from "../../api/GithubTypes";

export interface SearchTDO {
  text: string
  type: SearchTypes
}

export enum SearchTypes {
  users = "users",
  repositories = "repositories",
  issues = "issues"
}


export interface SearchState {
  loading: Boolean
  result: [GithubResponseObjectItemsType] | undefined
  errors: []
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


export type SearchActionTypes = SearchAction | SearchSuccessAction | SearchFailureAction | ClearSearchResultAction;