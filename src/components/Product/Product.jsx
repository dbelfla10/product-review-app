import "./Product.css";
import productImg from "../../assets/product-placeholder.jpg";

function Product({ product }) {
  return (
    <div className="product">
      <img className="product__image" src={productImg} alt={product.title} />
      <div className="product__info">
        <h2 className="product__title">{product.title}</h2>
        <div className="product__rating">{"⭐".repeat(product.rating)}</div>
        <p className="product__description">{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
