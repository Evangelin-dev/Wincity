import TitleBanner from "@/components/custom/TitleBanner";
import styles from "./styles.module.css";

const content = `<p class="p1"><strong>Acceptance of Terms:</strong> April 15, 2025</p>
<p class="p1">By using this website, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other policies referenced herein. Wincity reserves the right to update or modify these terms at any time without prior notice. Your continued use of the website constitutes acceptance of those changes.</p>
<p class="p1"><strong>1. Use of Website</strong></p>
<ul class="ul1">
<li class="li1"><strong>Permitted Use:</strong> You may use our website for lawful purposes only.</li>
<li class="li2"><span class="s4"><span class="s4"><strong>Prohibited Activities:</strong> You agree not to:</span></span></li>
<ul class="ul1">
<li class="li1">Use the website in any way that violates applicable laws or regulations.</li>
<li class="li1">Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.</li>
<li class="li1">Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful.</li>
<li class="li1">Use this website to engage in any unlawful, illegal, fraudulent, or harmful activity.</li>
</ul>
</ul>
<p class="p1"><strong>2. Intellectual Property Rights</strong></p>
<ul class="ul1">
<li class="li1"><strong>Ownership:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of Wincity Infraworks LLP or its content suppliers and is protected by intellectual property laws.</li>
<li class="li1"><strong>Restrictions:</strong> You may not reproduce, distribute, modify, or create derivative works of any content without our prior written consent.</li>
<li class="li1"><strong>Restrictions:</strong> You may not Modify, decompile, reverse-engineer, or otherwise attempt to derive source code from the website</li>
</ul>
<p class="p1"><strong>3. Disclaimers</strong></p>
<ul class="ul1">
<li class="li1"><strong>No Warranty:</strong> The website is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on the site.</li>
<li class="li1"><strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Wincity Infraworks LLP shall not be liable for any damages arising out of your use of the website.</li>
</ul>
<p class="p1"><strong>4. Accuracy of Information</strong></p>
<p class="p1">Wincity strives to provide accurate and updated information; however, we do not warrant that all content is complete, accurate, or up-to-date. All information on the website is provided “as-is” and is subject to change without notice.</p>
<p class="p1"><strong>5. Limitation of Liability</strong></p>
<p class="p1">Wincity Infraworks LLP shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
<ul class="ul1">
<li class="li1">Any inaccuracies or omissions in the content</li>
<li class="li1">Unauthorized access or alterations to your transmissions or data. </li>
<li class="li1">You agree that your use of the website is at your own risk.</li>
</ul>
<p class="p1"><strong>6. User Submissions</strong></p>
<p class="p1">Although this website does not currently permit user-generated content, any suggestions, ideas, feedback, or other information you submit to Wincity will be considered non-confidential and non-proprietary, unless explicitly stated otherwise in writing</p>
<p class="p1"><strong>7. Contact Us</strong></p>
<p class="p1">If you have any questions about these Terms and Conditions, please contact us at:</p>
<p class="p1"><strong>Email:</strong> admin@wincityinfraworks.com<br /> <strong>Phone:</strong> 022-44516981</p>
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
