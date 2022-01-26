import { useEffect, useState } from "react";
import Recipe from "./Recipe";

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
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Welcome to MyDelish{" "}
          </a>
          {/* <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  customer
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  contact
                </a>
              </li> */}
          {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              </ul>
              */}

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

      {/* <form className="searchForm" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form> */}

      <div className="recipes">
        {recipes.map((food) => (
          <Recipe
            key={food.recipe.label}
            title={food.recipe.label}
            image={food.recipe.image}
            calories={food.recipe.calories}
            ingred={food.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
