"use client";
import Link from "next/link";
import React from "react";
interface BlogDataType {
  header_title: string,
  header_description: string,
  animated_title: string,
  button_value: string,
  post_title: string,
  post_image: string,
  post_description: string,
  date: string,
  button_title: string
}
interface BlogPageType {
  BlogData: BlogDataType[]
}
const BlogPage: React.FC<BlogPageType> = ({ BlogData }) => {
  const blogs = [
    {
      date: "02 Nov 2024",
      title: "The Importance of WordPress Maintenance",
      description:
        "WordPress is a popular CMS due to its flexibility. However, regular maintenance is crucial to keep it operational at all times.",
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png",
    },
    {
      date: "Oct 20, 2024",
      title: "What are the missions of the freelance developer?",
      description:
        "The freelance developer works on designing and developing tailored web applications for clients.",
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png",
    },
    {
      date: "August 28, 2024",
      title: "Web development: focus on the latest trends",
      description:
        "Discover the latest trends in the web development world, from AI integrations to modern frameworks.",
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png",
    },
    {
      date: "August 10, 2024",
      title: "Website creation: what mistakes should you avoid?",
      description:
        "Avoid common mistakes in website creation to ensure a better user experience and maintainability.",
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-primary text-lg uppercase flex items-center font-extrabold justify-center">
          <span className="w-12 h-[2px] bg-primary"></span>
          Blog
          <span className="w-12 h-[2px] bg-primary"></span>
        </h1>
        <h1 className="text-4xl font-extrabold text-gray-800">
          Latest
          <span className="underline decoration-primary underline-offset-2 decoration-8">
            items
          </span>
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="container mx-auto md:px-0 items-center mb-32 rounded-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto rounded-lg">
          {BlogData.map((blog, index) => (
            <div
              key={index}
              className="flex bg-white shadow-2xl rounded-2xl hover:shadow-lg transition group h-[350px]"
            >
              {/* Image Section */}
              <div className="w-2/3 rounded-2xl">
                <img
                  src={blog?.post_image}
                  alt={"image"}
                  className="!m-0 w-full h-full object-cover rounded-l-2xl"
                />
              </div>

              {/* Text Section */}
              <div className="container mx-auto p-6 w-2/3 flex flex-col">
                <p className="text-gray-500 text-sm mb-3 flex items-center">
                  <span className="mr-2">📅</span>
                  {blog.date}
                </p>
                <div className="text-md font-semibold text-gray-800  pt-4 pb-2">
                  {blog.post_title}
                </div>
                <p className="text-gray-600 mb-6 text-base overflow-hidden">{blog.post_description}</p>
                <Link href={{
                  pathname: "/blog-nugen",
                  query: {
                    blog: blog?.button_value,
                  }
                }} className="text-blue-500 font-medium relative group">
                  {blog?.button_title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
