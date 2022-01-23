import { useEffect, useState } from "react";

const App = () => {
  const APP_ID = "6007d3b9";
  const APP_KEY = "7ba8f81641d53bafda49b712b25c2738";
  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="searchForm">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
