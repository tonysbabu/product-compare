import React from "react";
import { connect } from "react-redux";
import { selectProduct } from "../actions/productsActions";
import SummaryItem from "./SummaryItem";

const CompareSummary = ({
  compareSummary,
  selectedProducts,
  selectProduct
}) => {
  return (
    <>
      <tr>
        <th className="header">
          <h1>Compare</h1>{" "}
          <div>{`${selectedProducts.length} items selected`}</div>
        </th>
      </tr>

      {Object.keys(compareSummary).map(summary => (
        <>
          <tr className="no-border">
            <td> </td>
            <SummaryItem
              summary={summary}
              summaryObj={compareSummary[summary]}
              selectedProducts={selectedProducts}
            />
            <td></td>
          </tr>{" "}
        </>
      ))}
      <tr className="no-border">
        <td></td>
        {selectedProducts.map(() => (
          <td></td>
        ))}
        <td>
          <select
            className="select"
            onChange={e => selectProduct(e.target.value)}
          >
            <option>Select a product</option>
            {Object.keys(compareSummary.titles).map(key => {
              if (!selectedProducts.includes(key)) {
                return (
                  <option value={key}>
                    {compareSummary.titles[key].title}
                  </option>
                );
              }
            })}
          </select>
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  selectProduct: product => dispatch(selectProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareSummary);
