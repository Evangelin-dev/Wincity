import ContactUsForm from "./form";
import style from "./styles.module.css";

const ContactUs = () => {
  return (
    <div
      className={`container text-color-black py-5  ${style.contact_us_container} bg-white`}
      id={`contactUs`}
    >
      <div className="row g-0 py-2">
        <div className="col-md-6 col-sm-12 p-5">
          <div className={`${style.contact_content_title}`}>
            Get In Touch With You
          </div>
          <div className={`pt-4 pb-4 ${style.contact_content_sub_title}`}>
            We&#39;re always on the lookout to work with new clients. If
            you&#39;re interested in working with us, please get in touch in one
            of the following ways.
          </div>

          <div className="row fs-6 fw-normal py-1">
            <div className="col-md-4">
              <i class="fa fa-phone pe-1" aria-hidden="true"></i>{" "}
              <span className="mx-2">Contact No</span>
            </div>
            <div className="col-md-8">+91 xxxxxxxxxx</div>
          </div>

          <div className="row fs-6 fw-normal py-1">
            <div className="col-md-4">
              <i class="fa fa-envelope pe-1" aria-hidden="true"></i>{" "}
              <span className="mx-2">Email Address</span>
            </div>
            <div className="col-md-8">kiranmasoriya@wincityinfraworks.com</div>
          </div>

          <div className="row fs-6 fw-normal py-1">
            <div className="col-md-4">
              <i class="fa fa-map-marker pe-1" aria-hidden="true"></i>{" "}
              <span className="mx-2">Address</span>
            </div>
            <div className="col-md-8">
              B-126, FLOOR 12TH, PLOT NO 210, B WING, MITTAL TOWER, FREE PRESS
              JOURNAL MARG, Nariman Point, Mumbai.
            </div>
          </div>
        </div>
        <div className={`col-md-6 col-sm-12 ${style.contact_us_form_p}`}>
          <div
            className="p-3 border border-1 rounded-1"
            style={{ background: "white", color: "black" }}
          >
            <div className="container">
              <div className="form py-4">
                <ContactUsForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PhonePopUp /> */}
    </div>
  );
};

export default ContactUs;
