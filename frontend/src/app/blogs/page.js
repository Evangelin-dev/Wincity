import CustomImage from "@/components/custom/Image";
import style from "./style.module.css";
import TitleBanner from "@/components/TitleBanner";
import Link from "next/link";
import BlogsList from "@/components/BlogsList";

export async function generateMetadata({ params, searchParams }, parent) {
  const id = params.id;
  // const product = await fetchPosts();
  return {
    title: "Blogs | WinCity InfraWorks LLP",
    description: "WinCity InfraWorks LLP",
    keywords: "WinCity InfraWorks LLP",
  };
}

const BlogListPage = async ({ searchParams }) => {
  return (
    <>
      <TitleBanner
        title={`WinCity InfraWorks LLP Blog`}
        bgColor="linear-gradient(90deg, #04041e 5%,rgb(35, 35, 89) 24%, #000000 100%)"
        showContactUs={false}
      />
      <div className={``}>
        <div className={`container  ${style.blog_page_bg} py-5`}>
          <BlogsList />
        </div>
      </div>
    </>
  );
};

export default BlogListPage;
