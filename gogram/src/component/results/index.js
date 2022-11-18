// create function component
//  set up an array.map which iterates over the array with the results in it (STATE: results)
//  for each one, render a thumbnail component

// <Thumbnail searchResults={searchResults}/>

import Thumbnail from "../thumbnail";

export default function Results({ searchResults }) {
  console.log("thumbnail component", searchResults);
  return searchResults.map((Result, i) => (
    <Thumbnail key={i} url={Result[1].url} thumbnail={Result[1].thumbnail} />
  ));
}
