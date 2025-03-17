
import {
  Code,
  Cpu,
  Globe,
  Database,
  Cloud,
  Terminal,
  Server,
  Layout,
  Layers,
  Wrench,
  Award,
  BookOpen
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "programming" | "hardware" | "languages" | "tools" | "frameworks";
  level: number; // 1-10
}

interface Language {
  name: string;
  proficiency: "Native" | "Fluent" | "Intermediate" | "Beginner";
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  image?: string;
}

interface Conference {
  name: string;
  organizer: string;
  date: string;
  description: string;
  image?: string;
}

const skills: Skill[] = [
  { name: "Python", icon: <Code />, category: "programming", level: 9 },
  { name: "C++", icon: <Terminal />, category: "programming", level: 8 },
  { name: "JavaScript", icon: <Code />, category: "programming", level: 8 },
  { name: "Verilog", icon: <Cpu />, category: "hardware", level: 7 },
  { name: "Swift", icon: <Code />, category: "programming", level: 6 },
  { name: "React", icon: <Layout />, category: "frameworks", level: 7 },
  { name: "Node.js", icon: <Server />, category: "frameworks", level: 7 },
  { name: "MongoDB", icon: <Database />, category: "tools", level: 8 },
  { name: "AWS", icon: <Cloud />, category: "tools", level: 6 },
  { name: "FPGA Design", icon: <Cpu />, category: "hardware", level: 7 },
  { name: "PCB Layout", icon: <Layers />, category: "hardware", level: 7 },
  { name: "IoT Systems", icon: <Wrench />, category: "hardware", level: 8 },
];

const languages: Language[] = [
  { name: "English", proficiency: "Fluent" },
  { name: "Indonesian", proficiency: "Native" },
  { name: "Mandarin", proficiency: "Intermediate" },
];

const certifications: Certification[] = [
  { 
    name: "AWS Certification",
    issuer: "Amazon Web Services",
    date: "2025"
  }
];

const conferences: Conference[] = [
  {
    name: "SWE Conference: Together We Rise",
    organizer: "Society of Women Engineers (SWE)",
    date: "2024",
    description: "One of five students fully sponsored by the University of Washington to attend this prestigious conference in Chicago."
  },
  {
    name: "Amazon Reachback Spring Cohort",
    organizer: "Amazon",
    date: "2025",
    description: "Participated in AI workshops and earned AWS certification through this selective program."
  }
];

const SkillsSection = () => {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-6 ${
              i < level 
                ? "bg-primary" 
                : "bg-muted dark:bg-muted/40"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="section-container">
      <h2 className="pixel-heading">SKILLS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <div>
          <h3 className="pixel-subheading mb-6">Technical Skills</h3>
          
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="pixel-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-pixel-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-3 bg-pixel-pastelBlue dark:bg-pixel-pastelBlue/30 text-pixel-softBlack dark:text-pixel-softWhite">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-sm">{skill.name}</span>
                </div>
                
                <div className="w-full sm:w-auto">
                  {renderSkillLevel(skill.level)}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Languages and Other Skills */}
        <div>
          <h3 className="pixel-subheading mb-6">Languages</h3>
          
          <div className="pixel-card">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Globe className="w-5 h-5 mr-3 text-primary" />
                <span className="font-pixel text-lg text-pixel-softBlack dark:text-pixel-softWhite">
                  Spoken Languages
                </span>
              </div>
              
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-dashed border-muted pb-2">
                    <span className="font-mono text-sm">{lang.name}</span>
                    <span className="font-pixel text-xs px-2 py-1 bg-pixel-pastelBlue dark:bg-pixel-pastelBlue/30 text-pixel-softBlack dark:text-pixel-softWhite">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <Terminal className="w-5 h-5 mr-3 text-primary" />
                <span className="font-pixel text-lg text-pixel-softBlack dark:text-pixel-softWhite">
                  Other Skills
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="pixel-tag">Project Management</span>
                <span className="pixel-tag">Team Leadership</span>
                <span className="pixel-tag">Public Speaking</span>
                <span className="pixel-tag">Embedded Systems</span>
                <span className="pixel-tag">Circuit Design</span>
                <span className="pixel-tag">Problem Solving</span>
                <span className="pixel-tag">UI/UX Design</span>
                <span className="pixel-tag">Agile Methodology</span>
              </div>
            </div>
          </div>
          
          {/* Certifications and Conferences */}
          <section className="mt-16">
            <h3 className="pixel-subheading mb-8">Certifications & Conferences</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="pixel-card">
                <h4 className="font-pixel text-lg mb-3 text-pixel-softBlack dark:text-pixel-softWhite">
                  SWE Conference 2024: Together We Rise
                </h4>
                <p className="font-mono text-sm mb-4">
                  One of only 5 students fully sponsored by the University of Washington to attend this prestigious conference in Chicago.
                </p>
              </div>
              
              <div className="pixel-card">
                <h4 className="font-pixel text-lg mb-3 text-pixel-softBlack dark:text-pixel-softWhite">
                  Amazon Reachback Spring Cohort 2025
                </h4>
                <p className="font-mono text-sm mb-4">
                  Participated in Amazon's exclusive program featuring AI workshops and earned AWS certification through hands-on training and projects.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
