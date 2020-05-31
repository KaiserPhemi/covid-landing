// react libraries
import React, { forwardRef } from "react";
import PropTypes from "prop-types";

/**
 * @desc renders each listed product item
 * @param {object} props
 */
const ProductListItem = ({
  category,
  subCategory,
  handleClick,
  itemId,
  checkActive,
}) => {
  return (
    <label
      id={itemId}
      onClick={(evt) => handleClick(evt, itemId)}
      className={`product-item ${checkActive ? "selected-product-item" : ""}`}
    >
      <span className={`category ${checkActive ? "selected-category" : ""}`}>
        {category}
      </span>
      <span className="sub-category">{subCategory}</span>
    </label>
  );
};

// type checking
ProductListItem.propTypes = {
  categoryActive: PropTypes.string,
  category: PropTypes.string.isRequired,
  itemActive: PropTypes.string,
  subCategory: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default ProductListItem;
