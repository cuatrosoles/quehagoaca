import React from "react";

const cont = {
  backgroundColor: "#eee",
  overflow: "hidden",
  position: "relative"
};

const ImageWithCaption = ({ index, photo, margin, direction, top, left }) => {
  return (
    <div style={{ margin, height: photo.height, width: photo.width, ...cont }}>
      <img src={photo.src} alt="" />
      <div class="bottom-right1 overlay-text1">{photo.caption1}</div>
      <div class="bottom-right2 overlay-text2">{photo.caption2}</div>
      <div class="bottom-right3 overlay-text3">{photo.caption3}</div>
    </div>
  );
};

export default ImageWithCaption;