import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import CommonBanner from "@/components/custom/CommonBanner";

const AboutUs = () => {
  return (
    <div>
      <CommonBanner
        title="Our Services"
        subTitle="At WinCity InfraWorks LLP, we offer a full spectrum of digital signage and display solutions, designed to deliver long-term value and uninterrupted performance."
      />

      <section className={`${style.service_container}`}>
        <div className="container">
          <div class="row">
            <div className="col-md-12 pb-4 fs-5 px-4">
              <div className="fw-bold fs-1 pb-2">Our Services</div>
              <div>
                At WinCity InfraWorks LLP, we offer a full spectrum of digital
                signage and display solutions, designed to deliver long-term
                value and uninterrupted performance.
              </div>
            </div>
            <div class="col-md-4">
              <div
                className={`h-100  rounded p-4 ${style.service_item} container-animation`}
              >
                <CustomImage
                  src={"/icons/attract-new-customers.png"}
                  wrapperClss="d-block w-25  cursor-pointer m-auto pb-3"
                />
                <div className="text-center ">
                  <div className="fs-5 fw-bold">
                    Ongoing Maintenance & Technical Support
                  </div>
                  <hr></hr>
                  <ul className="fw-light" style={{ listStyle: "none" }}>
                    <li className="py-1">
                      Scheduled preventive maintenance to ensure all digital
                      screens operate at peak efficiency
                    </li>
                    <li className="py-1">
                      24/7 technical support to resolve any hardware or software
                      issues promptly
                    </li>
                    <li className="py-1">
                      Proactive monitoring to minimize downtime and extend
                      screen lifespan
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col col-md-4">
              <div
                className={`h-100  rounded p-4 ${style.service_item} container-animation`}
              >
                <CustomImage
                  src={"/icons/attract-new-customers.png"}
                  wrapperClss="d-block w-25  cursor-pointer m-auto"
                />
                <div className="text-center ">
                  <div className="fs-5 fw-bold">
                    Content Management System (CMS){" "}
                  </div>
                  <hr></hr>
                  <ul className="fw-light" style={{ listStyle: "none" }}>
                    <li className="py-1">
                      Implementation of an intuitive and user-friendly CMS to
                      manage screen content effortlessly across multiple
                      locations
                    </li>
                    <li className="py-1">
                      Centralized content control to maintain brand consistency
                      and timely updates
                    </li>
                    <li className="py-1">
                      Training and ongoing support to empower your team in
                      managing digital assets efficiently
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div
                className={`h-100  rounded p-4 ${style.service_item} container-animation`}
              >
                <CustomImage
                  src={"/icons/attract-new-customers.png"}
                  wrapperClss="d-block w-25  cursor-pointer m-auto"
                />
                <div className="text-center ">
                  <div className="fs-5 fw-bold h-25">Installation & Setup </div>
                  <hr></hr>
                  <ul className="fw-light" style={{ listStyle: "none" }}>
                    <li className="py-1">
                      End-to-end installation services including site
                      inspection, secure mounting, and configuration
                    </li>
                    <li className="py-1">
                      Seamless integration of digital signage systems with your
                      existing IT and network infrastructure
                    </li>
                    <li className="py-1">
                      On-site testing and calibration to ensure displays are
                      fully operational from day one
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.section_body} slid_animation`}>
        <div className="container">
          <div class="row my-5">
            <div className="col-md-12 pb-4 fs-5 text-center">
              <div className="fw-bold fs-1 pb-2 text-black">
                What Sets WinCity Apart
              </div>
              <hr></hr>
            </div>
            <div className="col-md-6 pb-2">
              <div
                className={`${style.service_item} p-4 ${style.service_item_apart}`}
              >
                <div className="fs-4 fw-bold py-2">
                  Proven Expertise in Installation & Operations
                </div>
                <div>
                  With over a decade of hands-on experience, the WinCity team
                  specializes in the installation and management of digital
                  signage assets. Our expertise ensures optimal screen
                  placement, precise configuration, and seamless long-term
                  performance—delivering maximum visual impact and operational
                  efficiency.
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-flex d-none"></div>
            <div className="col-md-6 d-md-flex d-none"></div>
            <div className="col-md-6 pb-2">
              <div
                className={`${style.service_item} p-4 ${style.service_item_apart}`}
              >
                <div className="fs-4 fw-bold py-2">
                  Customized Screen Selection with Latest Technology
                </div>
                <div>
                  As a technology-agnostic solution provider, we prioritize
                  client needs over brand preferences. Our deep technical
                  know-how in LED and digital display technology allows us to
                  recommend tailored screen solutions that deliver exceptional
                  clarity, durability, and visibility—perfectly suited to your
                  location and audience.
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-2">
              <div
                className={`${style.service_item} p-4 ${style.service_item_apart}`}
              >
                <div className="fs-4 fw-bold py-2">
                  End-to-End Digital Signage Solutions
                </div>
                <div>
                  From initial consultation and site assessment to installation,
                  content integration, and post-installation maintenance, we
                  provide a comprehensive solution. Our proactive approach
                  ensures your digital screens are always running at peak
                  performance, minimizing downtime and maximizing your return on
                  investment (ROI).
                </div>
              </div>
            </div>
            <div className="col-md-6 d-md-flex d-none"></div>
            <div className="col-md-6 d-md-flex d-none"></div>
            <div className="col-md-6 pb-2">
              <div
                className={`${style.service_item} p-4 ${style.service_item_apart}`}
              >
                <div className="fs-4 fw-bold py-2">
                  Focused on Long-Term Value & Reliability
                </div>
                <div>
                  By blending our technical expertise with operational
                  experience, we help clients avoid common pitfalls in the
                  signage industry. We guide you toward investing in
                  high-quality digital display systems that promise long-term
                  reliability, energy efficiency, and sustained brand impact.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
