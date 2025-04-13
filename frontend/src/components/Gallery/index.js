"use client";

import { useState } from "react";
import CustomImage from "../custom/Image";
import style from "./style.module.css";

const ServiceGallery = () => {
  const [selectedImg, setSelectedImg] = useState(`/gallery/laboratory.png`);
  return (
    <div class="container py-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center fs-1 text-black fw-bold text-center pb-4">
          Where & How We Install LED Displays{" "}
        </div>
        <div className="col-md-6">
          <CustomImage src={selectedImg} imgClass="rounded" />
        </div>
      </div>
      <div className="row justify-content-center align-items-center overflow-x-auto flex-nowrap gap-0 py-1 px-1 my-2">
        <div
          className="cursor-pointer w-auto"
          onClick={() => {
            setSelectedImg(`/gallery/mall.png`);
          }}
        >
          <CustomImage
            src={`/gallery/mall.png`}
            imgClass="rounded"
            wrapperClss={`${style.service_gallery_img_container}`}
          />
        </div>
        <div
          className="cursor-pointer w-auto"
          onClick={() => {
            setSelectedImg(`/gallery/office.png`);
          }}
        >
          <CustomImage
            src={`/gallery/office.png`}
            imgClass="rounded"
            wrapperClss={`${style.service_gallery_img_container}`}
          />
        </div>
        <div
          className="cursor-pointer w-auto"
          onClick={() => {
            setSelectedImg(`/gallery/shopping-mall.png`);
          }}
        >
          <CustomImage
            src={`/gallery/shopping-mall.png`}
            imgClass="rounded"
            wrapperClss={`${style.service_gallery_img_container}`}
          />
        </div>
        <div
          className="cursor-pointer w-auto"
          onClick={() => {
            setSelectedImg(`/gallery/stair-case.png`);
          }}
        >
          <CustomImage
            src={`/gallery/stair-case.png`}
            imgClass="rounded"
            wrapperClss={`${style.service_gallery_img_container}`}
          />
        </div>
        <div
          className="cursor-pointer w-auto"
          onClick={() => {
            setSelectedImg(`/gallery/laboratory.png`);
          }}
        >
          <CustomImage
            src={`/gallery/laboratory.png`}
            imgClass="rounded"
            wrapperClss={`${style.service_gallery_img_container}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
