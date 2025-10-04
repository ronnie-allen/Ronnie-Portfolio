import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface GithubData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
}

export const GithubStats = () => {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/ronnie-allen");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const githubData = await response.json();
        setData(githubData);
        setError(null);
      } catch (err) {
        setError("Unable to load GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FaGithub className="text-5xl text-gray-300 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-red-500 mb-2">GitHub Profile</h3>
          <p className="text-gray-400 text-lg">Live statistics from my development journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {loading ? (
            Array(3).fill(null).map((_, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 animate-pulse">
                <div className="text-center">
                  <div className="h-8 bg-gray-700 rounded w-16 mx-auto mb-3"></div>
                  <div className="h-4 bg-gray-700 rounded w-20 mx-auto"></div>
                </div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
                <p className="text-red-400 font-medium">Unable to load GitHub data</p>
                <p className="text-gray-400 text-sm mt-2">Please check back later</p>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {data?.public_repos || 0}
                  </div>
                  <div className="text-gray-400 font-medium mt-2">Repositories</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    {data?.followers || 0}
                  </div>
                  <div className="text-gray-400 font-medium mt-2">Followers</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    {data?.following || 0}
                  </div>
                  <div className="text-gray-400 font-medium mt-2">Following</div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/ronnie-allen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25"
          >
            <FaGithub />
            Explore GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};
