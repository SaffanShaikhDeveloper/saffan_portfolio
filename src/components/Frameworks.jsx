import { OrbitingCircles } from "./OrbitingCircle";

export function Frameworks() {
  const skills = [
    "ts",
    "springBoot",
    "js",
    "css3",
    "python",
    "java",
    "php",
    "html",
    "tailwind",
    "gitHub",
    "docker",
    "vitejs",
    "aws",
    "nodejs",
    "postman",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

//Creating our Own Icons of technologies

const Icon = ({ src }) => (
  <img src={src} className="duration-300 rounded-sm hover:scale-110 " />
);
