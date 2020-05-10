import React from "react";

export default function SubFeature({ selectedProducts, feature }) {
  return (
    <>
      <tr>
        <td>
          <span className="subfeature-title">{feature.featureName}</span>
        </td>
        {selectedProducts.map(product => (
          <td>{feature.values[product]}</td>
        ))}
      </tr>
    </>
  );
}
