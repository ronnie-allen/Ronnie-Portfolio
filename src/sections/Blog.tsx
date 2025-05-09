// src/sections/Blog.tsx
export const Blog = () => (
    <div className="bg-[#0b0b0b] text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-[#5ddcff] mb-10">Latest Blogs</h2>
      <div className="grid gap-6">
        <a href="https://medium.com/@ronniejeffrey/cnn-demystified" target="_blank" className="bg-[#1a1a1a] p-5 rounded hover:text-red-500 transition">
          🔍 CNN Demystified: Understanding Convolutional Layers
        </a>
        <a href="https://medium.com/@ronniejeffrey/ai-in-music" target="_blank" className="bg-[#1a1a1a] p-5 rounded hover:text-red-500 transition">
          🎵 AI in Music: How Machines Are Learning to Compose
        </a>
      </div>
    </div>
  );
  