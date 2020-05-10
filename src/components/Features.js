import React from "react";
import Feature from "./Feature";

export default function Features({ features, selectedProducts }) {
  return (
    <>
      {features.map(feature => (
        <Feature feature={feature} selectedProducts={selectedProducts} />
      ))}
    </>
  );
}
