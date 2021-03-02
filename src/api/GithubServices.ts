import axios from "axios";
import { SearchTDO } from "../features/search/types";
import { Github403, GithubResponseObject } from "./GithubTypes";


export const SearchGithubAPI = async (data: SearchTDO): Promise<GithubResponseObject | Github403> => {
  return await axios.get(`https://api.github.com/search/${data.type}?q=${data.text}`)
}

