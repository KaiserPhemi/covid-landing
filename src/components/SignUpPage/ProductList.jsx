// react libraries
import React from "react";

/**
 * @desc renders list of products to chose from
 */
const ProductList = () => {
  return (
    <div className="product-list-page">
      <div className="card-header">
        <h4 className="card-title">What products do you offer?</h4>
        <p className="card-text">Select all that applies</p>
      </div>
      <div className="card-body">
        <label htmlFor="">
          <input type="checkbox" />
          <p>
            <span></span>
            <span></span>
          </p>
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>
      <div></div>
    </div>
  );
};

export default ProductList;
