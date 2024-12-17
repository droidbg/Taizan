import Card from "../components/Card";
import { productList } from "../utils/constants";

const BestSeller = () => {
  const item = "Electronics";

  return (
    <div>
      <div className="bestseller-heading">
        <h1>Taigan Bestsellers</h1>
        <h4> Our most popular products based on sales. Updated frequently</h4>
      </div>
      <div className="bestseller-content">
        <h1>Bestsellers in {item}</h1>
        <div className="products">
          {productList.map((product, index) => {
            return <Card product={product} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
