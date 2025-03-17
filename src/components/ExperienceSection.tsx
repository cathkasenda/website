
import { useState } from "react";
import { Code, Cpu, BriefcaseBusiness, Heart } from "lucide-react";
import PixelButton from "./PixelButton";

type ExperienceCategory = "software" | "hardware" | "leadership" | "community";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  category: ExperienceCategory;
  image?: string;
}

const experiences: Experience[] = [
  {
    title: "EE 201 Teaching Assistant",
    company: "University of Washington, ECE Department",
    period: "September 2024 – January 2025",
    location: "Seattle, WA",
    description: [
      "Led hands-on lab sessions and tutorials on soldering, Arduino programming, PCB design, and active filters, fostering practical skills in students.",
      "Delivered engaging lectures and provided detailed resources on embedded systems, 3D modeling, filtering.",
      "Mentored students on project-based learning, guiding them through complex tasks such as cart assembly, system integration, calibration (PID), and sound manipulation.",
      "Supported team collaboration and problem-solving while ensuring lab safety and adherence to best practices.",
      "Prepared course materials, managed grading, and facilitated a structured, inclusive learning environment to promote student success."
    ],
    category: "hardware"
  },
  {
    title: "IT Strategy Intern",
    company: "Bank Mayapada Int. Tbk.",
    period: "August 2024 - October 2024",
    location: "Jakarta, Indonesia",
    description: [
      "Contributed to the development of enterprise IT strategies, focusing on cloud integration, data-driven decision-making, and digital transformation initiatives.",
      "Performed system architecture analysis to identify inefficiencies and proposed enhancements for scalability and reliability.",
      "Conducted research on emerging technologies such as machine learning, blockchain, and cybersecurity frameworks, providing recommendations for strategic adoption.",
      "Assisted in optimizing IT governance frameworks and policies to ensure compliance with regulatory standards and best practices.",
      "Collaborated with stakeholders to streamline IT infrastructure, enhance workflow automation, and integrate advanced analytics tools."
    ],
    category: "software"
  },
  {
    title: "Web Developer",
    company: "Sensors, Energy, and Automation Laboratory (SEAL)",
    period: "April 2024 - August 2024",
    location: "Seattle, WA",
    description: [
      "Developed and maintained dynamic and responsive web applications using HTML, CSS, JavaScript, and React, enhancing user experience and accessibility across various devices and browsers.",
      "Specialized in back-end development using PHP, Python, and .NET to build and secure the inner workings of the website, ensuring robust data handling, server-side logic, and security measures.",
      "Integrated RESTful APIs and third-party services to enhance functionality, enabling seamless data exchange and real-time updates within web applications."
    ],
    category: "software",
    image: "/lovable-uploads/241dfa9f-8e0d-47b1-adf2-027408493abc.png"
  },
  {
    title: "Software Developer",
    company: "Global Radio Outreach",
    period: "June 2024 - August 2024",
    location: "Seattle, WA (Remote)",
    description: [
      "Designed and developed custom software solutions to enhance the efficiency and scalability of global broadcasting systems.",
      "Built and maintained backend infrastructure using MongoDB, ensuring efficient data storage, retrieval, and management for broadcasting operations.",
      "Created and maintained web-based platforms for managing digital content and tracking listener engagement analytics.",
      "Utilized programming languages such as Python, JavaScript, and C++ to build and optimize software applications.",
      "Implemented automated workflows to streamline content distribution and improve operational efficiency."
    ],
    category: "software"
  },
  {
    title: "IoT Engineer",
    company: "Bobobox",
    period: "September 2023 - December 2023",
    location: "Bandung, West Java, Indonesia",
    description: [
      "Innovated a sleek, SwiftUI-based to-do list app, catapulting project management into a new era of efficiency.",
      "Engineered a groundbreaking, proximity-measurement application, akin to an AirTag, redefining guest security and interaction.",
      "Introduced innovative keyless access and intelligent luggage tracking technology, establishing higher benchmarks in visitor convenience and safety."
    ],
    category: "hardware"
  },
  {
    title: "Orientation Leader",
    company: "University of Washington",
    period: "March 2024 - September 2024",
    location: "Seattle, Washington, United States",
    description: [
      "Coordinated and executed orientation programs for incoming students, managing event logistics, scheduling, and team assignments.",
      "Oversaw cross-functional teams to ensure smooth onboarding experiences, fostering collaboration and timely task completion.",
      "Utilized project management tools to track progress, address challenges, and deliver events within deadlines and budgets.",
      "Developed and implemented strategic plans to improve the efficiency and effectiveness of orientation processes.",
      "Communicated effectively with diverse stakeholders, including students, staff, and faculty, to align expectations and ensure program success.",
      "Analyzed feedback from participants to refine processes and enhance future events, prioritizing continuous improvement."
    ],
    category: "leadership"
  },
  {
    title: "Director of Operations",
    company: "PERMIAS Seattle",
    period: "June 2023 - June 2024",
    location: "Seattle, Washington, United States",
    description: [
      "Spearheaded the planning and execution of large-scale events, overseeing inventory, research, and technology to ensure seamless operations.",
      "Led and managed cross-functional teams across event organizing, logistics, and technical support, fostering collaboration and efficiency.",
      "Developed strategic operational plans to optimize workflows, reduce costs, and improve resource allocation.",
      "Implemented project management methodologies to track milestones, meet deadlines, and deliver high-impact initiatives successfully."
    ],
    category: "leadership",
    image: "/lovable-uploads/fc32d57e-75d7-4d9c-9b4b-dd1a5db28532.png"
  },
  {
    title: "Event Organizer",
    company: "PERMIAS Seattle",
    period: "September 2022 - June 2023",
    location: "Seattle, Washington, United States",
    description: [
      "Masterfully orchestrated and brought to fruition a series of engaging events that celebrated and elevated Indonesian culture, reaching broad audiences.",
      "Successfully hosted 'BAJAJ', a hallmark Indonesian food and music festival, captivating over 3000 attendees with an immersive cultural experience and fostering community engagement.",
      "Spearheaded the 'PERMIAS Cup', a dynamic sports tournament that promoted health, teamwork, and sportsmanship within the Indonesian community."
    ],
    category: "leadership",
    image: "/lovable-uploads/638e568e-bcd2-4531-94f2-594253c55662.png"
  },
  {
    title: "International Student Leader",
    company: "Shoreline Community College",
    period: "July 2022 - June 2023",
    location: "Seattle, Washington, United States",
    description: [
      "Led orientation programs and workshops for international students, ensuring a smooth transition to academic and campus life.",
      "Coordinated cultural and community-building events, fostering inclusivity and a sense of belonging among a diverse student body.",
      "Provided mentorship and guidance to new students, addressing academic, cultural, and personal challenges.",
      "Collaborated with administrative teams to design and implement student support initiatives, enhancing the international student experience."
    ],
    category: "leadership",
    image: "/lovable-uploads/51a6e58d-17d5-441f-8eb7-2012147c90f6.png"
  },
  {
    title: "Prefectorial Board",
    company: "Bina Bangsa School",
    period: "June 2018 - July 2021",
    location: "Bandung, West Java, Indonesia",
    description: [
      "Championed as a guiding force for over 200 secondary students, providing mentorship and support to foster academic and personal growth.",
      "Represented my campus at the Student Global Leaders Conference (SGLC) consecutively for two years, engaging with leaders from different cities and expanding my global perspective.",
      "Cultivated a vibrant, inclusive community by underscoring the value of unity and collaboration among students.",
      "Spearheaded the planning and execution of diverse on-campus events and activities, enhancing student life and promoting engagement."
    ],
    category: "leadership"
  },
  {
    title: "Project Development Coordinator",
    company: "Solar Chapter",
    period: "January 2024 - September 2024",
    location: "Seattle, Washington, United States",
    description: [
      "Led the technical development of sustainable energy projects, focusing on solar power integration and optimization for the Water for Banuan Village Project.",
      "Collaborated with cross-functional teams to design and implement renewable energy solutions tailored to community needs in East Nusa Tenggara, Indonesia.",
      "Utilized project management tools to track milestones, manage resources, and ensure timely delivery of initiatives.",
      "Coordinated with external partners and stakeholders to secure funding and resources for large-scale renewable energy projects that provided clean water access to previously underserved communities."
    ],
    category: "community",
    image: "/lovable-uploads/bf99fc75-b0af-4bb8-9437-db9bf954934b.png"
  },
  {
    title: "Director of Public Relations",
    company: "Pandonate",
    period: "August 2021 - July 2022",
    location: "Indonesia",
    description: [
      "Led PR initiatives for a youth-led nonprofit organization of 5 highly motivated female students striving to make a change and raise awareness of pandemic impacts.",
      "Spread awareness through strategic social media campaigns and community outreach programs.",
      "Helped raise Rp. 10,000,000 in 1 month to create care packages with daily necessities such as oil, water, vitamins, masks, medicine and rice for communities in need."
    ],
    category: "community"
  },
  {
    title: "Founder",
    company: "Miliwhisk",
    period: "June 2020 - July 2021",
    location: "Indonesia",
    description: [
      "Founded and operated a startup company that accepted preorders for baked goods, with revenue donated to people in need during the pandemic.",
      "Collaborated with Share Bears, a non-profit organization that distributes rice boxes and basic necessity packages monthly.",
      "Created a social impact business model that spread kindness and awareness of how small actions can make a significant impact on communities.",
      "Managed production, marketing, and distribution of baked goods while ensuring quality and timely delivery."
    ],
    category: "community"
  }
];

