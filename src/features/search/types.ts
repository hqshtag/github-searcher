import { GithubResponseObject } from "../../api/GithubTypes";

export interface SearchTDO {
  text: string
  type: SearchTypes
}

export enum SearchTypes {
  "users",
  "repos",
  "issues"
}

export interface SearchState {
  text: string
  type: SearchTypes
  loading: Boolean
  errors: []
}





export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAILURE = "SEARCH_FAILURE"


interface SearchAction {
  type: typeof SEARCH,
  payload: SearchTDO
}



interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS
  payload: GithubResponseObject
}

interface SearchFailureAction {
  type: typeof SEARCH_FAILURE
}


export type SearchActionTypes = SearchAction | SearchSuccessAction | SearchFailureAction;