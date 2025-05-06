import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import CommonBanner from "@/components/custom/CommonBanner";

const AboutUs = () => {
  return (
    <div>
      <CommonBanner enableBlur={true}
  title="About WinCity InfraWorks LLP"
  subTitle="At WinCity InfraWorks LLP, we offer a full spectrum of digital signage and display solutions, designed to deliver long-term value and uninterrupted performance."
 
/>


      <div className="container">
       

        <section
          className={`mb-5 mt-6 pt-6 ${style.home_scheme_section}`}
          id="aboutUs"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="fs-5 fw-light py-2  ">
                  WinCity InfraWorks LLP, an initiative of Lokmat Media, 
                  is a forward-thinking Integrated Digital Media and infrastructure 
                  solutions provider. Backed by the legacy and strength of Lokmat Media Pvt. Ltd., 
                  one of India’s largest regional print media houses and the leading Marathi 
                  publication group, WinCity has emerged as a powerful player in the 
                  Out-of-Home (OOH) advertising, digital signage, and content-driven display 
                  solutions space.

                  </div>

                  <div className="fs-5 fw-light py-2  ">
                  With an extensive network and strategic collaborations, our 
                  associates boast a robust inventory of over 3,000+ outdoor 
                  and indoor advertising assets. This includes:
                  </div>

                  <div className="fs-5 my-4">
                    <div className={`lh-1 py-2`}>
                      <span className="fs-5">
                      1000+ high-impact hoardings across Mumbai and surrounding metros{" "}
                      </span>
                    </div>
                    <hr className=""></hr>
                    <div className={`lh-1`}>
                      <span className="fs-5">
                      2000+ static and digital screens placed in premium residential societies, 
                      corporate parks, malls, and public utility spaces
                      </span>
                    </div>
                    <hr className=""></hr>
                    <div className={`lh-1`}>
                      <span className="fs-5">
                      A rapidly growing presence in digital signage solutions that combine hardware 
                      installation, content management, and performance monitoring.
                      </span>
                    </div>
                  </div>

                  <div className="fs-5 fw-light py-2  ">
                    Our team is equipped with deep expertise in managing
                    end-to-end infrastructure—from site surveys, hardware
                    procurement, and installation to content creation, network
                    operation, and ongoing maintenance. We specialize in
                    delivering high-visibility, high-ROI display solutions that
                    are scalable and strategically placed to maximize brand
                    exposure.
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
  <CustomImage
    src="/about-us/2151913709.png"
    imgClass="img-fluid w-100 object-fit-cover rounded"
  />
</div>

            </div>
            <div className="col-md-12 py-5 text-center fs-2">
              <b>At WinCity</b>, we go beyond just display spaces—we offer a
              complete ecosystem for digital outdoor branding, hyperlocal
              marketing, OOH infrastructure management, and real-time content
              integration.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
