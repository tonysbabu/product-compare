import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import Features from "../components/Features";
import CompareSummary from "../components/CompareSummary";
import LoadingIndicator from "../components/LoadingIndicator";

class CompareProducts extends Component {
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.props.fetchProducts();
  };

  render() {
    const { products, isFetching, selectedProducts } = this.props;
    return (
      <>
        {isFetching || !products ? (
          <LoadingIndicator />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="header">
                  <h1>Compare</h1>{" "}
                  <div>{`${selectedProducts.length} items selected`}</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <CompareSummary compareSummary={products.compareSummary} />
              <Features features={products.featuresList} />
            </tbody>
          </table>
        )}
      </>
    );
  }
}

const mapStateToProps = store => ({
  products: store.products.products,
  isFetching: store.products.isFetching,
  selectedProducts: store.products.selectedProducts
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
