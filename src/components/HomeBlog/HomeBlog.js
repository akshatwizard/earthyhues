"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://www.exportleftovers.in/api-home-page-travel-blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-5">
      <div className="container">
        <div className="sec-title text-center">
          <p className="sec-title__tagline">World’s best Travel Experience</p>

          <h2 className="sec-title__title">Check Our Travel Blogs</h2>
        </div>
      </div>
      <section class="tour-listing ">
        <div class="container">
          <div class="row">
            {blogs.map((blog) => (
              <div className="col-xl-4 col-md-6" key={blog.travel_blogs_id}>
                <div className="b-container">
                  <div className="b-wraper">
                    <Link href={`/blog/${blog.travel_blog_url}`}>
                      <img
                        src={blog.travel_blog_img}
                        alt={blog.travel_blogs_title}
                        style={{
                          width: "100%",
                          objectFit: "contain",
                          objectPosition: "top",
                        }}
                      />
                    </Link>
                    <div>
                      <h3 className="tour-listing__card-title">
                        <Link href={`/blog/${blog.travel_blog_url}`}>
                          {blog.travel_blogs_title}
                        </Link>
                      </h3>
                    </div>
                    <div className="dets-container">
                      <p
                        className="tour-listing__card-text text-small"
                        dangerouslySetInnerHTML={{
                          __html:
                            blog.travel_blog_details.slice(0, 150) + "...",
                        }}
                      ></p>
                    </div>
                    <a href={`/blog/${blog.travel_blog_url}`} className="rdmor trevlo-btn trevlo-btn--base fmob mt-4">
                      <span>Read more</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlog;
