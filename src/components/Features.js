import React from "react";
import Feature from "./Feature";

export default function Features({ features }) {
  return (
    <>
      {/* no id is present to provide key */}
      {features.map((feature, index) => (
        <Feature feature={feature} key={index} index={index} />
      ))}
    </>
  );
}
