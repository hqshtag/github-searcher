import axios from "axios";


export const getUsers = async (text: string) => {
  return await axios.get(`https://api.github.com/search/users?q=${text}`);
}


export const getRepos = async (text: string) => {
  return await axios.get(`https://api.github.com/search/repositories?q=${text}`);
}

export const getIssues = async (text: string) => {
  return await axios.get(`https://api.github.com/search/issues?q=${text}`);
}



