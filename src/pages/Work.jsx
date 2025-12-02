const WORKS_DATA = [
  {
    id: 1,
    title: "Automated Crypto Trading Bot",
    description: "An intelligent trading bot that analyzes cryptocurrency tokens using advanced algorithms to determine optimal trading opportunities and executes trades automatically.",
    image: "/work/trading-bot-video-2.gif",
    technologies: ["Typescript", "Helius RPC", "NodeJS", "Data Analysis"],
    link: "#"
  },
  {
    id: 2,
    title: "Duft Lab",
    description: "A minimalistic and elegant ecommerce platform designed for premium perfume sales, featuring clean design and seamless shopping experience.",
    image: "/work/duftlab-1.jpg",
    technologies: ["React", "Node.js", "Typescript", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 3,
    title: "WP Fashion Store",
    description: "A fully functional ecommerce website built for a fashion brand, featuring modern design, product catalog, and complete shopping functionality.",
    image: "/work/w2p-image.png",
    technologies: ["React", "NodeJs", "RabbitMQ", "Typescript", "Docker"],
    link: "#"
  },
  {
    id: 4,
    title: "Winewave",
    description: "An sophisticated ecommerce platform for selling luxury wines, featuring elegant design and premium user experience for wine enthusiasts.",
    image: "/work/winewave-2.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 5,
    title: "Crane Company Website",
    description: "A professional corporate website for a crane company showcasing services, equipment, and company capabilities with modern design and functionality.",
    image: "/work/crane-company-website.mp4",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    link: "#"
  }
]

export default function Work() {
  return (
    <div className="page-container">
      <section className="work-page">
        <h3 className="work-page-title">Some Of My Work</h3>
        <p className="work-page-description">
          A collection of A FEW projects I've worked on.
        </p>
        <div className="work-grid">
          {WORKS_DATA.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-image">
                {project.image.endsWith('.mp4') ? (
                  <video src={project.image} autoPlay muted loop playsInline />
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
                <div className="work-overlay">
                  <div className="work-hover-content">
                    <p className="work-overlay-description">{project.description}</p>
                    <div className="work-overlay-technologies">
                      {project.technologies.join(' • ')}
                    </div>
                  </div>
                  <h4 className="work-title-always">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}