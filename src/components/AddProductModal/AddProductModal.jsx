import React, { useRef, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddProductModal.css";
import closeIcon from "../../assets/close-icon.svg";

function AddProductModal({ isOpen, onClose, onAddProduct, handleCloseClick }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleImageClick = (event) => {
    event.stopPropagation();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setPreview(null);
    fileInputRef.current.value = null;
  };

  return (
    <ModalWithForm
      title="Add New Product"
      isOpen={isOpen}
      handleCloseClick={handleCloseClick}
      onSubmit={onAddProduct}
      buttonText="Add Product"
    >
      <div className="modal__label">
        Product Image
        <div className="modal__image-placeholder" onClick={handleImageClick}>
          {preview ? (
            <div className="modal__image-preview">
              <img
                src={preview}
                alt="Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                  display: "flex",
                }}
              />
              <button
                type="button"
                className="modal__remove-image-button"
                onClick={handleRemoveImage}
              >
                <img
                  className="modal__remove-image-icon"
                  src={closeIcon}
                  alt="Remove"
                />
              </button>
            </div>
          ) : (
            <span className="modal__image-placeholder-text">
              Click to upload
            </span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
      <label htmlFor="title" className="modal__label">
        Product Title
        <input
          className="modal__input"
          type="text"
          name="title"
          placeholder="Name of the product"
          required
        />
      </label>
      <label htmlFor="description" className="modal__label">
        Product Description
        <input
          className="modal__input"
          type="text"
          name="description"
          placeholder="Product Description"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default AddProductModal;
