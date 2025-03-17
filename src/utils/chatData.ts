
interface ChatData {
  [key: string]: string[];
}

export const chatData: ChatData = {
  // Personal information
  "name": ["Cathleen Annabelle Kasenda", "Cathleen Kasenda", "My name is Cathleen Annabelle Kasenda"],
  "from": ["Indonesia", "I'm from Indonesia", "I am originally from Indonesia"],
  "major": ["Electrical and Computer Engineering", "ECE", "I'm studying Electrical and Computer Engineering"],
  "education": ["Bachelor of Science in Electrical and Computer Engineering from the University of Washington, Seattle"],
  "concentration": ["Embedded Systems and Computing", "My concentration is in Embedded Systems and Computing"],
  "university": ["University of Washington", "UW", "I attend the University of Washington in Seattle"],
  "location": ["Seattle", "I'm based in Seattle, Washington"],
  
  // Skills and languages
  "skills": [
    "My technical skills include Python, C++, JavaScript, Verilog, Swift, React, Node.js, MongoDB, AWS, FPGA Design, PCB Layout, and IoT Systems",
    "I'm proficient in software development, embedded systems, project management, hardware design, and IoT"
  ],
  "languages": ["I speak English (fluent), Indonesian (native), and Mandarin (intermediate)"],
  "programming languages": ["I'm proficient in Python, C++, JavaScript, Verilog, and Swift"],
  
  // Experiences
  "experience": [
    "My experiences include: EE 201 Teaching Assistant at University of Washington, IT Strategy Intern at Bank Mayapada, Software Developer at Global Radio Outreach, Web Developer at SEAL, IoT Engineer at Bobobox, Director of Operations at PERMIAS Seattle, Orientation Leader at University of Washington, Event Organizer at PERMIAS Seattle, International Student Leader at Shoreline Community College, Project Development Coordinator at Solar Chapter, Director of Public Relations at Pandonate, and Founder of Miliwhisk"
  ],
  "software experience": [
    "My software experience includes: IT Strategy Intern at Bank Mayapada where I worked on cloud integration and data-driven decision-making, Software Developer at Global Radio Outreach where I built custom software solutions and maintained backend infrastructure using MongoDB, and Web Developer at SEAL where I developed responsive web applications using HTML, CSS, JavaScript, and React"
  ],
  "hardware experience": [
    "My hardware experience includes: EE 201 Teaching Assistant at University of Washington where I led lab sessions on soldering, Arduino programming, and PCB design, IoT Engineer at Bobobox where I developed a proximity-based application similar to an AirTag"
  ],
  "leadership experience": [
    "My leadership experience includes: Director of Operations at PERMIAS Seattle where I oversaw event planning and execution, Orientation Leader at University of Washington where I coordinated orientation programs, Event Organizer at PERMIAS Seattle where I organized cultural events like 'BAJAJ', International Student Leader at Shoreline Community College, and Prefectorial Board at Bina Bangsa School"
  ],
  "community experience": [
    "My community service experience includes: Project Development Coordinator at Solar Chapter where I led sustainable energy projects, Director of Public Relations at Pandonate where I raised awareness about pandemic impacts, and Founder of Miliwhisk where I started a business that donated profits to people in need during the pandemic"
  ],
  
  // Projects
  "projects": [
    "My projects include: Remote Control Coffee Machine, Connect 4 Game with FPGA, Microsoft Copilot Capstone, iOS To-Do List App, Proximity Tracking System, BAJAJ Festival, PERMIAS Cup, and Water for Banuan Village"
  ],
  "software projects": [
    "My software projects include the Microsoft Copilot Capstone where I conducted hardware testing and developed C scripts, and an iOS To-Do List App built with SwiftUI"
  ],
  "hardware projects": [
    "My hardware projects include a Remote Control Coffee Machine built with ESP32, FreeRTOS, and I2C, a Connect 4 Game implemented on an FPGA using Verilog, and a Proximity Tracking System similar to an AirTag"
  ],
  "leadership projects": [
    "My leadership projects include organizing the BAJAJ Festival, a food and music event that attracted over 3000 attendees, the PERMIAS Cup sports tournament, and the Water for Banuan Village project that provided clean water access to a previously underserved community"
  ],
  
  // Contact information
  "contact": [
    "You can contact me via email at cathleen.kasenda@gmail.com, phone at (206) 758-7896, or connect with me on LinkedIn at linkedin.com/in/cathleen-kasenda-410808247"
  ],
  "email": ["cathleen.kasenda@gmail.com"],
  "phone": ["(206) 758-7896"],
  "linkedin": ["linkedin.com/in/cathleen-kasenda-410808247"],
  "github": ["github.com/cathkasenda"],
  
  // Other information
  "hobbies": [
    "When I'm not coding or working on hardware, I love exploring new coffee shops and restaurants, staying active through sports, and dreaming of traveling the world to experience different cultures and places"
  ],
  "interests": [
    "I'm interested in technology, problem-solving, innovation, embedded systems, IoT, and experiencing different cultures through travel"
  ],
  
  // Certifications and conferences
  "certifications": [
    "I have AWS Certification from Amazon Web Services"
  ],
  "conferences": [
    "I was sponsored by UW to join the SWE Conference in Chicago 2024 'Together We Rise' (one of only 5 students to be fully sponsored) and attended the Amazon Reachback Spring Cohort 2025"
  ],
  
  // Fallback responses
  "fallback": [
    "I don't have specific information about that. Would you like to know about my education, experience, skills, projects, or how to contact me?",
    "I'm not sure about that. Feel free to ask about my background, skills, experience, or contact information!",
    "I don't have details on that topic. Is there something specific about my education, experience, or skills you'd like to know?"
  ]
};

export const processQuery = (query: string): string => {
  // Convert query to lowercase for case-insensitive matching
  const lowerQuery = query.toLowerCase();
  
  // Check each key in the data
  for (const [key, responses] of Object.entries(chatData)) {
    // Create variations of the key to match
    const keyVariations = [
      key,
      `what is your ${key}`,
      `what's your ${key}`,
      `tell me your ${key}`,
      `tell me about your ${key}`,
      `what are your ${key}`,
      `where is your ${key}`,
      `who is your ${key}`,
      `how is your ${key}`,
      `${key}?`,
      `what ${key}`,
      `where ${key}`,
      `who ${key}`,
      `how ${key}`,
      `${key} is`,
      `${key} are`,
    ];
    
    // Check if any variation matches the query
    if (keyVariations.some(variation => lowerQuery.includes(variation))) {
      // Return a random response from the array
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // If no match found, check if we can do a more general search
  if (lowerQuery.includes("school") || lowerQuery.includes("study") || lowerQuery.includes("college")) {
    return chatData.university[0];
  }
  
  if (lowerQuery.includes("work") || lowerQuery.includes("job") || lowerQuery.includes("career")) {
    return chatData.experience[0];
  }
  
  if (lowerQuery.includes("project") || lowerQuery.includes("build") || lowerQuery.includes("create")) {
    return chatData.projects[0];
  }
  
  if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("email")) {
    return chatData.contact[0];
  }
  
  // If still no match found, return a fallback response
  const fallbacks = chatData.fallback;
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
};
