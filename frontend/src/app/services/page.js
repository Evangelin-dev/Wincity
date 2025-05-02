import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import CommonBanner from "@/components/custom/CommonBanner";
import ServiceGallery from "@/components/Gallery";

const AboutUs = () => {
  return (
    <div>
      <CommonBanner
        title="Our Services"
        subTitle="At WinCity InfraWorks LLP, we offer a full spectrum of digital signage and display solutions, designed to deliver long-term value and uninterrupted performance."
      />

      <section className={`${style.service_container}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className="fs-3 fw-bold">Deployment Strategy</div>
                <div className="fs-5 fw-normal pb-2">
                Complete, hassle-free deployment of DSS
                </div>

                <div>
                  <div className="fw-bold">Site Inspection : </div>
                  <ul>
                    <li>
                      Evaluate and identify ideal screen locations for maximum
                      visibility and performance.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">Secure Mounting & Configuration</div>
                  <ul>
                    <li>
                    Precise screen installation with reliable mounting and optimal configuration.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">System Integration</div>
                  <ul>
                    <li>
                    Seamless setup of99 IT & network infrastructure for uninterrupted operation.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">On-Site Testing & Calibration</div>
                  <ul>
                    <li>
                      Every screen is tested and fine-tuned to be fully
                      operational from day one.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="deployementStrategy"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <CustomImage
                      src={`/services/deployment-strategy/deployement-strategy.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <CustomImage
                      src={`/services/deployment-strategy/deployement-strategy-2.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <CustomImage
                      src={`/services/deployment-strategy/deployement-strategy-3.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#deployementStrategy"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#deployementStrategy"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="row">
            <div className="col-md-6">
              <div
                id="operationalUptimeManagement"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <CustomImage
                      src={`/services/operational-uptime-management/management.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <CustomImage
                      src={`/services/operational-uptime-management/planning.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <CustomImage
                      src={`/services/operational-uptime-management/uptime.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#operationalUptimeManagement"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#operationalUptimeManagement"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className="fs-3 fw-bold">
                  Operational Uptime Management
                </div>
                <div className="fs-5 fw-normal pb-2">
                  Proactive care to ensure your screens stay live and flawless
                </div>

                <div>
                  <div className="fw-bold">
                    Scheduled Preventive Maintenance :{" "}
                  </div>
                  <ul>
                    <li>
                      Routine health checks to maintain peak efficiency and
                      reduce potential failures.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">Technical Assistance</div>
                  <ul>
                    <li>
                    Prompt support to quickly resolve hardware and software issues.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">Proactive Monitoring</div>
                  <ul>
                    <li>
                      Real-time monitoring systems to detect issues early and
                      maximize uptime & lifespan.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>

          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className="fs-3 fw-bold">Content Management</div>
                <div className="fs-5 fw-normal pb-2">
                  Simple yet powerful tools to control and manage screen content
                </div>

                <div>
                  <div className="fw-bold">Intuitive CMS Interface : </div>
                  <ul>
                    <li>
                      Easy-to-use platform for managing content across multiple
                      locations.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">Centralized Control</div>
                  <ul>
                    <li>
                      Maintain brand consistency with real-time updates and
                      scheduling.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="fw-bold">Training & Ongoing Support</div>
                  <ul>
                    <li>
                      We equip your team with training and ongoing guidance for
                      smooth content operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                id="contentOperation"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <CustomImage
                      src={`/services/content-operations/content-mgmt.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <CustomImage
                      src={`/services/content-operations/content-mgmt-1.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                  <div className="carousel-item">
                    <CustomImage
                      src={`/services/content-operations/content-mgmt-2.avif`}
                      wrapperClss="d-block w-100"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#contentOperation"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#contentOperation"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={``}>
        <div className="container">
          <div className="row my-5">
            <div className="col-md-12 pb-4 fs-5 text-center">
              <div className="fw-bold fs-1 pb-2 text-white">
                What Sets WinCity Apart
              </div>
              <hr></hr>
            </div>

            <div className="col-md-12">
              <div
                className={`${style.service_item} p-5 ${style.service_item_apart}`}
              >
                <div class="clearfix">
                  <CustomImage
                    wrapperClss="col-md-6 float-md-end mb-3 ms-md-3 rounded"
                    src={`/banner/banner-service.jpeg`}
                    imgClass="rounded"
                  />
                  <div className="mb-3 ms-md-3">
                    <p>
                      <div className="fs-4 fw-bold">
                        🛠️ Proven Expertise in Installation & Operations
                      </div>
                      <div>
                        With over years of industry experience, our team excels
                        in the installation and management of digital systems. We ensure precise screen placement, optimized
                        configuration, and smooth operations—guaranteeing
                        maximum visual impact and performance efficiency from
                        day one.
                      </div>
                    </p>

                    <p>
                      <div className="fs-4 fw-bold">
                        🎯 Customized Screen Selection with Cutting-Edge
                        Technology
                      </div>
                      <div>
                        As a technology-agnostic provider, we focus solely on
                        what works best for you—not on pushing specific brands.
                        Our in-depth knowledge of LED and digital display
                        technologies enables us to recommend the most suitable,
                        high-performing screen solutions tailored to your
                        environment, audience, and goals.
                      </div>
                    </p>

                    <p>
                      <div className="fs-4 fw-bold">
                        🔄 End-to-End Digital Signage Solutions
                      </div>
                      <div>
                        From the first consultation to ongoing maintenance, we
                        handle the entire digital signage lifecycle:
                      </div>
                      <div>
                        <ul>
                          <li>Site assessment</li>
                          <li>Hardware installation</li>
                          <li>Network integration</li>
                          <li>Content management </li>
                          <li>Monitoring & support</li>
                        </ul>
                      </div>
                      <div>
                        Our all-in-one approach minimizes downtime and ensures
                        your screens are always performing at their
                        best—delivering high ROI and consistent brand
                        visibility.
                      </div>
                    </p>
                    <p>
                      <div className="fs-4 fw-bold">
                        💡 Long-Term Value & Unmatched Reliability
                      </div>
                      <div>
                        We go beyond just installation. By combining technical
                        depth with real-world operational insights, we help
                        clients avoid costly mistakes and invest in future-ready
                        signage. Our solutions are built for durability, energy
                        efficiency, and sustained audience engagement, ensuring
                        you get the most out of every screen.
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <ServiceGallery />
      </section>
    </div>
  );
};

export default AboutUs;
