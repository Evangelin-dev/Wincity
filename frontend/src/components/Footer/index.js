import CustomImage from "../custom/Image";
import style from "./styles.module.css";
import logoStyle from "../NavBar/styles.module.css";
import Link from "next/link";
import CustomButton from "../custom/CustomButton";
import ContactUs from "../ContactUs";

const Footer = () => {
  return (
    <footer className={`text-color-white footer mt-auto py-3 text-white`}>
      <ContactUs />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <CustomImage
              src={"/logo.png"}
              wrapperClss={`${logoStyle.logo_img_container} m-0 pb-3`}
              height="auto"
              imgClass={"m-0"}
            />
            <div>WinCity InfraWorks LLP, is an initiative of Lokmat Media.</div>
            <div className="py-3">
              <Link href="#" className={`pe-2`} target="_blank">
                <i
                  className={`fa fa-2x fa-facebook-square ${style.share_button}`}
                ></i>
              </Link>
              <Link href="#" className={`px-2`} target="_blank">
                <i
                  className={`fa fa-2x fa-instagram ${style.share_button}`}
                ></i>
              </Link>
              <Link href="#" className={`px-2`} target="_blank">
                <i
                  className={`fa fa-2x fa-linkedin-square ${style.share_button}`}
                ></i>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${style.footer_menu_header}`}>Useful Links</div>
            <div className="fw-light py-2">
              <Link href={"/#aboutUs"} className="py-2 text-white nav-link">
                About Us
              </Link>
              <Link href={"/#contactUs"} className="py-2 text-white nav-link">
                Contact Us
              </Link>
              <Link href={"/services"} className="py-2 text-white nav-link">
                Services
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${style.footer_menu_header}`}>Other</div>
            <div className="fw-light py-2">
              <Link
                href={"/privacy-policy"}
                className="py-2 text-white nav-link"
              >
                Privacy Policy
              </Link>
              <Link
                href={"/terms-and-condition"}
                className="py-2 text-white nav-link"
              >
                Term & Conditions
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className={`${style.footer_menu_header}`}>Contact</div>
            <div className="py-2 text-white nav-link">
              <i class="fa fa-map-marker pe-2 fs-4" aria-hidden="true"></i>
              <span>
                B-126, FLOOR 12TH, PLOT NO 210, B WING, MITTAL TOWER, FREE PRESS
                JOURNAL MARG, Nariman Point, Mumbai.
              </span>
            </div>
            <div className="py-2 text-white nav-link">
              <i class="fa fa-envelope-o pe-2 fs-4" aria-hidden="true"></i>{" "}
              <span>kiran.masoriya@wincityinfraworks.com</span>
            </div>
            <div className="py-2 text-white nav-link">
              <i class="fa fa-phone-square pe-2 fs-4" aria-hidden="true"></i>{" "}
              022-44516981
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-start pt-5 flex-wrap">
          <div>© 2024 WinCity InfraWorks LLP.</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
