const Recipe = ({ title, calories, image, ingred }) => {
  return (
    <div className="wrapper">
      <div className="card">
        <img className="card-img" src={image} alt={title} />

        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <span className="card-calories">{calories}</span>
          <ul className="card-description">
            {ingred.map((item) => (
              <li>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
