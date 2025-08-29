import Product from "../Product/Product";
import { defaultProducts } from "../../utils/constants";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <p className="main__title">Products list</p>
        <button className="main__add-product-button">+ Add Product</button>
      </div>

      <ul className="main__products">
        {defaultProducts.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
