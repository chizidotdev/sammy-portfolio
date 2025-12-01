const WORKS_DATA = [
  {
    id: 1,
    title: "Slimepay Finance Platform",
    description: "A comprehensive fintech platform for seamless payments and financial management across Nigeria.",
    image: "https://via.placeholder.com/600x400/4A90E2/FFFFFF?text=Slimepay",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    link: "#"
  },
  {
    id: 2,
    title: "audIT Management System",
    description: "Enterprise audit management software with advanced reporting and compliance tracking capabilities.",
    image: "https://via.placeholder.com/600x400/28a745/FFFFFF?text=audIT",
    technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    link: "#"
  },
  {
    id: 3,
    title: "Cytecode Developer Portal",
    description: "Modern developer portal with API documentation, code examples, and interactive testing tools.",
    image: "https://via.placeholder.com/600x400/dc3545/FFFFFF?text=Cytecode",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "#"
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    description: "Analytics dashboard for online retailers with real-time sales tracking and inventory management.",
    image: "https://via.placeholder.com/600x400/fd7e14/FFFFFF?text=Dashboard",
    technologies: ["React", "D3.js", "Express", "Redis"],
    link: "#"
  },
  {
    id: 5,
    title: "Portfolio Website Builder",
    description: "Drag-and-drop website builder specifically designed for creative professionals and developers.",
    image: "https://via.placeholder.com/600x400/6f42c1/FFFFFF?text=Portfolio",
    technologies: ["React", "Framer Motion", "Supabase", "Stripe"],
    link: "#"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform with video streaming, progress tracking, and interactive assignments.",
    image: "https://via.placeholder.com/600x400/20c997/FFFFFF?text=LMS",
    technologies: ["Angular", "NestJS", "MySQL", "WebRTC"],
    link: "#"
  }
]

export default function Work() {
  return (
    <div className="page-container">
      <section className="work-page">
        <h1 className="work-page-title">My Work</h1>
        <p className="work-page-description">
          A collection of projects I've worked on, from fintech platforms to developer tools.
        </p>
        <div className="work-grid">
          {WORKS_DATA.map((project) => (
            <div key={project.id} className="work-card">
              <div className="work-image">
                <img src={project.image} alt={project.title} />
                <div className="work-overlay">
                  <div className="work-overlay-content">
                    <h3 className="work-overlay-title">{project.title}</h3>
                    <p className="work-overlay-description">{project.description}</p>
                    <div className="work-overlay-technologies">
                      {project.technologies.join(' • ')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}