import { Link } from 'react-router-dom'

const HARDCODED_PROFILE = {
  name: "Samuel",
  description: "Hi, I'm Samuel, a software developer and design engineer based in Port Harcourt, Nigeria.",
  bio: "I solve unique business problems for startups and business owners in finance and commerce. My projects are often focused on design systems, accessibility, typography, and animations.",
  current_work: "Currently, I work with founders and business owners looking to build and scale their ideas with software solutions. If that sounds like you, let's connect!"
}

const HARDCODED_EXPERIENCE = [
  {
    period: "2025 - now",
    title: "Product Engineer",
    company: "Contract & Consulting",
    location: "Remote, NG"
  },
  {
    period: "2023 - 2025",
    title: "CTO, Founding Engineer",
    company: "Slimepay Finance",
    location: "Remote, NG"
  },
  {
    period: "2025 - 2022",
    title: "Software Engineer",
    company: "audIT",
    location: "Remote, US"
  },
  {
    period: "2025 - 2022",
    title: "Frontend Developer",
    company: "Cytecode",
    location: "Port Harcourt, NG"
  }
]

const FEATURED_ARTICLE = {
  id: 1,
  title: "Kill The NPC",
  category: "Life",
  description: "Hi, I'm Samuel, a software developer and design engineer based in Port Harcourt, Nigeria.",
  content: "I solve unique business problems for startups and business owners in finance and commerce. My projects are often focused on design systems, accessibility, typography, and animations. Currently, I work with founders and business owners looking to build and scale their ideas with software solutions. If that sounds like you, let's connect!"
}

function AvatarSection() {
  return (
    <section className="avatar-section">
      <div className="avatar-container">
        <img src="./images/my-avatar.webp" alt="Samuel" />
      </div>
    </section>
  )
}

function ProfileSection({ profile }) {
  if (!profile) return <div className="loading">Loading profile...</div>

  return (
    <div className="profile-info">
      <div className="nice-to-meet-badge">Nice to meet you</div>
      <p className="profile-description">{profile.description}</p>
      <p className="profile-bio">{profile.bio}</p>
      <p className="profile-current">{profile.current_work}</p>
    </div>
  )
}

function MainContentGrid({ profile, experience }) {
  return (
    <section className="main-grid">
      <ProfileSection profile={profile} />
      <ExperienceSection experience={experience} />
    </section>
  )
}

function ExperienceSection({ experience }) {
  if (!experience) return <div className="loading">Loading experience...</div>

  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline">
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <div className="experience-details">
              <h3 className="experience-role">{job.title}</h3>
              <p className="experience-company">{job.company} - {job.location}</p>
            </div>
            <div className="experience-period">{job.period}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedArticleSection({ article }) {
  if (!article) return <div className="loading">Loading article...</div>

  return (
    <section id="articles" className="articles-section">
      <h2 className="articles-title">Artic<span><img className="pencil-icon" src='./images/pencil-icon.svg' /></span>es</h2>
      <div className="articles-grid">
        <article className="article-card">
          <div className="article-image">
            <img src="https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Article" alt={article.title} />
          </div>
          <div className="article-content">
            <div className="article-header">
              <h3 className="article-title">{article.title}</h3>
              <span className="article-category">{article.category}</span>
            </div>
            <p className="article-description">{article.description}</p>
            <p className="article-body">{article.content}</p>
            <Link to={`/articles/${article.id}`} className="read-more-button">Read More</Link>
          </div>
        </article>
      </div>
      <div className="see-more-container">
        <Link to="/articles" className="see-more-button">See More Articles</Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="page-container">
      <AvatarSection />
      <MainContentGrid profile={HARDCODED_PROFILE} experience={HARDCODED_EXPERIENCE} />
      <FeaturedArticleSection article={FEATURED_ARTICLE} />
    </div>
  )
}