import React from "react";
import SubFeature from "./SubFeature";

export default function Feature({ selectedProducts, feature }) {
  return (
    <>
      <tr className="main-feature">
        <td>
          <span className="feature-title">{feature.title}</span>
        </td>
        {selectedProducts.map(() => (
          <td></td>
        ))}
        <td></td>
      </tr>
      {feature.features.map(feature => (
        <SubFeature feature={feature} selectedProducts={selectedProducts} />
      ))}
    </>
  );
}
