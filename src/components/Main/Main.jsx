import React, { useState } from "react";
import Product from "../Product/Product";

import "./Main.css";

const PRODUCTS_PER_PAGE = 8;

function Main({ handleAddProductClick, filteredProducts }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIdx = startIdx + PRODUCTS_PER_PAGE;
  const productsToShow = filteredProducts.slice(startIdx, endIdx);

  return (
    <div className="main">
      <div className="main__header">
        <p className="main__title">Products list</p>
        <button
          className="main__add-product-button"
          onClick={handleAddProductClick}
        >
          + Add Product
        </button>
      </div>

      <ul className="main__products">
        {productsToShow.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>

      <div className="main__pagination">
        <button
          className="main__pagination-button"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt; Prev
        </button>
        <span className="main__pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="main__pagination-button"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default Main;
