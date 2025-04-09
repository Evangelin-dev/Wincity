import CustomImage from "../Image";

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <CustomImage
            src={"/banner/Achievements.webp"}
            wrapperClss={"d-block w-100"}
            height="auto"
          />{" "}
          <div class="carousel-caption d-none d-md-block">
            <div className="d-flex align-items-center h-100 justify-content-center row">
              <div className="col-md-8">
                <h1 className="fw-bold right_to_left fs_4rem">
                  WinCity InfraWorks LLP{" "}
                </h1>
                <p className="fs-3">
                  A perfect paradigm of versatility, established more than five
                  decades ago providing integrated media and communication
                  solutions across Print, Digital, OOH, Events & more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
