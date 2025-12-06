import { useContent } from "../context/ContentContext";

export const Blog = () => {
  const { content } = useContent();
  const { blogs } = content;

  return (
    <div className=" text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#5ddcff] mb-4">Latest Blogs</h2>

      {/* Short Backstory */}
      <p className="text-center max-w-6xl mx-auto text-white mb-10">
        I learned a lot by reading through blogs, which inspired me to explore and eventually start my own blogging journey.
        It’s been a rewarding experience to share knowledge and give back to the community.
      </p>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-4 gap-8">
        {blogs.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#121212] rounded-xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-cyan-500/50"
          >
            {/* Blog Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover"
            />

            {/* Blog Content */}
            <div className="p-5 flex flex-col justify-between h-full">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5ddcff] transition">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">Read more on Medium →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
