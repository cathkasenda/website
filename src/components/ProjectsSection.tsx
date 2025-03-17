
import { useState } from "react";
import { Code, Cpu, BriefcaseBusiness, ExternalLink, Github } from "lucide-react";
import PixelButton from "./PixelButton";

type ProjectCategory = "software" | "hardware" | "leadership";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "AI-Generated Video Mock Interview Tool",
    description: "Led the end-to-end development of an AI-driven tool, coordinating cross-functional efforts in design and implementation. Improved student interview preparedness by providing tailored feedback and analysis. Leveraged programming skills and technical knowledge to design an interactive and user-friendly interface.",
    technologies: ["AI", "Video Processing", "User Experience", "Cross-functional Coordination"],
    category: "software",
    github: "https://github.com/cathkasenda/AIMockInterview"
  },
  {
    title: "Cremamori 3D Interactive Marble Showcase",
    description: "An immersive web experience designed to enhance the online shopping experience for marble products. This project integrates 3D rendering and interactive product visualization, allowing users to explore high-quality marble slabs in 360-degree views before making a purchase. Features AI-powered material recommendations based on user preferences and interior styles.",
    technologies: ["React.js", "Three.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "TensorFlow.js"],
    category: "software",
    github: "https://github.com/cathkasenda/Cremamori3DWebsite"
  },
  {
    title: "FPGA-Based Flappy Bird Game",
    description: "A hardware-implemented version of the popular Flappy Bird game, designed using digital logic circuits and an FPGA. This project showcases real-time graphics rendering, user input handling, and game physics simulation purely through hardware description languages without relying on a traditional CPU or microcontroller. Features VGA output, push button controls, and state machine-based game logic.",
    technologies: ["FPGA", "Verilog/VHDL", "Finite State Machines", "VGA Controller", "Digital Logic"],
    category: "hardware",
    github: "https://github.com/cathkasenda/flappybird"
  },
  {
    title: "Remote Control Coffee Machine",
    description: "Developed an ESP32-based coffee maker with IR remote control, FreeRTOS, and multitasking, allowing users to select coffee type and size wirelessly. Integrated an I2C LCD for real-time brewing status and a water level sensor for automated brewing.",
    technologies: ["C++", "I2C", "FreeRTOS", "ESP32"],
    category: "hardware",
    github: "https://github.com/cathkasenda/coffemachine"
  },
  {
    title: "Connect 4 Game",
    description: "Designed and implemented a hardware-accelerated Connect 4 game on the DE1-SoC FPGA using Verilog, leveraging combinational and sequential logic for real-time gameplay. Developed a finite state machine (FSM) to handle game logic, player moves, win detection, and board updates.",
    technologies: ["Verilog", "DE1-SoC FPGA", "FSM", "Digital Logic"],
    category: "hardware",
    github: "https://github.com/cathkasenda/Connect4"
  },
  {
    title: "Microsoft Copilot Capstone",
    description: "Conducted hardware testing using ROM and SMU, developing and validating scripts for HOBL to automate and improve testing efficiency. Documented test procedures and results, creating detailed reports to support debugging, system optimization, and project development.",
    technologies: ["C", "Testing Automation", "Hardware Testing", "ROM", "SMU"],
    category: "software"
  },
  {
    title: "iOS To-Do List App",
    description: "Created a sleek, SwiftUI-based to-do list app that simplifies project management with an elegant and intuitive interface. Implemented features for task tracking, deadline management, and priority sorting.",
    technologies: ["Swift", "SwiftUI", "Xcode", "iOS"],
    category: "software",
    github: "https://github.com/cathkasenda/to-do-list"
  },
  {
    title: "Proximity Tracking System",
    description: "Engineered a groundbreaking proximity-measurement application similar to an AirTag that monitors distances between objects. This innovation transforms how guests interact with their surroundings and enhances security measures in accommodation businesses.",
    technologies: ["IoT", "Swift", "Bluetooth LE", "Embedded Systems"],
    category: "hardware",
    github: "https://github.com/cathkasenda/AirtagApp"
  },
  {
    title: "BAJAJ Festival",
    description: "Successfully hosted 'BAJAJ', a hallmark Indonesian food and music festival, captivating over 3000 attendees with an immersive cultural experience and fostering community engagement.",
    technologies: ["Event Management", "Cultural Programming", "Logistics", "Marketing"],
    category: "leadership"
  },
  {
    title: "PERMIAS Cup",
    description: "Spearheaded the 'PERMIAS Cup', a dynamic sports tournament that promoted health, teamwork, and sportsmanship within the Indonesian community. Managed all aspects from planning to execution.",
    technologies: ["Event Planning", "Sports Management", "Team Coordination", "Budgeting"],
    category: "leadership"
  },
  {
    title: "Water for Banuan Village",
    description: "Led Solar Chapter's sustainable water access project in East Nusa Tenggara, Indonesia. Implemented a solar-powered water pump system with 10 solar panels producing 5,500 Watt Peak, delivering 60,000 liters of water daily to an upper reservoir. Residents previously traveled 2-4 kilometers for water access. The project demonstrates successful cross-sector collaboration with corporate sponsors providing infrastructure components.",
    technologies: ["Solar Energy", "Sustainable Development", "Project Management", "Community Engagement"],
    category: "leadership"
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("software");
  
  const filteredProjects = projects.filter(project => project.category === activeCategory);
  
  const categoryIcons = {
    software: <Code className="w-5 h-5 mr-2" />,
    hardware: <Cpu className="w-5 h-5 mr-2" />,
    leadership: <BriefcaseBusiness className="w-5 h-5 mr-2" />
  };
  
  const categoryTitles = {
    software: "Software Projects",
    hardware: "Hardware Projects",
    leadership: "Leadership Projects"
  };

  return (
    <section id="projects" className="section-container bg-secondary/30 dark:bg-secondary/10">
      <h2 className="pixel-heading">PROJECTS</h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <PixelButton
          variant={activeCategory === "software" ? "primary" : "secondary"}
          onClick={() => setActiveCategory("software")}
          className="inline-flex items-center"
        >
          {categoryIcons.software}
          Software
        </PixelButton>
        <PixelButton
          variant={activeCategory === "hardware" ? "primary" : "secondary"}
          onClick={() => setActiveCategory("hardware")}
          className="inline-flex items-center"
        >
          {categoryIcons.hardware}
          Hardware
        </PixelButton>
        <PixelButton
          variant={activeCategory === "leadership" ? "primary" : "secondary"}
          onClick={() => setActiveCategory("leadership")}
          className="inline-flex items-center"
        >
          {categoryIcons.leadership}
          Leadership
        </PixelButton>
      </div>
      
      <h3 className="pixel-subheading text-center mb-8">
        {categoryTitles[activeCategory]}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={index}
            className="pixel-card h-full flex flex-col animate-pixel-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h4 className="font-pixel text-lg mb-3 text-pixel-softBlack dark:text-pixel-softWhite">
              {project.title}
            </h4>
            
            <p className="font-mono text-sm mb-4 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="pixel-tag">{tech}</span>
              ))}
            </div>
            
            <div className="flex gap-3 mt-auto">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn py-1.5 px-3 text-xs inline-flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn py-1.5 px-3 text-xs inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
