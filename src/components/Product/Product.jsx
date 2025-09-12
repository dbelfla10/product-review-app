import "./Product.css";
import productImg from "../../assets/product-placeholder.jpg";
import star from "../../assets/star-icon.svg";

function Product({ product }) {
  return (
    <div className="product">
      <img className="product__image" src={productImg} alt={product.title} />
      <div className="product__info">
        <h2 className="product__title">{product.title}</h2>
        <p className="product__brand">{product.brand}</p>
        <div className="product__rating">
          {Array.from({ length: product.rating }).map((_, index) => (
            <img
              key={index}
              src={star}
              alt="Star"
              className="product__star filled"
            />
          ))}
        </div>
        <p className="product__description">{product.description}</p>
      </div>
    </div>
  );
}

export default Product;
