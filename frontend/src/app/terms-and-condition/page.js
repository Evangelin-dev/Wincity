import TitleBanner from "@/components/custom/TitleBanner";
import styles from "./styles.module.css";

const content = `<p class="p1"><strong>Effective Date:</strong> April 15, 2025</p>
<p class="p1">Welcome to Wincity Infraworks LLP's website (<a href="https://www.wincityinfraworks.com/"><span class="s1">www.wincityinfraworks.com</span></a>). By accessing or using our website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our website.</p>
<p class="p1"><strong>1. Use of Website</strong></p>
<ul class="ul1">
<li class="li1"><strong>Permitted Use:</strong> You may use our website for lawful purposes only.</li>
<li class="li2"><span class="s4"><span class="s4"><strong>Prohibited Activities:</strong> You agree not to:</span></span></li>
<ul class="ul1">
<li class="li1">Use the website in any way that violates applicable laws or regulations.</li>
<li class="li1">Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
<li class="li1">Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful.</li>
</ul>
</ul>
<p class="p1"><strong>2. Intellectual Property Rights</strong></p>
<ul class="ul1">
<li class="li1"><strong>Ownership:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of Wincity Infraworks LLP or its content suppliers and is protected by intellectual property laws.</li>
<li class="li1"><strong>Restrictions:</strong> You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.</li>
</ul>
<p class="p1"><strong>3. Disclaimers</strong></p>
<ul class="ul1">
<li class="li1"><strong>No Warranty:</strong> The website is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on the site.</li>
<li class="li1"><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Wincity Infraworks LLP shall not be liable for any damages arising out of your use of the website.</li>
</ul>
<p class="p1"><strong>4. Links to Third-Party Websites</strong></p>
<p class="p1">Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of these sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
<p class="p1"><strong>5. Changes to Terms and Conditions</strong></p>
<p class="p1">We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the website after any changes constitutes your acceptance of the new Terms and Conditions.</p>
<p class="p1"><strong>6. Governing Law</strong></p>
<p class="p1">These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</p>
<p class="p1"><strong>7. Contact Us</strong></p>
<p class="p1">If you have any questions about these Terms and Conditions, please contact us at:</p>
<p class="p1"><strong>Email:</strong> kiran.masoriya@wincityinfraworks.com<br /> <strong>Phone:</strong> 022-44516981</p>
<p>&nbsp;</p>
<!-- Comments are visible in the HTML source only -->`;

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  return {
    title: "Terms & Condition Policy | WinCity InfraWorks LLP",
    description: "Terms & Condition | WinCity InfraWorks LLP",
    keywords: "Terms & Condition",
  };
}

const PrivacyPlicyPage = () => {
  return (
    <div className={styles.terms_condition_bg}>
      <TitleBanner
        title={<h1 className="text-white">Terms & Conditions</h1>}
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
