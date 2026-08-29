import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaDiscord,
  FaTelegram,
  FaEnvelope,
  FaPhoneAlt,
  FaMedium,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";
const ProfileImg = "/RA-Profile.png";

const PROFILE = {
  name: "Ronnie A Jeffrey",
  title: "AI Engineer & Full-Stack Developer",
  location: "Coimbatore, India",
  email: "ronnieallen2005@gmail.com",
  phone: "+919952860468",
  portfolio: "https://ronnie-a-jeffrey.tech",
} as const;

const SOCIALS = [
  { href: "https://www.linkedin.com/in/ronnie-a-jeffrey/", icon: FaLinkedin, label: "LinkedIn", color: "hover:text-[#0077b5]" },
  { href: "https://github.com/ronnie-allen", icon: FaGithub, label: "GitHub", color: "hover:text-white" },
  { href: "https://x.com/Ronnie_Allen_J", icon: FaXTwitter, label: "X", color: "hover:text-white" },
  { href: "https://huggingface.co/Ronnie-Allen", icon: SiHuggingface, label: "HuggingFace", color: "hover:text-[#FFD21E]" },
  { href: "https://medium.com/@ronnieallen2005", icon: FaMedium, label: "Medium", color: "hover:text-[#00ab6c]" },
  { href: "https://www.instagram.com/ronnie_allen_jeffrey?igsh=MWd1aHY3amk4YmxpMg==", icon: FaInstagram, label: "Instagram", color: "hover:text-pink-500" },
  { href: "https://facebook.com/ronnie-allen", icon: FaFacebook, label: "Facebook", color: "hover:text-blue-600" },
  { href: "https://wa.me/919952860468", icon: FaWhatsapp, label: "WhatsApp", color: "hover:text-green-500" },
  { href: "https://discord.gg/ronnieallen6456", icon: FaDiscord, label: "Discord", color: "hover:text-indigo-500" },
  { href: "https://t.me/jeffronall", icon: FaTelegram, label: "Telegram", color: "hover:text-sky-400" },
];

function generateVCard(): string {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${PROFILE.name}`,
    `N:Jeffrey;Ronnie A;;;`,
    `TITLE:${PROFILE.title}`,
    `TEL;TYPE=CELL:${PROFILE.phone}`,
    `EMAIL:${PROFILE.email}`,
    `URL:${PROFILE.portfolio}`,
    `ADR;TYPE=WORK:;;Coimbatore;;;;India`,
    "END:VCARD",
  ].join("\r\n");
}

function downloadVCard() {
  const blob = new Blob([generateVCard()], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Ronnie_A_Jeffrey.vcf";
  a.click();
  URL.revokeObjectURL(url);
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export const Me = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center font-inter">
      <Helmet>
        <title>Ronnie A Jeffrey | Contact Card</title>
        <meta name="description" content="Connect with Ronnie A Jeffrey — AI Engineer & Full-Stack Developer. Quick access to phone, email, WhatsApp, and social links." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Ronnie A Jeffrey | Contact Card" />
        <meta property="og:description" content="Quick access to phone, email, WhatsApp, and social links." />
        <meta property="og:url" content="https://ronnie-a-jeffrey.tech/me" />
        <meta property="og:type" content="profile" />
        <meta name="theme-color" content="#000000" />
      </Helmet>

      {/* Gradient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_300px_at_50%_30%,#fbfbfb18,#000)]" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-5 py-10 flex flex-col items-center gap-8">
        {/* Profile */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-red-500/60 shadow-[0_0_24px_rgba(239,68,68,0.25)]">
            <img
              src={ProfileImg}
              alt={PROFILE.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="text-sm text-gray-400 mt-1">{PROFILE.title}</p>
            <p className="text-xs text-gray-500 mt-1">{PROFILE.location}</p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="w-full grid grid-cols-2 gap-3"
        >
          <a
            href={`tel:${PROFILE.phone}`}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/40 rounded-xl py-3.5 text-sm font-medium transition active:scale-95"
          >
            <FaPhoneAlt className="text-green-400" />
            <span>Call</span>
          </a>
          <a
            href={`https://wa.me/919952860468?text=Hi%20Ronnie!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/40 rounded-xl py-3.5 text-sm font-medium transition active:scale-95"
          >
            <FaWhatsapp className="text-green-400" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${PROFILE.email}?subject=Nice%20to%20meet%20you!&body=Hi%20Ronnie,`}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 rounded-xl py-3.5 text-sm font-medium transition active:scale-95"
          >
            <FaEnvelope className="text-red-400" />
            <span>Email</span>
          </a>
          <button
            onClick={downloadVCard}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-red-600/20 border border-white/10 hover:border-red-500/40 rounded-xl py-3.5 text-sm font-medium transition active:scale-95 cursor-pointer"
          >
            <FaDownload className="text-red-400" />
            <span>Save Contact</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="w-full"
        >
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest text-center mb-3">
            Socials
          </h2>
          <div className="grid grid-cols-5 gap-2">
            {SOCIALS.map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex items-center justify-center p-3 bg-white/5 rounded-lg text-gray-400 transition-all hover:bg-white/10 hover:-translate-y-0.5 ${color}`}
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* QR Code */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
            Scan for Portfolio
          </h2>
          <a
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:shadow-[0_0_28px_rgba(239,68,68,0.3)] transition"
          >
            <QRCodeSVG
              value={PROFILE.portfolio}
              size={140}
              bgColor="#ffffff"
              fgColor="#111111"
              level="M"
              includeMargin={false}
            />
          </a>
          <a
            href={PROFILE.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition"
          >
            {PROFILE.portfolio.replace("https://", "")}
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="text-xs text-gray-600 text-center mt-4"
        >
          Let's build something great together
        </motion.p>
      </div>
    </div>
  );
};