const ExperienceSection = () => {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>("software");
  
  const filteredExperiences = experiences.filter(exp => exp.category === activeCategory);
  
  const categoryIcons = {
    software: <Code className="w-5 h-5 mr-2" />,
    hardware: <Cpu className="w-5 h-5 mr-2" />,
    leadership: <BriefcaseBusiness className="w-5 h-5 mr-2" />,
    community: <Heart className="w-5 h-5 mr-2" />
  };
  
  const categoryTitles = {
    software: "Software Development",
    hardware: "Hardware Engineering",
    leadership: "Leadership & Project Management",
    community: "Community Service"
  };

  return (
    <section id="experience" className="section-container bg-secondary/30 dark:bg-secondary/10">
      <h2 className="pixel-heading">EXPERIENCE</h2>
      
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
        <PixelButton
          variant={activeCategory === "community" ? "primary" : "secondary"}
          onClick={() => setActiveCategory("community")}
          className="inline-flex items-center"
        >
          {categoryIcons.community}
          Community
        </PixelButton>
      </div>
      
      <h3 className="pixel-subheading text-center mb-8">
        {categoryTitles[activeCategory]} Experience
      </h3>
      
      <div className="space-y-8">
        {filteredExperiences.map((exp, index) => (
          <div key={index} className="pixel-card animate-pixel-fade-in">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h4 className="font-pixel text-xl text-pixel-softBlack dark:text-pixel-softWhite">
                  {exp.title}
                </h4>
                <p className="font-mono text-sm text-pixel-navy dark:text-pixel-pastelBlue">
                  {exp.company}
                </p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <p className="font-mono text-sm">{exp.period}</p>
                <p className="font-mono text-sm opacity-75">{exp.location}</p>
              </div>
            </div>
            
            <ul className="space-y-2 ml-4 mb-4">
              {exp.description.map((item, i) => (
                <li key={i} className="font-mono text-sm relative pl-4 before:content-['■'] before:absolute before:left-0 before:text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
