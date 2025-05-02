import CustomImage from "../Image";
import style from "./style.module.css";

const Carousel = () => {
  return (
    <div
      id="homePageCarousal"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <div className="row position-relative">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <CustomImage
                src={`/banner/Wincity Right Banner.png`}
                wrapperClss="card-img-top rounded"
                imgClass="rounded"
              />
            </div>

            <div
              class={`text-white position-absolute ${style.carousel_caption} start-0 fs-4 border border-1 w-auto p-5 rounded`}
            >
              <div className={`${style.caption_title}`}>
              For Over 50 Years, 
              </div>
              <div className={`${style.caption_sub_title}`}>
              Our leadership team has turned vision into visibility. Resonating across Print/Events/Digital Media/OOH Media.
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div className="row position-relative">
            <div className="col-md-8">
              <CustomImage
                src={`/banner/banner-2.jpg`}
                wrapperClss="card-img-top rounded"
                imgClass="rounded"
              />
            </div>
            <div className="col-md-4"></div>

            <div
              class={`text-white position-absolute ${style.carousel_caption} end-0 fs-4 border border-1 w-auto p-5 rounded`}
            >
              <div className={`${style.caption_title}`}>
                For Over 50 Years, We’ve Turned Vision into Visibility.
              </div>
              <div className={`${style.caption_sub_title}`}>
                Catchy and resonates well with Print/Events/Digital Media/OOH
                Media.
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <div className="row position-relative">
            <div className="col-md-4"></div>

            <div className="col-md-8">
              <CustomImage
                src={`/banner/banner-3.avif`}
                wrapperClss="card-img-top rounded"
                imgClass="rounded"
              />
            </div>

            <div
              class={`text-white position-absolute ${style.carousel_caption} start-0 fs-4 border border-1 w-auto p-5 rounded`}
            >
              <div className={`${style.caption_title}`}>
                For Over 50 Years, We’ve Turned Vision into Visibility.
              </div>
              <div className={`${style.caption_sub_title}`}>
                Catchy and resonates well with Print/Events/Digital Media/OOH
                Media.
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#homePageCarousal"
        data-bs-slide="prev"
      >
        <span class="fa fa-chevron-left fa-lg text-white"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#homePageCarousal"
        data-bs-slide="next"
      >
        <span class="fa fa-chevron-right fa-lg text-white"></span>
      </button>
    </div>
  );
};

export default Carousel;
