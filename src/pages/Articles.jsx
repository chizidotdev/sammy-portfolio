import { Link } from 'react-router-dom'

const ARTICLES_DATA = [
  {
    id: 1,
    title: "Kill The NPC",
    category: "Life",
    description: "Hi, I'm Samuel, a software developer and design engineer based in Port Harcourt, Nigeria.",
    content: "I solve unique business problems for startups and business owners in finance and commerce. My projects are often focused on design systems, accessibility, typography, and animations. Currently, I work with founders and business owners looking to build and scale their ideas with software solutions. If that sounds like you, let's connect!"
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    category: "Development",
    description: "A deep dive into creating maintainable and scalable React applications using modern best practices.",
    content: "In this article, I explore the architectural patterns and design principles that make React applications truly scalable. From component composition to state management strategies, we'll cover everything you need to know to build applications that can grow with your business needs."
  },
  {
    id: 3,
    title: "The Art of UI Animation",
    category: "Design",
    description: "How thoughtful animations can transform user experience and create delightful interfaces.",
    content: "Animation in UI design isn't just about making things look pretty - it's about creating meaningful interactions that guide users through your application. This article explores the psychology behind motion design and provides practical techniques for implementing animations that enhance rather than distract."
  },
  {
    id: 4,
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
          ))}
        </div>
      </section>
    </div>
  )
}