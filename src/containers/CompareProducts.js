import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productsActions";
import Features from "../components/Features";
import CompareSummary from "../components/CompareSummary";

class CompareProducts extends Component {
  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.props.fetchProducts();
  };

  render() {
    const { products, selectedProducts } = this.props;
    console.log("products ", products);
    return (
      <>
        <table>
          {products && (
            <>
              <CompareSummary
                compareSummary={products.compareSummary}
                selectedProducts={selectedProducts}
              />
              <Features
                features={products.featuresList}
                selectedProducts={selectedProducts}
              />
            </>
          )}
        </table>
      </>
    );
  }
}

const mapStateToProps = store => ({
  products: store.products.products,
  selectedProducts: store.products.selectedProducts,
  isFetching: store.products.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareProducts);
