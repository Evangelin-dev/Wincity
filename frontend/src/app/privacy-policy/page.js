import TitleBanner from "@/components/custom/TitleBanner";
import styles from "./styles.module.css";

const content = `Comming Soon`;

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
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
        title={<h1 className="text-black">Privacy Policy</h1>}
        fontSize="5rem"
        bgColor="white"
        height="30vh"
        showContactUs={false}
      />
      <div className={`container py-2 text-black`}>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default PrivacyPlicyPage;
