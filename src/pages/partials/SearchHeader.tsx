import { ReactComponent } from '*.svg'
import React from 'react'
import logo from "../../logo.png";

export const SearchHeader: React.FC = ({ }) => {
  return (
    <div className="search-header">
      <img src={logo} alt="github logo" />
      <div className="title-wrapper">
        <h3 className="title">Github Searcher</h3>
        <h5 className="subtitle">search users or repositories below</h5>
      </div>
    </div>
  );
}