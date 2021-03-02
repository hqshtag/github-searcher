import axios from "axios";
import { SearchTDO } from "../features/search/types";
import { GithubErrorResponse, GithubResponseObject } from "./GithubTypes";


export const SearchGithubAPI = async (data: SearchTDO): Promise<GithubResponseObject | GithubErrorResponse> => {
  console.log(data);
  return await (await axios.get(`https://api.github.com/search/${data.type}?q=${data.text}`)).data;
}

