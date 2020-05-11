import React from "react";
import SubFeature from "./SubFeature";
import { connect } from "react-redux";
import PlaceHolderCells from "../PlaceHolderCells";

const Feature = ({ selectedProducts, feature, index }) => {
  return (
    <>
      <tr className={`main-feature ${index === 0 ? "first" : ""}`}>
        <td>
          <span className="feature-title">{feature.title}</span>
        </td>
        <PlaceHolderCells />
        {selectedProducts.length < 4 ? (
          <td className="no-border-cell"></td>
        ) : (
          ""
        )}
      </tr>
      {/* no id is present to provide key */}
      {feature.features.map((feature, index) => (
        <SubFeature
          key={index}
          feature={feature}
          selectedProducts={selectedProducts}
        />
      ))}
    </>
  );
};

export default Feature;
