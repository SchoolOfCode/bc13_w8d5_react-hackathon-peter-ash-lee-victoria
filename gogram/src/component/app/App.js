import "./App.css";
import { useState } from "react";
import Results from "../results";
import Search from "../search";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function getResults(input) {
    let splitInput = input.split(" ");
    let joinInput = splitInput.join("%20");

    let pageSize = 10;
    let pageNumber = 1;

    let response = await fetch(
      `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${joinInput}&pageNumber=${pageNumber}&pageSize=${pageSize}&autoCorrect=true`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d38992f78fmsha11458814865188p18480ajsn7b0590d0c680",
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      }
    );

    let data = await response.json();
    console.log("resultsData:", data.value);
    let results = Object.entries(data.value);
    if (Array.isArray(results)) {
      return results;
    } else {
      console.log("its a object");
    }
    console.log("obj.entries", Object.entries(data.value));

    //return Object.entries(data.value);
  }

  function handleClick() {
    // call api with inputValue
    // update search results
    setSearchResults(getResults(inputValue));
    console.log("search results at handle click", searchResults);
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <Search handleChange={(e) => handleChange(e)} handleClick={handleClick} />
      <Results searchResults={searchResults} />
    </div>
  );
}

export default App;
