import Link from "next/link";

const FooterCopyRights = () => {
  return (
    <div className="d-flex justify-content-between w-100">
      <div>© 2024 WinCity InfraWorks LLP.</div>
      <div>
        Designed & Developed BY{" "}
        <Link href={`https://botdigitalsolutions.com/`}>TheBot</Link>
      </div>
    </div>
  );
};

export default FooterCopyRights;
