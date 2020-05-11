import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/productsActions";
import closeIcon from "../assets/images/x-circle.svg";

const SummaryItem = ({
  selectedProducts,
  summary,
  summaryObj,
  removeProduct
}) => {
  return (
    <>
      {selectedProducts.map((product, index) => {
        if (summary === "images") {
          // {
          //   /* no id is present to provide key */
          // }

          return (
            <td key={index}>
              <img
                className="close-icon"
                src={closeIcon}
                alt="close"
                onClick={() => removeProduct(product)}
              />
              <img
                className="product-image"
                src={summaryObj[product]}
                alt="placeholder"
              />
            </td>
          );
        } else {
          return (
            <td>
              {Object.keys(summaryObj[product]).map((value, index) => {
                return (
                  <span
                    key={index}
                    className={`${value === "price" ? "price" : ""} ${
                      value === "totalDiscount" ? "discount" : ""
                    }`}
                  >{`${summaryObj[product][value] || ""} ${
                    value === "totalDiscount" ? "% off" : ""
                  }`}</span>
                );
              })}
            </td>
          );
        }
      })}
    </>
  );
};

const mapStateToProps = store => ({
  selectedProducts: store.products.selectedProducts
});

const mapDispatchToProps = dispatch => ({
  removeProduct: product => dispatch(removeProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryItem);
