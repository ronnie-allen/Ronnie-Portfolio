// src/sections/Projects.tsx
export const Projects = () => (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#0e0e0e] p-6 rounded-lg shadow-lg hover:shadow-red-600 transition">
          <h3 className="text-xl font-semibold mb-2">CNN-Based Image Classifier</h3>
          <p className="text-sm text-gray-400">
            Developed a Convolutional Neural Network model to classify images with TensorFlow and Keras. Includes pre-processing, training pipeline, and real-time testing.
          </p>
        </div>
      </div>
    </div>
  );
  