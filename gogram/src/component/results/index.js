// create function component
//  set up an array.map which iterates over the array with the results in it (STATE: results)
//  for each one, render a thumbnail component

// <Thumbnail searchResults={searchResults}/>

import Thumbnail from "../thumbnail";
import "./results.css"

export default function Results({ searchResults }) {
  return(
    <div className="Results">
   {searchResults.map((Result, i) => (
    <Thumbnail key={i} url={Result.url} thumbnail={Result.thumbnail} />
  ))}
  </div>
  )
}
