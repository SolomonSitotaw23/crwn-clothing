import React from "react";
import CollectionItem from "../collection-item/collection-item";

import "./component-preview.style.scss";

const CollectionPreview = ({ title, items, addItem }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>

    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
