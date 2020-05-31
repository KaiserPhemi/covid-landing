// react libraries
import React from "react";
import PropTypes from "prop-types";

/**
 * @desc renders each listed product item
 * @param {object} props
 */
const ProductListItem = ({
  category,
  subCategory,
  index,
  handleClick,
  checkActive,
}) => {
  return (
    <label
      id={`item-${index + 1}`}
      onClick={(evt) => handleClick(evt, index)}
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
};

export default ProductListItem;
