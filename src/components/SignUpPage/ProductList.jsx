// react libraries
import React from "react";

/**
 * @desc renders list of products to chose from
 */
const ProductList = () => {
  const handleClick = (evt) => {
    const Cat = evt.target.className;

    let clickEd = {};
    console.log(evt.target.className.value);
  };
  return (
    <div className="product-list-page">
      <div className="card-header">
        <h4 className="card-title">What products do you offer?</h4>
        <p className="card-text">Select all that applies</p>
      </div>
      <div className="card-body">
        <label
          className="product-item"
          htmlFor="hand-sanitizer"
          onClick={(evt) => handleClick(evt)}
        >
          <span className="category">Hand Sanitizer</span>
          <span className="sub-category">Sanitizer</span>;
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
