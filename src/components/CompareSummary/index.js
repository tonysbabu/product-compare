import React from "react";
import { connect } from "react-redux";
import {
  selectProduct,
  removeProduct,
  toggleShowOnlyDifferences
} from "../../actions/productsActions";
import SummaryItem from "./SummaryItem";
import PlaceHolderCells from "../PlaceHolderCells";
import "./styles.scss";

const CompareSummary = ({
  compareSummary,
  selectedProducts,
  selectProduct,
  removeProduct,
  showOnlyDifferences,
  toggleShowOnlyDifferences
}) => {
  return (
    <>
      {Object.keys(compareSummary).map((summary, index) => (
        <>
          <tr className="no-border" key={index}>
            {/* no id is present to provide key */}
            <td> </td>
            <SummaryItem
              summary={summary}
              summaryObj={compareSummary[summary]}
              removeProduct={removeProduct}
              selectedProducts={selectedProducts}
            />
            {selectedProducts.length < 4 ? <td></td> : ""}
          </tr>
        </>
      ))}
      <tr className="no-border">
        <td>
          {selectedProducts.length > 1 ? (
            <>
              {" "}
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                value="value1"
                checked={showOnlyDifferences}
                onChange={toggleShowOnlyDifferences}
              />
              <label for="styled-checkbox-1">Show Only Differences</label>
            </>
          ) : (
            ""
          )}
        </td>
        <PlaceHolderCells />
        {selectedProducts.length < 4 ? (
          <td>
            <select
              className="select"
              onChange={e => selectProduct(e.target.value)}
            >
              <option>Select a product</option>
              {Object.keys(compareSummary.titles).map((title, index) => {
                if (!selectedProducts.includes(title)) {
                  return (
                    <option value={title} key={index}>
                      {compareSummary.titles[title].title}
                    </option>
                  );
                }
                return null;
              })}
            </select>
          </td>
        ) : null}
      </tr>
    </>
  );
};

const mapStateToProps = store => ({
  selectedProducts: store.products.selectedProducts,
  showOnlyDifferences: store.products.showOnlyDifferences
});

const mapDispatchToProps = dispatch => ({
  selectProduct: product => dispatch(selectProduct(product)),
  removeProduct: product => dispatch(removeProduct(product)),
  toggleShowOnlyDifferences: () => dispatch(toggleShowOnlyDifferences())
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareSummary);
