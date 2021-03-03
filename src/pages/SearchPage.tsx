import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/rootReducer';
import { clearResults, loadNext, infiniteSearch, initialSearch } from '../features/search/actions';
import { SearchTypes } from '../features/search/types';
import { SearchForm } from './partials/SearchForm'
import { SearchHeader } from './partials/SearchHeader';
import { SearchResults } from './partials/SearchResults';

interface SearchPageProps {

}

export const SearchPage: React.FC<SearchPageProps> = ({ }) => {
  const [keyword, setKeyword] = useState('hqshtag');
  const [type, setType] = useState(SearchTypes.users);


  const dispatch = useDispatch();
  const searchGithub = () => {
    if (keyword.length >= 3) {
      dispatch(initialSearch({ keyword, type, page: 1 }));
    } else {
      dispatch(clearResults());
    }
  }

  //Since I'm using some external function, I can simply ignore the waring message
  const debouncedSearch = useCallback(debounce(searchGithub, 500), [keyword, type]);  // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    debouncedSearch();

    // Cancel the debounce on useEffect cleanup.
    return debouncedSearch.cancel;
  }, [keyword, type, debouncedSearch])






  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    setKeyword(value);

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
    }

  }

  const page = useSelector((state: RootState) => state.search.page);
  const loadNextResults = () => {
    dispatch(loadNext()); //syncin our redux store;
    dispatch(infiniteSearch({ keyword, type, page: page + 1 }))
  }




  return (
    <div className="page search-page">
      <SearchHeader />
      <SearchForm keyword={keyword} handleTextChange={handleTextChange} handleSelectChange={handleDropDownChange} />
      <SearchResults loadNext={loadNextResults} />
    </div>);
}