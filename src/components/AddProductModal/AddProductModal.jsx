import ModalWithForm from "../ModalWithForm/ModalWithForm";

function AddProductModal({ isOpen, onClose, onAddProduct, handleCloseClick }) {
  return (
    <ModalWithForm
      title="Add New Product"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={onAddProduct}
      buttonText="Add Product"
    >
      {/* Form fields go here */}
    </ModalWithForm>
  );
}

export default AddProductModal;
