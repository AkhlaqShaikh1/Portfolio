export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[30vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 lg:min-h-[30vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "A HTTP Server in Rust",
      des: "A simple HTTP server written in Rust using the standard library. It can serve static files and dynamic content.",
      img: "/p2.jpg",
      iconLists: ["/rust.png"],
      link: "https://github.com/AkhlaqShaikh1/HTTP-Rust-Server",
    },
     {
      id: 2,
      title: "Software Engineer",
      des: "Full-stack engineer crafting intuitive user experiences and scalable backend architectures with modern technologies.",
      img: "/amish.png",
      iconLists: [ "/mongodb-icon.svg","/ts.svg" ,"/node.svg", "/postgresql.svg", "/react.svg"],
      link: "https://amish-toor.vercel.app/",
    },
    {
      id: 3,
      title: "Commercio - A blockchain based E-commerce platform",
      des: "A blockchain-based e-commerce platform built using Flutter, MongoDB, Ethereum, and Solidity and ExpressJS for the backend.",
      img: "/p3.png",
      iconLists: [ "/flutter.svg","/mongodb-icon.svg","/ts.svg", "/eth.svg" ,"/node.svg"],
      link: "https://github.com/AkhlaqShaikh1/",
    },
    {
      id: 4,
      title: "Ship Go",
      des: "ShipGo delivers luggage and sporting equipment door to door from $34.99, eliminating airport baggage fees and hassles with insured tracking service.",
      img: "/lugage.png",
      iconLists: [ "/mongodb-icon.svg","/ts.svg" ,"/node.svg"],
      link: "https://www.shipgo.com/",
    },
    {
      id: 5,
      title: "ShipGo Application",
      des: "Travel the world and earn money by delivering goods internationally using your extra luggage space with ShipGo's flexible delivery app.",
      img: "/shipgo.png",
      iconLists: [ "/flutter.svg"],
      link: "https://play.google.com/store/apps/details?id=com.shipgo.shipgo",
    },
    {
      id: 6,
      title: "ShipGo-Live",
      des: "Travel the world and earn money by delivering goods internationally using your extra luggage space with ShipGo's flexible delivery app.",
      img: "/shipgo.png",
      iconLists: [ "/flutter.svg"],
      link: "https://apps.apple.com/us/app/shipgo-live/id6744827048",
    },
    {
      id: 7,
      title: "German Excel",
      des: "GermanExcel offers online courses and model test e-books to help students prepare for German language exams (Telc A2-B1, DTZ, and Telc B1)",
      img: "/german1.jpg",
      iconLists: [ "/tailwindcss.svg", "/node.svg"],
      link: "https://www.germanexcel.com/",
    },
    {
      id: 8,
      title: "Peets Express Restoration",
      des: "Peets Express Restoration is a 24/7 water damage restoration and mold remediation company serving homeowners in the Sacramento area, offering less than 45-minute emergency response times.",
      img: "/peets.webp",
      iconLists: [ "/wordpress.svg"],
      link: "https://www.peetsexpressrestoration.com/landing-page/",
    },
    {
      id: 9,
      title: "Vincent deFilippo",
      des: "Vincent deFilippo is a New York-based life coach and Monroe College professor offering career consulting services with packages ranging from 5 to 20 sessions",
      img: "/career.jpg",
      iconLists: [ "/wordpress.svg"],
      link: "https://www.vincentdefilippo.com/career-mentor",
    },
  ];
  
  
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Senior Software Engineer - Intellexal Solutions",
      desc: "Architecting robust systems with Docker, CI/CD pipelines, queues, cron jobs, and microservices — keeping everything running smoothly at scale.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Application Development",
      desc: "Designed and developed scalable web and mobile solutions, including cross-platform iOS and Android applications using Flutter.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Software Engineer - Full Stack Development",
      desc: "Full stack developer building seamless user experiences and robust backend systems with modern frameworks.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
    {
      id: 4,
      title: "Freelance Developer => Open for New Projects",
      desc: "Turning ideas into fully deployed apps, from first wireframe to App Store launch. Let's build something great together.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link : "https://github.com/AkhlaqShaikh1"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/akhlaq-shaikh/"
    },
  ];

  //-------TechStack Arry--------
  export const platforms = [
    { name: "AWS", src: "/aws3.png" },
    { name: "Azure", src: "/azure2.png" },
    { name: "OpenAI", src: "/openAI.png" },
    { name: "Mistral AI", src: "/mistral-AI.svg" },
    { name: "NestJs", src: "/nestjs.svg" },
    { name: "React", src: "/react.svg" },
    { name: "NextJs", src: "/nextjs.svg", className: "invert" },
    { name: "Redux", src: "/redux.svg" },
    { name: "TensorFlow", src: "/tensorflow.svg" },
    { name: "Flutter", src: "/flutter.svg" },
    { name: "Docker", src: "/docker.svg" },
    { name: "Python", src: "/python.svg" },
    { name: "JavaScript", src: "/javascript.svg" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "SQL", src: "/sql.svg", className: "invert" },
    { name: "MySQL", src: "/mysql.svg" },
    { name: "PostgreSQL", src: "/postgresql.svg" },
    { name: "MongoDB", src: "/mongo.svg" },
    { name: "Django", src: "/django.svg" },
    { name: "Fastify", src: "/fastify.svg", className: "invert" },
    { name: "express", src: "/express.svg", className: "invert" },
    { name: "TailwindCss", src: "/tailwindcss.svg" },
    { name: "Firebase", src: "/firebase.svg" },
    { name: "GO", src: "/go.svg" },
    { name: "Hugging Face", src: "/hugging.png" },
    { name: "Make", src: "/make.png" },
    { name: "N8n", src: "/n8n.png" },
    { name: "Pinecone", src: "/pinecone.png" },
  ];