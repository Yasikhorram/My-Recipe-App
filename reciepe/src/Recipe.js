const Recipe = ({ title, calories, image, ingred }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt={title} />
      <ul>
        {ingred.map((item) => (
          <li>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
