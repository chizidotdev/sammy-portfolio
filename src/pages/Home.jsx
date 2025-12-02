import { Link } from 'react-router-dom'

const HARDCODED_PROFILE = {
  name: "Samuel Isirima",
  description: "Hi, I am Samuel Isirima. I am a software engineer with 6+ years of experience building and architecting scalable software systems.",
  bio: "A few years ago, I was debugging PHP in a tiny corner of a photo studio in Port Harcourt, Nigeria, with terrible WiFi. Today, I work with top-notch engineers and designers around the world to build software that solves real problems and helps businesses grow.",
  current_work: "When I'm not writing code or debugging deployments on the cloud (which btw means someone else's computer), I'm playing some beautiful music on my guitar, lifting heavy weights at the gym, or riding a motorbike."
}

const HARDCODED_EXPERIENCE = [
  {
    period: "Mar 2024 - Apr 2025",
    title: "Senior Full-Stack Engineer",
    company: "Turing Client Company",
    location: "California, USA (Remote)"
  },
  {
    period: "May 2023 - Jan 2024",
    title: "Full-Stack Engineer",
    company: "Adsit Digital LLC",
    location: "Virginia, USA (Remote)"
  },
  {
    period: "Dec 2020 - Nov 2022",
    title: "Software Engineer",
    company: "Arraund Technologies LLC",
    location: "Port Harcourt, Nigeria"
  },
  {
    period: "Jan 2019 - Feb 2020",
    title: "Junior Software Engineer",
    company: "JS and N Farms",
    location: "Port Harcourt, Nigeria"
  }
]

const FEATURED_ARTICLE = {
  id: 1,
  title: "Kill The NPC",
  category: "Life",
  description: "God said 'Thou shalt not kill,' then told his people to wipe out entire nations. Those people didn't matter to the story.",
  content: "They were NPCs. Most people are NPCs and they have no idea. They wake up, go to work, do whatever their boss tells them, come home, watch Netflix, sleep, repeat. They're not good at anything specific. If they disappeared tomorrow, nothing would change."
}

function AvatarSection() {
  return (
    <section className="avatar-section">
      <div className="avatar-container">
        <img src="./images/my-avatar.png" alt="Samuel" />
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
            <img src="/images/articles/kill-the-npc.jpg" alt={article.title} />
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