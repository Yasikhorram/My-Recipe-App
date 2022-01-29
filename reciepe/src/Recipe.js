const Recipe = ({ title, image, ingred }) => {
  return (
    <div className="wrapper">
      <div className="card">
        <img className="card-img" src={image} alt={title} />

        <div className="card-body">
          <h1 className="title">{title}</h1>
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
