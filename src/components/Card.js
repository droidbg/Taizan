import Stars from "./Stars";

const Card = (props) => {
  const { imageSrc, name, price, rating } = props.product;

  return (
    <div className="card">
      <img src={imageSrc} alt="Product Image" className="product-image" />
      {name}
      <Stars rating={rating} />
      <p> Rs.{price}</p>
    </div>
  );
};
export default Card;
