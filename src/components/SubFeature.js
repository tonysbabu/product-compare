import React from "react";
import PlaceHolderCells from "./PlaceHolderCells";
import { connect } from "react-redux";

const SubFeature = ({ selectedProducts, feature, showOnlyDifferences }) => {
  return (
    <>
      <tr>
        <td>
          <span className="subfeature-title">{feature.featureName}</span>
        </td>
        {showOnlyDifferences ? (
          feature.properties ? (
            feature.properties.isDifferent ? (
              selectedProducts.map(product => (
                <td>{feature.values[product]}</td>
              ))
            ) : (
              <PlaceHolderCells />
            )
          ) : (
            <PlaceHolderCells />
          )
        ) : (
          selectedProducts.map(product => <td>{feature.values[product]}</td>)
        )}
      </tr>
    </>
  );
};

const mapStateToProps = store => ({
  selectedProducts: store.products.selectedProducts,
  showOnlyDifferences: store.products.showOnlyDifferences
});

export default connect(mapStateToProps)(SubFeature);
