import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../redux/shop/shop.actions";
import { Routes, Route } from "react-router-dom";

import CollectionsOverviewContainer from "../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../pages/collection/collection.container";

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverviewContainer />} />
        <Route
          path="/:collectionId"
          element={<CollectionPageContainer overviewRen="jackets" />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
