"use client";

import { useRef, useState } from "react";
import CustomImage from "../custom/Image";
import style from "./style.module.css";

const ServiceGallery = () => {
  const [selectedImg, setSelectedImg] = useState(`/gallery/gallery-1.jpeg`);

  const scrollRef = useRef();

  const onScroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div class="container py-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center fs-1 text-black fw-bold text-center pb-4">
          Where & How We Install LED Displays{" "}
        </div>
        <div className="col-md-6">
          <CustomImage
            src={selectedImg}
            // imgClass="rounded"
            imgClass={style.service_gallery_img_preview}
          />
        </div>
      </div>
      <div className="position-relative">
        <div
          className="row justify-content-center align-items-center overflow-x-auto flex-nowrap gap-0 py-1 px-1 my-2"
          ref={scrollRef}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((gallery, galleryIdx) => {
            return (
              <div
                className="cursor-pointer w-auto"
                onClick={() => {
                  setSelectedImg(`/gallery/gallery-${gallery}.jpeg`);
                }}
                key={`gallery-${galleryIdx}`}
              >
                <CustomImage
                  src={`/gallery/gallery-${gallery}.jpeg`}
                  imgClass="rounded"
                  wrapperClss={`${style.service_gallery_img_container}`}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between fs-2 position-absolute w-100 top-100">
          <i
            class="fa fa-chevron-circle-left px-2 cursor-pointer text-black bg-white"
            aria-hidden="true"
            onClick={() => onScroll(-500)}
          ></i>
          <i
            class="fa fa-chevron-circle-right px-2 cursor-pointer text-black bg-white"
            aria-hidden="true"
            onClick={() => onScroll(500)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
