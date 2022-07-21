import React from "react";
import CollectionsOverview from "../components/collections-overview/collections-overview.component";
import { Routes, Route } from "react-router-dom";
const ShopPage = () => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
