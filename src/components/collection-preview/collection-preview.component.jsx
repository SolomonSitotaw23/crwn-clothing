import React from "react";
import CollectionItem from "../collection-item/collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.style";

const CollectionPreview = ({ title, items, addItem }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>

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
