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
      {/* ${style.section_body} */}
      <section className={``}>
        <div className="container">
          <div
            className={`row border border-1 py-5 mt-5 mb-5 rounded ${style.network_hording} px-3 `}
          >
            <div className="col-md-12">
              <div className="row text-start">
                <div className="col-md-12 fs-5 p-3 text-white">
                  <div class="clearfix">
                    <CustomImage
                      src={`/banner/Achievements.webp`}
                      wrapperClss="col-md-6 float-md-end mb-3 ms-md-3 rounded"
                      alt="Wincity"
                      imgClass="rounded"
                    />

                    <p>
                      <b>
                        WinCity, a flagship initiative of Lokmat Media Pvt.
                        Ltd., is a powerhouse in integrated outdoor media
                        solutions.{" "}
                      </b>
                       Backed by the legacy of one of India’s largest and most
                      respected media groups, WinCity brings innovation, scale,
                      and precision to every OOH campaign—delivering visibility
                      where it matters most.
                    </p>

                    <p>
                      <b>
                      With expertise across high-impact formats like digital Digital Signage 
                      name boards, hoardings, kiosks, and more, WinCity specializes 
                      in end-to-end outdoor integrated outdoor media solutions. 
                      </b>{" "}
                      From site recce to infrastructure planning, installation, 
                      and maintenance, every step is crafted to ensure seamless 
                      brand amplification across both urban and regional markets.
                    </p>

                    <p>
                      <b>
                        As Lokmat continues to lead India’s multi-channel media
                        landscape, WinCity carries forward its vision through
                        location-based marketing that drives results.
                      </b>{" "}
                      Trusted by top brands for its reach, reliability, and
                      executional excellence, WinCity is your strategic partner
                      for impactful OOH growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-md-12 pt-5">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center border-md-1 border-end">
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
            </div> */}
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
                    src={"/icons/assessment.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                    alt="Site Assessment and Custom Design"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Site Assessment and Custom Design
                  </div>
                  <div className="">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <b>On-Site Survey:</b> We evaluate locations to determine Optimal 
                        placement and size for your digital signage solutions, 
                        ensuring maximum visibility and impact.
                      </li>
                      <li>
                        <b>Tailored Visual Concepts:</b> Custom-designed 
                        layouts that seamlessly reflect your brand identity and
                        enhance customer engagement.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center ">
                <div>
                  <CustomImage
                    src={"/icons/maintainance.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Installation and Setup
                  </div>
                  <div className="">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <b>End-to-End Installation:</b> From secure mounting to
                        final setup—our team handles it all, ensuring a clean
                        and professional finish.
                      </li>
                      <li>
                        <b>Seamless Network Integration:</b> We connect your digital 
                        signage solutions with a reliable network for uninterrupted 
                        remote content delivery and management.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center">
                <div>
                  <CustomImage
                    src={"/icons/cms.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Content Management System (CMS)
                  </div>
                  <div className="">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <b>User-Friendly CMS:</b> Easily update and manage
                        content across all screens from a single
                        dashboard—anytime, anywhere
                      </li>
                      <li>
                        <b>Training & Onboarding:</b> We empower your in-house team with comprehensive 
                        training and continues support to manage content.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center">
                <div>
                  <CustomImage
                    src={"/icons/support.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Maintenance & Technical Support{" "}
                  </div>
                  <div className="">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <b>Preventive Maintenance:</b> Routine check-ups and
                        performance tuning to keep your digital signage running
                        flawlessly.
                      </li>
                      <li>
                        <b>Prompt Tech Support:</b> Our dedicated team is always
                        on standby for fast troubleshooting and minimal
                        downtime.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 py-3 d-flex justify-content-center align-items-center top_bottom_border_anim text-center">
                <div>
                  <CustomImage
                    src={"/icons/performance.png"}
                    wrapperClss="d-block w-25  cursor-pointer m-auto"
                  />
                  <div className="fw-bold fs-4 pb-2">
                    Performance Monitoring & Analytics
                  </div>
                  <div className="">
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <b>Real-Time Insights:</b> Track screen uptime, content
                        engagement, and audience metrics through advanced
                        reporting tools.
                      </li>
                      <li>
                        <b>Actionable Reports:</b> Make data-driven decisions
                        with detailed reports on content effectiveness and
                        screen performance.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
      {/* ${style.differentiator_bg} slid_animation */}
      <section className={``}>
        <div className="container my-5">
          <div className="row p-4">
            <div className="col-md-12 text-center ">
              <div className="fs-1 fw-bold pb-4 text-white">Why WinCity?</div>
            </div>

            <div className="col-md-12 d-flex align-items-center rounded-start">
              <div className="row text-white text-center">
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh", borderColor: "#cf4c9d" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">
                      Expertise in Installation & Operation
                    </div>
                    <div className="py-2">
                      With years of hands-on experience, our team ensures
                      precise installation, optimal screen placement, and
                      seamless configuration—guaranteeing long-term screen
                      performance and minimal operational hassles.
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">
                      Tailored Screen Selection
                    </div>
                    <div>
                      We are technology agnostic, selecting only the most
                      suitable and cutting-edge digital screens that align with
                      your unique goals. Our deep understanding of display tech
                      enables us to recommend solutions with superior quality,
                      visibility, and durability.
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">
                      Comprehensive End-to-End Solutions
                    </div>
                    <div>
                      From the initial need assessment to installation,
                      integration, and ongoing maintenance, we deliver a
                      complete turnkey solution. Our approach minimizes downtime
                      and maximizes ROI by keeping your Digital Signage assets performing at
                      their best.
                    </div>
                  </div>
                </div>
                <div
                  className={`col-md-6 p-5 border-1 border d-flex align-items-center ${style.differentiator_item}`}
                  style={{ height: "50vh" }}
                >
                  <div>
                    <div className="fs-2 fw-bold">Focus on Long-Term Value</div>
                    <div>
                      We help you avoid common pitfalls in the signage industry
                      by leveraging our combined tech and operational expertise.
                      The result: a strategic investment in digital displays
                      that are reliable, future-ready, and built to last.
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
