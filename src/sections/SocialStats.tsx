import { FaInstagram, FaLinkedin, FaDiscord, FaTelegram, FaMedium } from "react-icons/fa";

export const SocialStats = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/ronnie-a-jeffrey-0901b22bb/",
      color: "hover:text-blue-400",
      followers: "500+",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/ronnie_allen_jeffrey?igsh=MWd1aHY3amk4YmxpMg==",
      color: "hover:text-pink-400",
      followers: "1k+",
    },
    {
      name: "Discord",
      icon: FaDiscord,
      url: "https://discord.gg/ronnieallen6456",
      color: "hover:text-indigo-400",
      followers: "20+",
    },
    {
      name: "Telegram",
      icon: FaTelegram,
      url: "https://t.me/jeffronall",
      color: "hover:text-sky-400",
      followers: "150+",
    },
    {
      name: "Medium",
      icon: FaMedium,
      url: "https://medium.com/@ronnieallen2005",
      color: "hover:text-green-500",
      followers: "10+",
    },
  ];

  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-red-500 mb-4">Let's Connect</h3>
          <p className="text-gray-400 text-lg">Follow my journey across social platforms</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-800/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <social.icon className="text-3xl" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg">{social.name}</div>
                  <div className="text-gray-400">{social.followers} followers</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">💫 Connect and collaborate with me</p>
        </div>
      </div>
    </section>
  );
};
