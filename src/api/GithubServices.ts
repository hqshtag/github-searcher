import axios from "axios";
import { SearchTDO } from "../features/search/types";
import { GithubErrorResponse, GithubResponseObject, RESULTS_PER_PAGE } from "./GithubTypes";


export const SearchGithubAPI = async (data: SearchTDO): Promise<GithubResponseObject | GithubErrorResponse> => {
  console.log(data);
  return await (await axios.get(`https://api.github.com/search/${data.type}?q=${data.keyword}&page=${data.page}&per_page=${RESULTS_PER_PAGE}`)).data;
}

