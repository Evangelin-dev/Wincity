"use client";

import { useRef, useState, useEffect } from "react";
import style from "./style.module.css";
import CustomImage from "../custom/Image";
import Link from "next/link";

const BlogsList = () => {
  const [listData, setListData] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const currentUrl = useRef(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/?access_key=${process.env.NEXT_PUBLIC_CLIENT_ID}`
  );

  const getBlogsData = async () => {
    setLoading(true);
    try {
      const response = await fetch(currentUrl.current);
      const blogsData = await response.json();

      setNextUrl(blogsData?.next);
      setListData(prev => [...prev, ...blogsData.results]);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogsData();
  }, []);

  return (
    <div className="row g-0 justify-content-start flex-wrap">
      {/* Loader during first fetch */}
      {loading && listData.length === 0 && (
        <div className="text-center py-3">Loading blogs...</div>
      )}

      {/* No data after loading */}
      {!loading && listData.length === 0 && (
        <div className="text-center py-3">Data Not Available</div>
      )}

      {/* Blog Cards */}
      {listData?.map((blog, blogIdx) => (
        <div key={`blog-${blogIdx}`}>
          <div className={`${style.blog_container} d-flex flex-wrap fadeIn`}>
            <CustomImage
              src={blog.image}
              imgClass={style.blog_img}
              wrapperClss={style.img_wrapper}
            />
            <div
              className={`px-3 d-flex align-items-center ${style.blog_short_desc}`}
            >
              <div>
                <div className={`${style.blog_item__info} pb-2`}>
                  <span className="pe-2">
                    {new Date(blog?.date).toLocaleDateString()}
                  </span>
                  <span>
                    <i
                      className={`fa fa-circle ${style.dot_icon} pe-2`}
                      aria-hidden="true"
                    ></i>
                    {blog.time_to_read}
                  </span>
                </div>
                <div className={`${style.blog_title} text-capitalize`}>
                  <Link href={`/blogs/${blog.slug}`} className="text-capitalize">
                    {blog.title}
                  </Link>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.description,
                  }}
                ></div>
                <Link href={`/blogs/${blog.slug}`}>
                  <span> Read more</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-bottom border-2 py-1"></div>
        </div>
      ))}

      {/* Load More Button */}
      {nextUrl && (
        <div className="d-flex justify-content-end py-3">
          <span
            onClick={() => {
              if (!loading) {
                currentUrl.current = nextUrl;
                getBlogsData();
              }
            }}
            className="cursor-pointer text-primary"
            style={{ opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Loading..." : "Load More ..."}
          </span>
        </div>
      )}
    </div>
  );
};

export default BlogsList;
