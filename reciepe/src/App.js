import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import logo from "./logo.png";

const App = () => {
  const APP_ID = "6007d3b9";
  const APP_KEY = "7ba8f81641d53bafda49b712b25c2738";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("persian");

  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    console.log("----", data.hits);
    setRecipes(data.hits);
  };
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <nav
        className="navbar  navbar-light"
        style={{ backgroundColor: "white" }}
      >
        <div class="container-fluid">
          <img className="logo" src={logo} />
          <a class="navbar-brand" href="#"></a>

          <form class="d-flex" onSubmit={getSearch}>
            <input
              class="form-control me-2"
              type="search"
              value={search}
              aria-label="Search"
              onChange={changeHandler}
            />
            <button class="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="wrapper">
        {recipes.map((food) => (
          <Recipe
            key={food.recipe.label}
            title={food.recipe.label}
            image={food.recipe.image}
            ingred={food.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
