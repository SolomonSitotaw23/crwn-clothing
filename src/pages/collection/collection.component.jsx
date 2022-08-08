import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";
import { useParams } from "react-router-dom";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  selectCollection();
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

const MakeMapStateToProps = () => {
  const { collectionId } = useParams();

  const mapStateToProps = (state, props) => ({
    collection: selectCollection(collectionId)(state),
  });
  return mapStateToProps;
};

export default connect(MakeMapStateToProps)(CollectionPage);
