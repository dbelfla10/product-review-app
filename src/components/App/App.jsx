import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddProductModal from "../AddProductModal/AddProductModal";
import { useState } from "react";
import { defaultProducts } from "../../utils/constants";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [search, setSearch] = useState("");

  const filteredProducts = defaultProducts.filter(
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
    <>
      <div className="page">
        <div className="page__content">
          <Header search={search} setSearch={setSearch} />
          <div className="page__container">
            <Main
              handleAddProductClick={handleAddProductClick}
              filteredProducts={filteredProducts}
            />
          </div>
          <Footer />
        </div>
        <AddProductModal
          isOpen={activeModal === "addProduct"}
          handleCloseClick={closeActiveModal}
        />
      </div>
    </>
  );
}

export default App;
