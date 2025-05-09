// src/components/TechCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const techStack = ['React', 'TypeScript', 'Node.js', 'Flutter', 'Python', 'TensorFlow', 'Tailwind'];

export const TechCarousel = () => (
  <Swiper slidesPerView={4} loop autoplay={{ delay: 2500 }}>
    {techStack.map((tech, index) => (
      <SwiperSlide key={index}>
        <div className="bg-[#1e1e1e] text-white p-4 rounded-lg shadow hover:bg-[#004fc7] text-center">
          {tech}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
