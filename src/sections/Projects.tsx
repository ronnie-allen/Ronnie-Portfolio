// src/sections/Projects.tsx
import { FaGithub } from "react-icons/fa";
import CNN from "../assets/Music-genre.png";
import Potability from "../assets/potability.png"; 
import PMS from "../assets/PMS.png"; 
import Hoodigo from "../assets/Hoodigo.png";
import CropAI from "../assets/CropAI.png"; 
import MK from "../assets/Mk.png";

const projectData = [
  {
    name: "MindKraft '25 - An Event Site",
    description:
      "Worked in building a Entire Fully functional event site for our University, with functionalities of Authentication,Authorization and integrating Payment API",
    image: MK,
    githubUrl: "https://github.com/dharshan-kumarj/Mindkraft25_Frontend",
  },
  {
    name: "Music Genre Classification with CNN",
    description:
      "A machine learning model for classifying music genres based on audio features. This repository contains the code and resources for building, training, and evaluating the model using TensorFlow and scikit-learn. It aims to predict the genre of music from raw audio data, providing a practical solution for music classification.",
    image: CNN,
    githubUrl: "https://github.com/ronnie-allen/Music-Genre-Classification-with-CNN",
  },
  {
    name: "Water Potability Prediction with Ensemble Learning",
    description:
      "A simple weather forecasting application built with React. Displays current weather data using an API and shows a 7-day forecast with hourly intervals.",
    image: Potability,
    githubUrl: "https://github.com/ronnie-allen/Water-Predictor-Backend",
  },
  {
    name: "Patient Monitoring System for Hospitals",
    description:
      "The Patient Monitoring System is an AI-driven platform designed to help hospitals efficiently track and monitor their patients by analyzing lab reports. Hospitals can upload patient lab reports through an admin portal, and the system will automatically retrieve relevant data to generate a detailed report.",
    image: PMS,
    githubUrl: "https://github.com/ronnie-allen/PMS-Intel_OneAPI_Hackathon",
  },
  {
    name: "Hoodigo - An E-Commerce website ",
    description:
      "Hoodigo is a frontend website project built using HTML, CSS, JavaScript, and Bootstrap, aimed at practicing and showcasing modern web design skills. It features responsive layouts, interactive components, and a clean design structure.",
    image: Hoodigo,
    githubUrl: "https://github.com/ronnie-allen/hoodigo-website",
  },
  {
    name: "CropAI - Crop Recommendation & Yield Prediction System",
    description:
      "This project uses machine learning models to help farmers make smarter agricultural decisions. It predicts the best crop to grow based on soil, weather, and environmental factors, and estimates the expected yield in tons per hectare. We used two real-world datasets and trained Random Forest models — one for crop classification and another for yield regression.",
    image: CropAI,
    githubUrl: "https://github.com/ronnie-allen/Crop-and-Yield-Prediction",
  },
];

export const Projects = () => (
  <div className=" text-white py-16 px-4">
    <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
      Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="bg-[#0e0e0e] rounded-xl shadow-lg hover:shadow-red-600 transition duration-300 flex flex-col overflow-hidden"
        >
          {/* Project Image */}
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-700 flex items-center justify-center text-white">
              No Image Available
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>

            {/* Project Description */}
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>

            {/* GitHub Icon */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-white transition mt-auto"
              aria-label="View on GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);
