export const Blog = () => {
  const blogPosts = [
    {
      title: "Why Every Developer Should Learn Markdown (And Why Many Still Struggle With It)",
      url: "https://medium.com/@ronnieallen2005/why-every-developer-should-learn-markdown-and-why-many-still-struggle-with-it-fac9c8e91ccc",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5XvsEOBDs9sKu17k3mX0rg.gif",
    },
    {
      title: "The Rise of AI Agents — How They Work and What’s Next",
      url: "https://medium.com/@ronnieallen2005/the-rise-of-ai-agents-how-they-work-and-whats-next-8cba469abfd0",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*G2QEzYpAoIAyRyRw",
    },
    {
      title: "Can O3 Mini Compete? A Brutally Honest Look at DeepSeek R1’s Power",
      url: "https://medium.com/@ronnieallen2005/is-deepseek-r1-the-ultimate-reasoning-machine-over-o3-mini-e740e8a92bcb",
      image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*cWNER1Bf85H2nrvNVJoLcg.png",
    },
    {
      title: "A Beginner’s Guide to Installing and Exploring ORB-SLAM3: Unlocking the Power of Real-Time Localization & Mapping",
      url: "https://medium.com/@ronnieallen2005/a-beginners-guide-to-installing-and-exploring-orb-slam3-0ef6b0f7e3fc",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qJMDatUhkbIh4LSuKCUsyg.png",
    },
  ];

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
        {blogPosts.map((post, index) => (
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
