import "./App.css";
import { useState } from "react";

import Results from "../results";
import Search from "../search";


async function getResults(input){
  let splitInput = input.split(" ")
  let joinInput = splitInput.join("%20")

  let pageSize = 10;
  let pageNumber = 1;
  
  let response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${joinInput}&pageNumber=${pageNumber}&pageSize=${pageSize}&autoCorrect=true`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd38992f78fmsha11458814865188p18480ajsn7b0590d0c680',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  })

  let data = await response.json()

  return data;
}

function App() {
  const [searchResults, setSearchResults] = useState({})
  const [inputValue, setInputValue] = useState("")
  
  function handleClick(){
    // call api with inputValue
    // update search results
    setSearchResults(getResults(inputValue))
    console.log("searchResult:", searchResults)
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <Search handleChange={(e)=>handleChange(e)} handleClick={handleClick}/> // check this
      <Results searchResults={searchResults} />
    </div>
  );
}

export default App;
