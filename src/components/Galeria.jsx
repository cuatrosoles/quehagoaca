import React from 'react';
import Gallery from 'react-photo-gallery';
import ImageWithCaption from "./ImageWithCaption";
import { photos } from "./photos";
import "./styles.css";

export default function Galeria() {
    const imageRenderer = ({ index, left, top, key, photo }) => (
      <ImageWithCaption
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    );

    return (
      <div className="Galeria">
        <Gallery photos={photos} renderImage={imageRenderer}></Gallery>
      </div>
    );
  }