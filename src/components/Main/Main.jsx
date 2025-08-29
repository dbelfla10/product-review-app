import Product from "../Product/Product";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__header">
        <p className="main__title">Products list</p>
        <button className="main__add-product-button">+ Add Product</button>
      </div>

      <div className="main__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default Main;
