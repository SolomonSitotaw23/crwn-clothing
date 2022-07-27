import React from "react";
import CollectionsOverview from "../components/collections-overview/collections-overview.component";
import { connect } from "react-redux";
import { updateCollection } from "../redux/shop/shop.actions";
import WithSpinner from "../components/with-spinner/with-spinner.component";
import { Routes, Route } from "react-router-dom";
import CollectionPage from "../pages/collection/collection.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../firebse/firebse.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollection } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <CollectionsOverviewWithSpinner isLoading={loading} />
        <Routes>
          <Route
            path="/shop/:id"
            render={
              <CollectionPageWithSpinner isLoading={loading} {...this.props} />
            }
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionsMap) =>
    dispatch(updateCollection(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
