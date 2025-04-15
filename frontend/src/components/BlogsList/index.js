"use client";

import { useRef, useState } from "react";
import style from "./style.module.css";
import CustomImage from "../custom/Image";
import Link from "next/link";

const BlogsList = () => {
  const [listData, setListData] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const currentUrl = useRef(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/?access_key=${process.env.NEXT_PUBLIC_CLIENT_ID}`
  );

  const getBlogsData = async () => {
    let data = await fetch(currentUrl.current);
    let blogsData = await data.json();
    setNextUrl(blogsData?.next);
    setListData([...listData, ...blogsData.results]);
  };

  useState(() => {
    getBlogsData();
  }, []);
  return (
    <div className="row g-0 justify-content-start flex-wrap">
      {listData?.length == 0 && <div> Data Not Available</div>}
      {listData?.map((blog, blogIdx) => {
        return (
          <div className="" key={`blog-${blogIdx}`}>
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
                      {new Date(blog?.date).toLocaleString("lookup")}
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
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="text-capitalize"
                    >
                      {blog.title}
                    </Link>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.description,
                    }}
                  ></div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <span href="#"> Read more</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-bottom border-2 py-1"></div>
          </div>
        );
      })}
      {nextUrl && (
        <div className="d-flex justify-content-end text-">
          <span
            onClick={() => {
              currentUrl.current = nextUrl;
              getBlogsData();
            }}
            className="cursor-pointer"
          >
            Load More ...
          </span>
        </div>
      )}
    </div>
  );
};

export default BlogsList;
