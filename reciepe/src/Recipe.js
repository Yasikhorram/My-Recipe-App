const Recipe = ({ title, image, ingred }) => {
  return (
    <div className="wrapper test">
      <div className="card">
        <img className="card-img" src={image} alt={title} />

        <div className="card-body">
          <h1 className="title">{title}</h1>
          <ul className="card-description">
            {ingred.map((item) => (
              <h6>{item.text}</h6>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
