import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import AddProductModal from "../AddProductModal/AddProductModal";
import { useState } from "react";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

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
          <Header />
          <div className="page__container">
            <Main handleAddProductClick={handleAddProductClick} />
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
