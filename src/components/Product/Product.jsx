import "./Product.css";
import productImg from "../../assets/product-placeholder.jpg";

function Product() {
  return (
    <div className="product">
      <img className="product__image" src={productImg} alt="Product" />
      <h2 className="product__title">Product Title</h2>
      <p className="product__description">
        This is a brief description of the product.
      </p>
    </div>
  );
}

export default Product;
