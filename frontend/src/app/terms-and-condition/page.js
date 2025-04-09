import TitleBanner from "@/components/custom/TitleBanner";
import styles from "./styles.module.css";

const content = `Comming Soon`;

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
        title={<h1 className="text-black">Terms & Conditions</h1>}
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
