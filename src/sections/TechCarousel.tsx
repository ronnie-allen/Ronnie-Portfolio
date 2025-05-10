const techStack = [
  { name: "React", logo: "https://skillicons.dev/icons?i=react" },
  { name: "TypeScript", logo: "https://skillicons.dev/icons?i=ts" },
  { name: "Dart", logo: "https://skillicons.dev/icons?i=dart" },
  { name: "Flutter", logo: "https://skillicons.dev/icons?i=flutter" },
  { name: "HTML", logo: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", logo: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", logo: "https://skillicons.dev/icons?i=js" },
  { name: "Tailwind", logo: "https://skillicons.dev/icons?i=tailwind" },
  { name: "Bootstrap", logo: "https://skillicons.dev/icons?i=bootstrap" },
  { name: "Node Js", logo: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Python", logo: "https://skillicons.dev/icons?i=python" },
  { name: "FastAPI", logo: "https://skillicons.dev/icons?i=fastapi" },
  { name: "Docker", logo: "https://skillicons.dev/icons?i=docker" },
  { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb" },
  { name: "Firebase", logo: "https://skillicons.dev/icons?i=firebase" },
  { name: "Git", logo: "https://skillicons.dev/icons?i=git" },
  { name: "VS Code", logo: "https://skillicons.dev/icons?i=vscode" },
  { name: "Postman", logo: "https://skillicons.dev/icons?i=postman" },
  { name: "Figma", logo: "https://skillicons.dev/icons?i=figma" },
  { name: "TensorFlow", logo: "https://skillicons.dev/icons?i=tensorflow" },
  { name: "Sci-Kit", logo: "https://skillicons.dev/icons?i=sklearn" },
  { name: "Linux", logo: "https://skillicons.dev/icons?i=linux" },
  { name: "Java", logo: "https://skillicons.dev/icons?i=java" },
];

export const TechCarousel = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#f02d5a]">Technologies </h2>
      <div className="relative w-full">
        <div className="animate-marquee flex gap-1 w-max">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className=" p-4 rounded-lg shadow-lg w-[160px] flex-shrink-0  hover:scale-105 transition-transform duration-300"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="mx-auto mb-2 h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
              />
              <div className="text-sm font-semibold text-center text-white">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
