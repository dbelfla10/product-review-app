import Product from "../Product/Product";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <h2 className="main__title">Most Popular Products</h2>
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
