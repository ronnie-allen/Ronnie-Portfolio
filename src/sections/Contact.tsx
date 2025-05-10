import { useForm } from "react-hook-form";
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

export const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
      <div className="z-10 relative flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border border-white/10 shadow-lg">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full lg:w-1/2"
        >
          <input
            {...register("name")}
            placeholder="Your Name"
            className="bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            {...register("email")}
            placeholder="Your Email"
            className="bg-white/10 p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            {...register("message")}
            placeholder="Your Message"
            className="bg-white/10 p-4 rounded-lg h-32 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 hover:bg-red-700 transition p-4 rounded-lg font-semibold shadow-md">
            Send Message
          </button>
        </form>
  
        {/* Contact Info */}
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Get in Touch
          </h3>
          <a
            href="mailto:ronnieallen2005@gmail.com"
            className="flex items-center gap-2 text-gray-300 mb-2 hover:underline hover:text-red-400 transition w-fit"
          >
            <FaEnvelope className="text-red-500" /> ronnieallen2005@gmail.com
          </a>
          <a
            href="tel:+919952860468"
            className="flex items-center gap-2 text-gray-300 mb-6 hover:underline hover:text-red-400 transition w-fit"
          >
            <FaPhone className="text-green-400" /> +91 99528 60468
          </a>
  
          <h4 className="text-2xl font-medium mb-4 text-white">Follow me</h4>
          <div className="flex gap-5 flex-wrap text-2xl text-gray-400 ">
            <a
              href="https://www.linkedin.com/in/ronnie-a-jeffrey-0901b22bb/"
              target="_blank"
              className="hover:text-[#0077b5] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ronnie-allen"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/ronnie_allen_jeffrey?igsh=MWd1aHY3amk4YmxpMg=="
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/ronnie"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/919952860468"
              target="_blank"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://discord.gg/ronnieallen6456"
              target="_blank"
              className="hover:text-indigo-500 transition"
            >
              <FaDiscord />
            </a>
            <a
              href="https://t.me/jeffronall"
              target="_blank"
              className="hover:text-sky-400 transition"
            >
              <FaTelegram />
            </a>
            <a
              href="https://medium.com/@ronnieallen2005"
              target="_blank"
              className="hover:text-[#00ab6c] transition"
            >
              <FaMedium />
            </a>
          </div>
        </div>
      </div>
  
      {/* Floating animations */}
      <style >{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(15px);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(-20px);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(25px) translateX(-10px);
          }
        }
      `}</style>
    </div>
  );
  
};
