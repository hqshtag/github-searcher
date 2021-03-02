import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../../components/inputs/Input";
import { Select } from "../../components/inputs/Select";
import { clearResults, thunkSearch } from "../../features/search/actions";
import { SearchTypes } from "../../features/search/types";

interface SearchFormProps { }

export const SearchForm: React.FC<SearchFormProps> = ({ }) => {
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState(SearchTypes.users);

  const dispatch = useDispatch();
  useEffect(() => {
    if (searchText.length >= 3) {
      dispatch(thunkSearch({ text: searchText, type: searchType }))
    } else {
      dispatch(clearResults);
    }
  }, [searchText, searchType])

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    setSearchText(value);
    
  }
  const handleDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    //value is of type string so we have to check if it's of type SearchTypes
    if (value in SearchTypes) {
      /*
      SearchTypes[value] doesn't work because value is of type string,
      we need to get the value from the SearchTypes them selves, we convert them
      to an array and filter them which returns Array: ['$value']
      */
      let typeValue = Object.values(SearchTypes).filter(e => e === value)[0];
      //typeValue is of type SearchTypes :)
      setSearchType(typeValue);
    } 

  }
  return (
    <form>
      <Input value={searchText} handleChange={handleTextChange} placeholder="Start typing to search.." />
      <Select handleChange={handleDropDownChange} />
    </form>
  );
};
