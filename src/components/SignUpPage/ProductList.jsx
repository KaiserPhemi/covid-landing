// react libraries
import React, { useState, useRef, forwardRef } from "react";
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

  /**
   * @desc handles clicking events of items
   * @param {object} evt
   */
  const handleClick = (evt, itemId) => {
    const clickHandId = evt.currentTarget.id;
    console.log("Id clicked", clickHandId);
    console.log("Current Id", itemId);

    if (evt.currentTarget.id === itemId) {
      setActive(!isItemActive);
    }
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
        {productList &&
          productList.map((product, index) => (
            <ProductListItem
              key={index}
              checkActive={isItemActive}
              itemId={`item-${index + 1}`}
              category={product.category}
              subCategory={product.subCategory}
              handleClick={handleClick}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
