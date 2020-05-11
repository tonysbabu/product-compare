import React from "react";
import { connect } from "react-redux";
import Feature from "./Feature";
import "./styles.scss";

const Features = ({ features, selectedProducts }) => {
  return (
    <>
      {/* no id is present to provide key */}
      {features.map((feature, index) => (
        <Feature
          feature={feature}
          key={index}
          index={index}
          selectedProducts={selectedProducts}
        />
      ))}
    </>
  );
};

const mapStateToProps = store => ({
  selectedProducts: store.products.selectedProducts
});

export default connect(mapStateToProps)(Features);
