import TitleBanner from "@/components/custom/TitleBanner";
import styles from "./styles.module.css";

const content = `<p class="p1"><strong>Effective Date:</strong> April 15, 2025</p>
<p class="p1">Wincity Infraworks ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website <a href="https://www.wincityinfraworks.com/"><span class="s1">www.wincityinfraworks.com</span></a>.</p>
<p class="p1"><strong>1. Information We Collect</strong></p>
<p class="p1">We may collect the following types of personal information:</p>
<ul class="ul1">
<li class="li1"><strong>Contact Information:</strong> Name, email address, phone number, and any other details you provide when contacting us.</li>
<li class="li1"><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
</ul>
<p class="p1"><strong>2. How We Use Your Information</strong></p>
<p class="p1">We use the collected information to:</p>
<ul class="ul1">
<li class="li1">Respond to your inquiries and provide customer support.</li>
<li class="li1">Improve our website and services.</li>
<li class="li1">Send you updates, promotional materials, or other communications, if you have opted in to receive them.</li>
</ul>
<p class="p1"><strong>3. Sharing Your Information</strong></p>
<p class="p1">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>
</ul>

<p class="p1"><strong>Legal Obligations: </strong>Governmental, administrative, regulatory, or judicial authorities as required by law or in connection with legal proceedings.</p>


<p class="p1"><strong>4. Data Security</strong></p>
<p class="p1">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is entirely secure, and we cannot guarantee absolute security.</p>
<p class="p1"><strong>5. Your Rights</strong></p>
<p class="p1">You have the right to:</p>
<ul class="ul1">
<li class="li1">Access the personal information we hold about you.</li>
<li class="li1">Request correction or deletion of your personal information.</li>
<li class="li1">Opt out of receiving marketing communications from us.</li>
</ul>
<p class="p1">To exercise these rights, please contact us using the information provided below.</p>
<p class="p1"><strong>6. Cookies</strong></p>
<p class="p1">Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the website.</p>
<p class="p1"><strong>7. Changes to This Privacy Policy</strong></p>
<p class="p1">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
<p class="p1"><strong>8. Contact Us</strong></p>
<p class="p1">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
<p class="p1"><strong>Email:</strong> admin@wincityinfraworks.com<br /> <strong>Phone:</strong> 022-44516981</p>`;

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  return {
    title: "Privacy Policy | WinCity InfraWorks LLP",
    description: "Privacy Policy | WinCity InfraWorks LLP",
    keywords: "Privacy Policy",
  };
}

const PrivacyPlicyPage = () => {
  return (
    <div className={styles.terms_policy_bg}>
      <TitleBanner
        title={<h1 className="text-white">Privacy Policy</h1>}
        fontSize="5rem"
        bgColor="white"
        height="30vh"
        showContactUs={false}
      />
      <div className={`container py-2 text-white`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default PrivacyPlicyPage;
