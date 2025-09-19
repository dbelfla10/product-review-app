import { useParams } from "react-router-dom";
import productImg from "../../assets/product-placeholder.jpg";
import star from "../../assets/star-icon.svg";
import "./ProductDetails.css";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <div className="product-details">
        <button
          className="product-details__back-button"
          onClick={() => window.history.back()}
        >
          &lt; Back
        </button>
        <img
          className="product-details__image"
          src={productImg}
          alt={product.title}
        />
        <div className="product-details__info">
          <h2 className="product-details__title">{product.title}</h2>
          <p className="product-details__brand">{product.brand}</p>
          <div className="product-details__rating">
            {Array.from({ length: product.avgRating }).map((_, index) => (
              <img
                key={index}
                src={star}
                alt="Star"
                style={{ width: 24, height: 24, marginRight: 4 }}
              />
            ))}
          </div>
          <p className="product-details__description">{product.description}</p>
        </div>
      </div>
      <div className="product-details__reviews">
        <h3 className="product-details__reviews-title">Reviews</h3>
        <button className="product-details__add-review-button">
          + Add Review
        </button>
        {product.reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul className="product-details__review-list">
            {product.reviews.map((review, idx) => (
              <li key={idx}>
                <div>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <img
                      key={index}
                      src={star}
                      alt="Star"
                      style={{ width: 16, height: 16, marginRight: 4 }}
                    />
                  ))}
                </div>
                <div>{review.text}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
