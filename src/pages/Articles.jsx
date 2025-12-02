import { Link } from 'react-router-dom'

const ARTICLES_DATA = [
  {
    id: 1,
    title: "Kill The NPC",
    category: "Life",
    description: "God said 'Thou shalt not kill,' then told his people to wipe out entire nations. Those people didn't matter to the story.",
    content: "They were NPCs. Most people are NPCs and they have no idea. They wake up, go to work, do whatever their boss tells them, come home, watch Netflix, sleep, repeat. They're not good at anything specific. If they disappeared tomorrow, nothing would change."
  },
  {
    id: 2,
    title: "Sit on the Floor, Stand on the Chair",
    category: "Life",
    description: "You have free will. Like, actually. You can do basically anything you want right now and nobody can stop you.",
    content: "You could quit your job tomorrow. You could move to a different city next week. You could start learning Japanese today. You could delete all your social media. You could eat pizza for breakfast. You could tell that person you like them. You could start that business idea you've been thinking about for three years."
  },
  {
    id: 3,
    title: "Building Scalable React Applications",
    category: "Development",
    description: "A deep dive into creating maintainable and scalable React applications using modern best practices.",
    content: "In this article, I explore the architectural patterns and design principles that make React applications truly scalable. From component composition to state management strategies, we'll cover everything you need to know to build applications that can grow with your business needs."
  },
  {
    id: 4,
    title: "The Art of UI Animation",
    category: "Design",
    description: "How thoughtful animations can transform user experience and create delightful interfaces.",
    content: "Animation in UI design isn't just about making things look pretty - it's about creating meaningful interactions that guide users through your application. This article explores the psychology behind motion design and provides practical techniques for implementing animations that enhance rather than distract."
  },
  {
    id: 5,
    title: "API Design Philosophy",
    category: "Backend",
    description: "Building APIs that developers love to use - principles for creating intuitive and robust interfaces.",
    content: "Great APIs are invisible to the end user but beloved by developers. This piece covers the fundamental principles of API design, from RESTful conventions to error handling strategies that make integration seamless."
  }
]

export default function Articles() {
  return (
    <div className="page-container">
      <section className="articles-page">
        <h1 className="articles-page-title">Artic<span><img className="pencil-icon" src='./images/pencil-icon.svg' /></span>es</h1>
        <p className="articles-page-description">
          Thoughts on development, design, and building great software experiences.
        </p>
        <div className="articles-grid-page">
          {ARTICLES_DATA.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-image">
                <img src={
                  article.id === 1 ? "/images/articles/kill-the-npc.jpg" :
                  article.id === 2 ? "/images/articles/sit-on-the-floor.jpg" :
                  article.id === 3 ? "/images/articles/react-application.jpg" :
                  article.id === 5 ? "/images/articles/api-design.avif" :
                  "https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Article"
                } alt={article.title} />
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
          ))}
        </div>
      </section>
    </div>
  )
}