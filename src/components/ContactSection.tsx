
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import PixelButton from "./PixelButton";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form would be processed here
    alert("Thanks for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="pixel-heading">CONTACT ME</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="pixel-card mb-8">
            <h3 className="font-pixel text-xl mb-6 text-pixel-softBlack dark:text-pixel-softWhite">
              Get In Touch
            </h3>
            
            <div className="space-y-4">
              <a 
                href="mailto:cathleen.kasenda@gmail.com"
                className="flex items-center group"
              >
                <div className="w-10 h-10 flex items-center justify-center mr-4 bg-pixel-pastelBlue dark:bg-pixel-pastelBlue/30 group-hover:bg-primary transition-colors">
                  <Mail className="w-5 h-5 text-pixel-softBlack dark:text-pixel-softWhite" />
                </div>
                <span className="font-mono group-hover:text-primary transition-colors">
                  cathleen.kasenda@gmail.com
                </span>
              </a>
              
              <a 
                href="tel:+12067587896"
                className="flex items-center group"
              >
                <div className="w-10 h-10 flex items-center justify-center mr-4 bg-pixel-pastelBlue dark:bg-pixel-pastelBlue/30 group-hover:bg-primary transition-colors">
                  <Phone className="w-5 h-5 text-pixel-softBlack dark:text-pixel-softWhite" />
                </div>
                <span className="font-mono group-hover:text-primary transition-colors">
                  (206) 758-7896
                </span>
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="font-pixel text-sm mb-4 text-pixel-softBlack dark:text-pixel-softWhite">
                Find Me Online
              </h4>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/cathkasenda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn p-3 inline-flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/cathleen-kasenda-410808247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn p-3 inline-flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn p-3 inline-flex items-center justify-center"
                  aria-label="Personal Website"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="pixel-card">
            <h3 className="font-pixel text-xl mb-6 text-pixel-softBlack dark:text-pixel-softWhite">
              Send Me A Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-mono text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="pixel-input w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-mono text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="pixel-input w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-mono text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="pixel-input w-full resize-none"
                ></textarea>
              </div>
              
              <div>
                <PixelButton type="submit" className="w-full">
                  Send Message
                </PixelButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
