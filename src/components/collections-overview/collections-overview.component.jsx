import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionsOverviewContainer } from "./collection-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherData }) => (
      <CollectionPreview key={id} {...otherData} />
    ))}
  </CollectionsOverviewContainer>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
