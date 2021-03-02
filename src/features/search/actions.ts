import { SEARCH, SearchActionTypes, SearchTDO } from "./types";

export function search(data: SearchTDO): SearchActionTypes {
  return {
    type: SEARCH,
    payload: data
  }
}