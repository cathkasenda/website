
import { Github, Linkedin, ExternalLink } from "lucide-react";
import PixelAvatar from "./PixelAvatar";

const ProfileSection = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="pixel-heading">ABOUT ME</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative">
            <PixelAvatar
              src="/lovable-uploads/2a0cdbb8-faba-499a-abcf-f2b778f31e26.png" // Updated profile photo
              alt="Cathleen Kasenda"
              size="xxl" // Increased the size
              className="animate-pixel-fade-in"
            />
            <div className="absolute -bottom-2 -right-2 bg-pixel-pastelPink dark:bg-pixel-pastelPink/70 px-3 py-1 font-pixel text-xs text-pixel-softBlack dark:text-pixel-softWhite shadow-[2px_2px_0px_0px] shadow-pixel-softBlack dark:shadow-pixel-softWhite">
              LVL 99
            </div>
          </div>
        </div>
        
        {/* Bio */}
        <div className="col-span-2">
          <div className="pixel-card mb-6">
            <div className="mb-4">
              <span className="bg-pixel-pastelBlue dark:bg-pixel-pastelBlue/30 px-2 py-1 font-pixel text-xs text-pixel-softBlack dark:text-pixel-softWhite">PLAYER STATS</span>
            </div>
            
            <h3 className="font-pixel text-2xl mb-2 text-pixel-softBlack dark:text-pixel-softWhite">Cathleen Annabelle Kasenda</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="font-mono text-sm mb-1">
                  <span className="text-pixel-navy dark:text-pixel-pastelBlue">Origin:</span> Indonesia
                </p>
                <p className="font-mono text-sm mb-1">
                  <span className="text-pixel-navy dark:text-pixel-pastelBlue">Education:</span> B.S. Electrical and Computer Engineering
                </p>
                <p className="font-mono text-sm mb-1">
                  <span className="text-pixel-navy dark:text-pixel-pastelBlue">University:</span> University of Washington, Seattle
                </p>
              </div>
              <div>
                <p className="font-mono text-sm mb-1">
                  <span className="text-pixel-navy dark:text-pixel-pastelBlue">Concentration:</span> Embedded Systems and Computing
                </p>
                <p className="font-mono text-sm mb-1">
                  <span className="text-pixel-navy dark:text-pixel-pastelBlue">Location:</span> Seattle
                </p>
                <p className="font-mono text-sm mb-1">
                  <span className="text-pixel-navy dark:text-pixel-pastelBlue">Graduation:</span> June 2025
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap space-x-4 mb-6">
              <a 
                href="https://github.com/cathkasenda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pixel-btn py-2 px-3 bg-pixel-softWhite dark:bg-pixel-navy inline-flex items-center mb-2"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/cathleen-kasenda-410808247/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pixel-btn py-2 px-3 bg-pixel-softWhite dark:bg-pixel-navy inline-flex items-center mb-2"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="pixel-btn py-2 px-3 bg-pixel-softWhite dark:bg-pixel-navy inline-flex items-center mb-2"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Website</span>
              </a>
            </div>
          </div>
          
          <div className="pixel-card">
            <p className="font-mono text-sm leading-relaxed mb-4">
              Hi, I'm Cathleen Kasenda, an aspiring Software Engineer, Hardware Engineer, and Project Manager passionate about technology, problem-solving, and innovation. Currently pursuing a Bachelor of Science in Electrical and Computer Engineering at the University of Washington, I have experience in software development, embedded systems, and project management.
            </p>
            <p className="font-mono text-sm leading-relaxed mb-4">
              My technical expertise spans web and backend development, FPGA design, PCB layout, IoT systems, and cloud infrastructure, with proficiency in Python, C++, JavaScript, Verilog, AWS, and MongoDB.
            </p>
            <p className="font-mono text-sm leading-relaxed">
              When I'm not coding or working on hardware, I love exploring new coffee shops and restaurants, staying active through sports, and dreaming of traveling the world to experience different cultures and places.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
