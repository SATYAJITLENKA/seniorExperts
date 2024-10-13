import { blogData } from "@/utils/data/blogsData";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <div className="max-w-6xl m-auto mt-11">
      <h3 className="text-[#23299d] font-bold text-3xl text-center">
        New and Blogs
      </h3>
      <p className="text-center pt-3 pb-12">
        Explore a verify of topics and gain knowledge fron experienced <br />
        professionals across diffrent industries
      </p>
      <div className="grid md:grid-cols-2 gap-7">
        {blogData.map((ele) => (
          <BlogCard
            id={ele.id}
            tag={ele.tag}
            name={ele.name}
            date={ele.date}
            title={ele.title}
            des={ele.des}
            img={ele.img}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
