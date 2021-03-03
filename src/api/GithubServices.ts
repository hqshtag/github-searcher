import axios from "axios";
import { SearchTDO } from "../features/search/types";
import { GithubErrorResponse, GithubResponseObject } from "./GithubTypes";


export const SearchGithubAPI = async (data: SearchTDO, page = 1, per_page = 42): Promise<GithubResponseObject | GithubErrorResponse> => {
  console.log(data);
  return await (await axios.get(`https://api.github.com/search/${data.type}?q=${data.keyword}&page=${page}&per_page=${per_page}`)).data;
}

