import React from "react";
import { connect } from "react-redux";

const PlaceHolderCells = ({ selectedProducts }) => {
  return (
    <>
      {selectedProducts.map((value, index) => (
        <td></td>
      ))}
    </>
  );
};

const mapStateToProps = store => ({
  selectedProducts: store.products.selectedProducts
});

export default connect(mapStateToProps)(PlaceHolderCells);
