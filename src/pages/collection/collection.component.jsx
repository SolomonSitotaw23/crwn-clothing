import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection("men")(state),
});
export default connect(mapStateToProps)(CollectionPage);
