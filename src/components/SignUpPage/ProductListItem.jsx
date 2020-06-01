// react libraries
import React from "react";
import PropTypes from "prop-types";

/**
 * @desc renders each listed product item
 * @param {object} props
 */
const ProductListItem = ({
  activeCategoryClass,
  activeTextClass,
  category,
  subCategory,
  index,
  handleClick,
  checkActive,
  itemId,
}) => {
  return (
    <label
      id={itemId}
      onClick={(evt) => handleClick(evt, itemId)}
      className={`product-item ${activeCategoryClass}`}
    >
      <input type="checkbox" />
      <span className={`category ${activeTextClass}`}>{category}:</span>
      <span className="sub-category">{subCategory}</span>
    </label>
  );
};

// type checking
ProductListItem.propTypes = {
  categoryActive: PropTypes.string,
  category: PropTypes.string.isRequired,
  itemActive: PropTypes.string,
  itemId: PropTypes.string.isRequired,
  subCategory: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default ProductListItem;
