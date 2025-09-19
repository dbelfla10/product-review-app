import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddProductModal from "../AddProductModal/AddProductModal";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useState } from "react";
import { defaultProducts } from "../../utils/constants";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [search, setSearch] = useState("");

  const productsWithAvgRating = defaultProducts.map((product) => {
    const avgRating =
      product.reviews && product.reviews.length
        ? Math.round(
            product.reviews.reduce((sum, r) => sum + r.rating, 0) /
              product.reviews.length
          )
        : 0;
    return { ...product, avgRating };
  });

  const filteredProducts = productsWithAvgRating.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProductClick = () => {
    setActiveModal("addProduct");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <Header search={search} setSearch={setSearch} />
          <div className="page__container">
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    handleAddProductClick={handleAddProductClick}
                    filteredProducts={filteredProducts}
                  />
                }
              />
              <Route
                path="/product/:id"
                element={<ProductDetails products={filteredProducts} />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
        <AddProductModal
          isOpen={activeModal === "addProduct"}
          handleCloseClick={closeActiveModal}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
