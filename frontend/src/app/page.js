import Carousel from "@/components/custom/Carousel";
import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";

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
      {/* <section
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
      </section> */}
      <section className={`${style.section_body}`}>
        <div className="container">
          <div
            className={`row border border-1 py-5 mt-5 mb-5 rounded ${style.network_hording} px-3 `}
          >
            <div className="col-md-6 ">
              <div className="row text-start">
                <div className="col-md-12 fs-5 p-3 border-1 border-bottom ">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      WinCity is a flagship initiative of Lokmat Media Pvt.
                      Ltd., a perfect paradigm of versatility in integrated
                      media solutions. With a legacy spanning over five decades,
                      Lokmat has grown to become one of India’s largest and most
                      influential media groups, delivering cutting-edge services
                      across Print, Digital, Outdoor Advertising (OOH), Event
                      Management, Branded Content, and Communication Strategy.
                    </div>
                  </div>
                </div>
                <div className="col-md-12 fs-5 p-3 border-1 border-bottom ">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      A key contributor to this success is our associate Ronak,
                      a seasoned expert in outdoor media execution. With
                      hands-on experience in installing over 2,000 hoardings,
                      bus queue shelters, pole kiosks, flag boards, and other
                      outdoor advertising formats, Ronak brings unmatched
                      executional excellence and industry knowledge to every
                      campaign.
                    </div>
                  </div>
                </div>
                <div className="col-md-12 fs-5 p-3">
                  <div className="rounded cursor-pointer text-white fadeIn ">
                    <div>
                      Whether it’s high-footfall zones in urban metros or
                      regional hotspots, WinCity by Lokmat Media Pvt. Ltd.
                      offers comprehensive outdoor media planning and execution
                      services tailored for businesses looking to scale through
                      effective location-based marketing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="row text-start border-1 border-start">
                <div className="col-md-12 fs-5 p-3 border-1 border-bottom">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      As a trusted name in the media landscape, Lokmat continues
                      to set benchmarks in multi-channel communication, helping
                      brands build presence, awareness, and engagement across
                      platforms.
                    </div>
                  </div>
                </div>
                <div className="col-md-12 fs-5 p-3 border-1 border-bottom">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      Ronak has been instrumental in optimizing every stage of
                      the OOH advertising lifecycle — including site surveys,
                      municipal and government approvals, hardware procurement,
                      installation logistics, maintenance, and advertising space
                      monetization. His process-driven approach ensures faster
                      turnaround, maximum visibility, and higher ROI for brands.
                    </div>
                  </div>
                </div>

                <div className="col-md-12 fs-5 p-3">
                  <div className="rounded cursor-pointer text-white fadeIn">
                    <div>
                      If you're looking to expand your brand's footprint with
                      impactful OOH advertising, hyperlocal visibility, and
                      seamless campaign execution, WinCity is your go-to
                      partner.
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
                      <div className="py-2 rounded cursor-pointer top_bottom_border_anim text-white">
                        <div className="fw-bold">5 Lakhs +</div>
                        <div className="fw-normal fs-3">HNI Consumers</div>
                      </div>
                    </div>
                    <div className="col-md-12 fs-2 p-3">
                      <div className="py-2 rounded cursor-pointer top_bottom_border_anim text-white">
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
          <div className={`row py-5 mt-5 mb-5 px-3 text-white`}>
            <div className="row text-white mt-3">
              <div className="col-md-12 text-center">
                <div className="fs-1 fw-bold pb-4 ">Our Capabilities</div>
              </div>
            </div>
            <div className="row d-flex flex-wrap justify-content-center">
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center ">
                <div>
                  <CustomImage
                    src={"/icons/attract-new-customers.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Site Assessment and Custom Design
                  </div>
                  <div className="container-animation">
                    <ul style={{ listStyle: "none" }}>
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
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center ">
                <div>
                  <CustomImage
                    src={"/icons/attract-new-customers.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Installation and Setup
                  </div>
                  <div className="container-animation">
                    <ul style={{ listStyle: "none" }}>
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
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center">
                <div>
                  <CustomImage
                    src={"/icons/attract-new-customers.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Content Management System (CMS)
                  </div>
                  <div className="container-animation">
                    <ul style={{ listStyle: "none" }}>
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
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center">
                <div>
                  <CustomImage
                    src={"/icons/attract-new-customers.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Ongoing Maintenance and Support:
                  </div>
                  <div className="container-animation">
                    <ul style={{ listStyle: "none" }}>
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
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center">
                <div>
                  <CustomImage
                    src={"/icons/attract-new-customers.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Performance Monitoring and Reporting
                  </div>
                  <div className="container-animation">
                    <ul style={{ listStyle: "none" }}>
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
            </div>
          </div>
        </div>
      </section>

      <section className={`${style.differentiator_bg} slid_animation`}>
        <div className="container my-5">
          <div className="row p-4">
            <div className="col-md-12 text-center container-animation">
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
        </div>
      </section>
    </div>
  );
}
