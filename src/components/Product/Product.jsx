import "./Product.css";
import productImg from "../../assets/product-placeholder.jpg";

function Product() {
  return (
    <div className="product">
      <img className="product__image" src={productImg} alt="Product" />
      <div className="product__info">
        <h2 className="product__title">Product Title</h2>
        <div className="product__rating">⭐⭐⭐⭐⭐</div>
        <p className="product__description">
          This is a brief description of the product.
        </p>
      </div>
    </div>
  );
}

export default Product;
