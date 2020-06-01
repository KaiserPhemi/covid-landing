// react libraries
import React, { useState } from "react";
import PropTypes from "prop-types";

// utils
import productList from "../../utils/productList";

// components
import ProductListItem from "./ProductListItem";

/**
 * @desc renders list of products to chose from
 */
const ProductList = () => {
  // state
  const [isItemActive, setActive] = useState(false);
  const [activeCategory, setCategory] = useState("");
  const [activeSubCategory, setSubCategory] = useState("");
  const [clickedItemId, setItemId] = useState("");

  /**
   * @desc handles clicking events of items
   * @param {object} evt
   */
  const handleClick = (evt, item) => {
    // still work in progress
    if (evt.currentTarget.id === item) {
      setActive(!isItemActive);
    }
    const productName = [...evt.currentTarget.innerText.split(":")];
    const selectedProduct = {};
    const productList = [];
    setItemId(item);
    const clickHandId = evt.currentTarget.id;
  };

  /**
   * @desc
   */
  return (
    <div className="product-list-page">
      <div className="card-header">
        <h4 className="card-title">What products do you offer?</h4>
        <p className="card-text">Select all that applies</p>
      </div>
      <div className="card-body">
        {productList.map((product, index) => (
          <ProductListItem
            key={index}
            index={index}
            itemId={product.id}
            checkActive={isItemActive}
            category={product.category}
            subCategory={product.subCategory}
            handleClick={handleClick}
            activeCategoryClass={(product.id === clickedItemId)
              ? "selected-product-item"
              : ""}
            activeTextClass={(product.id === clickedItemId)
              ? "selected-category"
              : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
