import CustomImage from "../Image";

const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <video autoPlay loop muted className="w-100">
            <source src="banner-background.mp4" type="video/mp4" />
          </video>
          <div class="carousel-caption d-none d-md-block text-black">
            <div className="d-flex align-items-center h-100 justify-content-center row">
              <div className="col-md-6">
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
    </div>
  );
};

export default Carousel;
