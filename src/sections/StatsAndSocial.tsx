import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaDiscord, FaTelegram, FaMedium } from "react-icons/fa";

interface GithubData {
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
}

const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ronnie-a-jeffrey-0901b22bb/",
    color: "hover:border-blue-400",
    followers: "500+",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/ronnie_allen_jeffrey?igsh=MWd1aHY3amk4YmxpMg==",
    color: "hover:border-pink-400",
    followers: "1k+",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    url: "https://discord.gg/ronnieallen6456",
    color: "hover:border-indigo-400",
    followers: "20+",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/jeffronall",
    color: "hover:border-sky-400",
    followers: "150+",
  },
  {
    name: "Medium",
    icon: FaMedium,
    url: "https://medium.com/@ronnieallen2005",
    color: "hover:border-green-400",
    followers: "10+",
  },
];

export const StatsAndSocial = () => {
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
    <section className="py-16 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">Metrics & Community</h3>
          <p className="text-gray-400 text-lg">Track my progress and connect across platforms</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* GitHub Stats */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <FaGithub className="text-4xl text-gray-300" />
              <div>
                <h4 className="text-2xl font-bold text-white">GitHub Profile</h4>
                <p className="text-gray-400 text-sm">Real-time development stats</p>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-3 gap-4">
                {Array(3).fill(null).map((_, index) => (
                  <div key={index} className="text-center animate-pulse">
                    <div className="h-8 bg-gray-700 rounded w-12 mx-auto mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-16 mx-auto"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-400 text-sm">Unable to load GitHub data</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">{data?.public_repos || 0}</div>
                  <div className="text-gray-400 text-sm">Repos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{data?.followers || 0}</div>
                  <div className="text-gray-400 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{data?.following || 0}</div>
                  <div className="text-gray-400 text-sm">Following</div>
                </div>
              </div>
            )}

            <a
              href="https://github.com/ronnie-allen"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25 text-white"
            >
              View Profile →
            </a>
          </div>

          {/* Social Stats */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">Social Community</h4>
              <p className="text-gray-400 text-sm">Connect across platforms</p>
            </div>

            <div className="space-y-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 bg-gray-800/50 p-3 rounded-xl border border-gray-600 transition-all duration-300 hover:scale-102 hover:bg-gray-700/50 ${social.color}`}
                >
                  <div className="p-2 bg-gray-800/70 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <social.icon className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{social.name}</div>
                    <div className="text-gray-400 text-sm">{social.followers}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center text-gray-500">
              💫 Let's build something amazing together
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
