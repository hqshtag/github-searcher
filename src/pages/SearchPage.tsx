import React from 'react'
import { SearchForm } from './partials/SearchForm'

interface SearchPageProps {

}

export const SearchPage: React.FC<SearchPageProps> = ({ }) => {
  return (
    <div className="page search-page">
      <SearchForm />

      {/*<SearchResults />*/}
    </div>);
}