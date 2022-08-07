import React from "react";
import CollectionItem from "../collection-item/collection-item";
import { Link } from "react-router-dom";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.style";

const CollectionPreview = ({ title, items, routeName, addItem }) => (
  <CollectionPreviewContainer>
    <TitleContainer>
      <Link to={`${routeName}`}>{title.toUpperCase()} </Link>
    </TitleContainer>

    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
