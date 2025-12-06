import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaDiscord,
  FaTelegram,
  FaEnvelope,
  FaPhone,
  FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiHuggingface } from "react-icons/si";
import CV from "../assets/RonnieAJeffrey_CV.pdf";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_vrif9mm", // Replace with your EmailJS service ID
        "template_g5znja3", // Replace with your EmailJS template ID
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: "Ronnie A Jeffrey",
          to_email: "ronnieallen2005@gmail.com",
        },
        "z_jiKb_kmS8sjJp6c" // Replace with your EmailJS public key
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden text-white py-20 px-4 sm:px-6">
      {/* Floating blobs */}
      <div className="absolute w-72 h-72 bg-[#004FC7] rounded-full mix-blend-lighten blur-3xl opacity-20 top-20 left-10 animate-[float1_6s_ease-in-out_infinite]"></div>
      <div className="absolute w-72 h-72 bg-red-600 rounded-full mix-blend-lighten blur-3xl opacity-20 top-1/2 right-10 animate-[float2_8s_ease-in-out_infinite]"></div>
      <div className="absolute w-72 h-72 bg-green-500 rounded-full mix-blend-lighten blur-3xl opacity-20 bottom-10 left-1/2 animate-[float3_7s_ease-in-out_infinite]"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-500 mb-12 z-10 relative">
        Contact Me
      </h2>

      {/* Responsive Container */}
      <div className="z-10 relative flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-white/10 shadow-lg">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className={`w-full bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.name ? "focus:ring-yellow-400 ring-1 ring-yellow-400" : "focus:ring-red-600"
                  }`}
              />
              {errors.name && (
                <p className="text-yellow-400 text-sm mt-1">{String(errors.name.message)}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                placeholder="Your Email"
                className={`w-full bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition ${errors.email ? "focus:ring-yellow-400 ring-1 ring-yellow-400" : "focus:ring-red-600"
                  }`}
              />
              {errors.email && (
                <p className="text-yellow-400 text-sm mt-1">{String(errors.email.message)}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
                placeholder="Your Message"
                className={`w-full bg-white/10 p-4 rounded-lg h-40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition resize-none ${errors.message ? "focus:ring-yellow-400 ring-1 ring-yellow-400" : "focus:ring-red-600"
                  }`}
              />
              {errors.message && (
                <p className="text-yellow-400 text-sm mt-1">{String(errors.message.message)}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed transition p-4 rounded-lg font-semibold shadow-md text-lg"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-between w-full lg:w-1/2 space-y-8 lg:space-y-0">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:ronnieallen2005@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-red-400 transition group p-3 rounded-lg hover:bg-white/5"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-red-600/20 transition">
                  <FaEnvelope className="text-red-500 text-xl" />
                </div>
                <span className="text-lg">ronnieallen2005@gmail.com</span>
              </a>
              <a
                href="tel:+919952860468"
                className="flex items-center gap-4 text-gray-300 hover:text-red-400 transition group p-3 rounded-lg hover:bg-white/5"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-green-600/20 transition">
                  <FaPhone className="text-green-400 text-xl" />
                </div>
                <span className="text-lg">+91 99528 60468</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="mailto:ronnieallen2005@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Ronnie,%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20opportunity."
                className="flex-1 bg-white/10 hover:bg-red-600 transition text-white px-6 py-3 rounded-lg font-semibold shadow-md text-center border border-white/10 hover:border-red-600"
              >
                Hire Me
              </a>
              <a
                href={CV}
                download
                className="flex-1 bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg font-semibold shadow-md text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-6 text-white border-t border-white/10 pt-8">Connect with me</h4>
            <div className="grid grid-cols-5 gap-4 text-2xl text-gray-400">
              <SocialLink href="https://www.linkedin.com/in/ronnie-a-jeffrey/" icon={<FaLinkedin />} hoverColor="hover:text-[#0077b5]" />
              <SocialLink href="https://github.com/ronnie-allen" icon={<FaGithub />} hoverColor="hover:text-white" />
              <SocialLink href="https://x.com/Ronnie_Allen_J" icon={<FaXTwitter />} hoverColor="hover:text-white" />
              <SocialLink href="https://huggingface.co/Ronnie-Allen" icon={<SiHuggingface />} hoverColor="hover:text-[#FFD21E]" />
              <SocialLink href="https://medium.com/@ronnieallen2005" icon={<FaMedium />} hoverColor="hover:text-[#00ab6c]" />
              <SocialLink href="https://www.instagram.com/ronnie_allen_jeffrey?igsh=MWd1aHY3amk4YmxpMg==" icon={<FaInstagram />} hoverColor="hover:text-pink-500" />
              <SocialLink href="https://facebook.com/ronnie-allen" icon={<FaFacebook />} hoverColor="hover:text-blue-600" />
              <SocialLink href="https://wa.me/919952860468" icon={<FaWhatsapp />} hoverColor="hover:text-green-500" />
              <SocialLink href="https://discord.gg/ronnieallen6456" icon={<FaDiscord />} hoverColor="hover:text-indigo-500" />
              <SocialLink href="https://t.me/jeffronall" icon={<FaTelegram />} hoverColor="hover:text-sky-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating animations */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(-20px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(25px) translateX(-10px); }
        }
      `}</style>
    </div>
  );
};

const SocialLink = ({ href, icon, hoverColor }: { href: string; icon: React.ReactNode; hoverColor: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 bg-white/5 rounded-lg transition transform hover:-translate-y-1 hover:bg-white/10 ${hoverColor}`}
  >
    {icon}
  </a>
);
