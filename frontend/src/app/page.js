import Carousel from "@/components/custom/Carousel";
import CustomButton from "@/components/custom/CustomButton";
import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import ContactUs from "@/components/ContactUs";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Home | WinCity InfraWorks LLP",
    description: "WinCity InfraWorks LLP",
    keywords: "WinCity InfraWorks LLP",
  };
}

export default function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Carousel />
      </div>
      <section
        className={`mb-5 mt-6 pt-6 ${style.home_scheme_section}`}
        id="aboutUs"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <div className="fs-1 fw-bold"> About WinCity</div>
                <div className="fs-5 fw-light py-2  ">
                  WinCity InfraWorks LLP, is an initiative of Lokmat Media.
                  Along with our associates it is an integrated media house with
                  a robust portfolio of over 9,000+ outdoor & indoor
                  hoardings/signages including digital signages across city
                  periphery, residential & Corporate buildings. WinCity team has
                  extensive experience in managing end-to-end infrastructure,
                  from installation to maintenance and operations. WinCity team
                  delivers high-impact solution integration and execution with
                  rich experience of managing end-to-end digital assets along
                  with the content curation & management.
                </div>
              </div>
            </div>
            <div
              className={`col-md-6 d-flex align-items-center ${style.about_us_bg}`}
            ></div>
            <div className="row text-white py-5">
              <div className="col-md-12">
                <div className="fs-5 p-2 d-flex justify-content-center gap-2 text-center align-items-center">
                  <div className={`top_bottom_border_anim lh-1`}>
                    <span className="fs-5">
                      Over 2000 hoardings across Mumbai
                    </span>
                  </div>
                  <div className="vr"></div>
                  <div className={`top_bottom_border_anim lh-1`}>
                    <span className="fs-5">
                      Over 5000 digital and static screens across residential
                      complexes & corporate parks
                    </span>
                  </div>
                  <div className="vr"></div>
                  <div className={`top_bottom_border_anim lh-1`}>
                    <span className="fs-5">
                      Largest Marathi print publication house
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.section_body}`}>
        <div className="container">
          <div
            className={`row border border-1 py-5 mt-5 mb-5 rounded ${style.network_hording} px-3`}
          >
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <h1
                className="text-center text-black py-5 fw-bold text-white"
                style={{ fontSize: "3rem" }}
              >
                Network – Hoardings{" "}
              </h1>
            </div>
            <div className="col-md-6">
              <div className="row text-start border-1 border-start">
                <div className="col-md-12 fs-5 p-3 border-1 border-bottom">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      WinCity is an imitative of Lokmat Media Pvt Ltd. A perfect
                      paradigm of versatility, established more than five
                      decades ago providing integrated media and communication
                      solutions across Print, Digital, OOH, Events & more.
                      Lokmat is among the largest media groups in the country.
                    </div>
                  </div>
                </div>
                <div className="col-md-12 fs-5 p-3">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      Our associate Ronak has installed more than 2000
                      Hoardings, Bus Q Shelters, Pole Kiosk, Flag Boards and
                      more; constantly working on optimizing the process of site
                      survey, obtaining approvals, procuring hardware,
                      installation, maintenance and monetization.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 pt-5">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center border-1 border-end">
                  <h1
                    className="text-center text-black py-5 fw-bold text-white"
                    style={{ fontSize: "3rem" }}
                  >
                    Network – Residential & Corporate Screens
                  </h1>
                </div>
                <div className="col-md-6">
                  <div className="row text-center">
                    <div className="col-md-12 fs-2 p-3">
                      <div className="py-2 rounded cursor-pointer top_bottom_border_anim">
                        <div className="fw-bold">5 Lakhs +</div>
                        <div className="fw-normal fs-3">HNI Consumers</div>
                      </div>
                    </div>
                    <div className="col-md-12 fs-2 p-3">
                      <div className="py-2 rounded cursor-pointer top_bottom_border_anim">
                        <div className="fw-bold">300+</div>
                        <div className="fw-normal fs-3">Gated Community</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`container mt-5`}>
          <div className={`row p-4`}>
            <div className={`${style.importance_digital_signage} col-md-12`}>
              <div className="row text-white">
                <div className="col-md-12 text-center">
                  <div className="fs-3 fw-bold pb-4">
                    Importance of Digitals Signage
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={` `}>
                    <div className="fs-6 text-white fw-light">
                      <div>
                        Outdoor & indoor digital screens offer banks dynamic
                        platforms for engaging customers & enhancing
                        communication. Outdoor screens boost visibility, attract
                        potential clients and provide real-time updates,
                        promoting the bank’s services to a broader audience.
                      </div>
                      <div className="py-1">
                        Indoor screens improve customer experience by delivering
                        timely information and promoting relevant financial
                        products. Together, they create a seamless & modernized
                        environment that enhances both marketing efforts and
                        customer satisfaction
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center border-1 border-start">
                  <div className={`text-white w-100`}>
                    <div className="fs-5 text-white fw-light">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Increased Visibility & Brand Awareness
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Attract New Customers
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Enhanced Customer Communication
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Dynamic and Real-Time Updates
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Increased Upsell Opportunities
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Improved Customer Experience
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.section_body}`}>
        <div className="container">
          <div
            className={`row border border-1 py-5 mt-5 mb-5 rounded ${style.network_hording} px-3 text-white`}
          >
            <div className="row text-white mt-3">
              <div className="col-md-12 text-center">
                <div className="fs-1 fw-bold pb-4 ">Our Capabilities</div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim">
                <div>
                  <div className="fw-bold fs-4 pb-2">
                    Site Assessment and Custom Design
                  </div>
                  <div>
                    <ul>
                      <li>
                        Conduct thorough site assessments for each branch to
                        determine optimal screen placement & size
                      </li>
                      <li>
                        Design customized digital screen layouts that align with
                        your branding and messaging needs.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-md-flex justify-content-center align-items-center d-none">
                <CustomImage
                  src={"/facilities/12708594.png"}
                  wrapperClss="d-block w-25 tossing cursor-pointer"
                />
              </div>
              <div className="col-md-6 py-3 d-md-flex justify-content-center align-items-center d-none">
                <CustomImage
                  src={"/facilities/17205194.png"}
                  wrapperClss="d-block w-25 tossing cursor-pointer"
                />
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim">
                <div>
                  <div className="fw-bold fs-4 pb-2">
                    Installation and Setup
                  </div>
                  <div>
                    <ul>
                      <li>
                        Provide end-to-end installation services, ensuring
                        screens are securely mounted & fully operational
                      </li>
                      <li>
                        Integrate the digital signage system with your existing
                        network infrastructure.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim">
                <div>
                  <div className="fw-bold fs-4 pb-2">
                    Content Management System (CMS)
                  </div>
                  <div>
                    <ul>
                      <li>
                        Implement a user-friendly CMS allowing team to easily
                        update & manage content across all branches
                      </li>
                      <li>
                        Offer training and ongoing support to ensure seamless
                        content management.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-md-flex justify-content-center align-items-center d-none">
                <CustomImage
                  src={"/facilities/3079941.png"}
                  wrapperClss="d-block w-25 tossing cursor-pointer"
                />
              </div>{" "}
              <div className="col-md-6 py-3 d-md-flex justify-content-center align-items-center d-none">
                <CustomImage
                  src={"/facilities/8176853.png"}
                  wrapperClss="d-block w-25 tossing cursor-pointer"
                />
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim">
                <div>
                  <div className="fw-bold fs-4 pb-2">
                    Ongoing Maintenance and Support:
                  </div>
                  <div>
                    <ul>
                      <li>
                        Provide regular maintenance services to ensure all
                        screens function optimally
                      </li>
                      <li>
                        Offer 24/7 technical support to address any issues
                        promptly.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim">
                <div>
                  <div className="fw-bold fs-4 pb-2">
                    Performance Monitoring and Reporting
                  </div>
                  <div>
                    <ul>
                      <li>
                        Deliver regular reports on screen performance,
                        engagement metrics, & content effectiveness
                      </li>
                      <li>
                        Collaborate with your marketing team to refine content
                        strategies based on insights.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-md-flex justify-content-center align-items-center d-none">
                <CustomImage
                  src={"/facilities/13323077.png"}
                  wrapperClss="d-block w-25 tossing cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div
            className={`row py-5 g-4 ${style.network_hording} border border-1 py-5 mt-5 mb-5 rounded`}
          >
            <div
              className={`col-md-12 text-center fw-bold text-white fs-1 py-3 `}
            >
              Scope of Work
            </div>
            <div></div>
            <div className="col-md-6 d-flex">
              <div className={`${style.scope_of_work_item} d-flex w-100 p-2 `}>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                  <span className="step fs-1 fw-bold">1</span>
                </div>
                <div className="w-75 text-white">
                  <div className="fs-4 fw-bold py-2">
                    {" "}
                    Complete Project Planning
                  </div>
                  <div className="py-1">
                    Understanding Customer’s Requirements - Sourcing/Developing
                    Hardware
                  </div>
                  <div className="py-1">
                    Software - Planning - Execution - Post installation service
                    support
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={`${style.scope_of_work_item} d-flex w-100 p-2 `}>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                  <span className="step fs-1 fw-bold">2</span>
                </div>
                <div className="w-75 text-white">
                  <div className="fs-4 fw-bold py-2">Sourcing Displays</div>
                  <div className="py-1">
                    As per project requirement - Standard / customized
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={`${style.scope_of_work_item} d-flex w-100 p-2 `}>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                  <span className="step fs-1 fw-bold">3</span>
                </div>
                <div className="w-75 text-white">
                  <div className="fs-4 fw-bold py-2">Hardware Installation</div>
                  <div className="py-1">
                    Expert hardware installation services for seamless
                    integration and optimal performance
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={`${style.scope_of_work_item} d-flex w-100 p-2 `}>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                  <span className="step fs-1 fw-bold">4</span>
                </div>
                <div className="w-75 text-white">
                  <div className="fs-4 fw-bold py-2">
                    {" "}
                    Asset Management & On Site Support
                  </div>
                  <div className="py-1">
                    On Site support along with back-end team
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={`${style.scope_of_work_item} d-flex w-100 p-2 `}>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                  <span className="step fs-1 fw-bold">5</span>
                </div>
                <div className="w-75 text-white">
                  <div className="fs-4 fw-bold py-2">
                    Content Management Solutions
                  </div>
                  <div className="py-1">
                    Secure & Agile with multilayered functionalities
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className={`${style.scope_of_work_item} d-flex w-100 p-2 `}>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                  <span className="step fs-1 fw-bold">6</span>
                </div>
                <div className="w-75 text-white">
                  <div className="fs-4 fw-bold py-2">
                    Content Development/ Customization
                  </div>
                  <div className="py-1">
                    Comprehensive content ideation to development{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`container mt-5`}>
          <div className={`row p-4`}>
            <div className={`${style.importance_digital_signage} col-md-12`}>
              <div className="row text-white">
                <div className="col-md-12 text-center">
                  <div className="fs-3 fw-bold pb-4">
                    Content Management System
                  </div>
                </div>
                <div className="col-md-12 pb-4">
                  <div className={`text-center`}>
                    <div className="fs-6 text-white fw-light">
                      <div>
                        Empowers Businesses to Efficiently Organize, Store, and
                        Manage Digital Assets Seamlessly
                      </div>
                      <div className="py-1">
                        Indoor screens improve customer experience by delivering
                        timely information and promoting relevant financial
                        products. Together, they create a seamless & modernized
                        environment that enhances both marketing efforts and
                        customer satisfaction
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center border-1">
                  <div className={`text-white w-100`}>
                    <div className="fs-5 text-white fw-light">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Remote Management
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Centralized Control
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Scalability
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Content Scheduling
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Content Security
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center border-1 border-start">
                  <div className={`text-white w-100`}>
                    <div className="fs-5 text-white fw-light">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Analytics and Insights
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Customized Templates
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Rights & Privileges
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Logs
                        </li>
                        <li>
                          <i class="fa fa-tags me-2" aria-hidden="true"></i>{" "}
                          Flexibility
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.differentiator_bg} `}>
        <div className="container my-5">
          <div className="row p-4">
            <div className="col-md-12 text-center">
              <div className="fs-1 fw-bold pb-4 text-white">
                WinCity Differentiators
              </div>
            </div>

            <div className="col-md-12 d-flex align-items-center rounded-start">
              <div className="row text-white text-center">
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh", borderColor: "#cf4c9d" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">
                      Expertise in Installation & Operation:{" "}
                    </div>
                    <div className="py-2">
                      Team has over 10 years of experience in installing and
                      running digital assets ensuring optimal placement,
                      configuration, and long-term performance of digital
                      screens
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">
                      Tailored Screen Selection:
                    </div>
                    <div>
                      Technology agnostic with focus on latest tech aligning
                      with the custom requirements. Deep understanding of
                      digital displays allows to identify and recommend the best
                      LED screens tailored to specific needs, ensuring superior
                      quality, durability & visibility
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">Comprehensive Solution:</div>
                    <div>
                      From initial need assessment to post-installation
                      maintenance, we extend a complete solution, ensuring LED
                      screens are always operating at peak performance,
                      minimizing downtime and maximizing ROI
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">
                      Focus on Long-Term Value:
                    </div>
                    <div>
                      By leveraging our knowledge of both the technology and the
                      operational aspects, we help in avoiding common pitfalls
                      in the signage industry, ensuring that they invest in
                      high-quality digital displays that offer longevity and
                      reliability{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactUs />
        </div>
      </section>
    </div>
  );
}
