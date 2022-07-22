import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.style";

export function MenuItem({ title, imageUrl, size, linkUrl }) {
  let navigate = useNavigate();
  return (
    <MenuItemContainer
      size={size}
      onClick={() => {
        navigate(`${linkUrl}`);
      }}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer>
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
}
