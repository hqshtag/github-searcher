import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/inputs/Input";
import { Select } from "../../components/inputs/Select";
import { clearResults, setSearchType, thunkSearch } from "../../features/search/actions";
import { SearchTypes } from "../../features/search/types";
import { debounce } from 'lodash';
import { RootState } from "../../features/rootReducer";


export const SearchForm: React.FC = () => {
  const defaultSearchType = useSelector((state: RootState) => state.search.type);

  const [searchText, setSearchText] = useState('');
  const [type, setType] = useState(defaultSearchType);

  const dispatch = useDispatch();
  const searchGithub = () => {
    if (searchText.length >= 3) {
      dispatch(thunkSearch({ text: searchText, type }))
    } else {
      dispatch(clearResults);
    }
  }

  //Since I'm using some external function, I can simply ignore the waring message
  const debouncedSearch = useCallback(debounce(searchGithub, 500), [searchText, type]);  // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    debouncedSearch();

    // Cancel the debounce on useEffect cleanup.
    return debouncedSearch.cancel;
  }, [searchText, type, debouncedSearch])




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
      setType(typeValue);
      //update our type in the store
      dispatch(setSearchType(typeValue));

    } 

  }
  return (
    <form>
      <Input value={searchText} handleChange={handleTextChange} placeholder="Start typing to search.." />
      <Select handleChange={handleDropDownChange} />
    </form>
  );
};
