import { useParams, Link } from 'react-router-dom'

const ARTICLES_DATA = [
  {
    id: 1,
    title: "Kill The NPC",
    category: "Life",
    description: "Hi, I'm Samuel, a software developer and design engineer based in Port Harcourt, Nigeria.",
    content: "I solve unique business problems for startups and business owners in finance and commerce. My projects are often focused on design systems, accessibility, typography, and animations. Currently, I work with founders and business owners looking to build and scale their ideas with software solutions. If that sounds like you, let's connect!",
    fullContent: `
      <p>Breaking free from the NPC mindset is one of the most crucial steps in personal and professional development. As a software developer and design engineer, I've observed how easy it is to fall into automated patterns of thinking and behavior.</p>
      
      <h3>What Does It Mean to Be an NPC?</h3>
      <p>In gaming, NPCs (Non-Player Characters) are programmed entities that follow predetermined scripts. They react predictably to stimuli and lack the agency to make meaningful choices. Unfortunately, many of us operate similarly in real life.</p>
      
      <h3>The Developer's Dilemma</h3>
      <p>As developers, we're trained to think systematically and follow patterns. While this serves us well in coding, it can become a trap in other areas of life. We might find ourselves:</p>
      <ul>
        <li>Following the same routines without questioning their effectiveness</li>
        <li>Accepting industry norms without challenging them</li>
        <li>Building what's expected rather than what's needed</li>
      </ul>
      
      <h3>Breaking the Pattern</h3>
      <p>The solution isn't to abandon structure entirely, but to become more intentional about our choices. When working with startups and business owners in finance and commerce, I've learned that the most innovative solutions come from questioning assumptions.</p>
      
      <p>My focus on design systems, accessibility, and animations stems from this philosophy. Each element should have a purpose beyond mere aesthetics or convention.</p>
      
      <h3>The Path Forward</h3>
      <p>If you're looking to build and scale ideas with software solutions, the first step is killing your inner NPC. Question everything, challenge norms, and build with intention.</p>
      
      <p>Ready to break free from the script? Let's connect and create something meaningful together.</p>
    `
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    category: "Development",
    description: "A deep dive into creating maintainable and scalable React applications using modern best practices.",
    content: "In this article, I explore the architectural patterns and design principles that make React applications truly scalable. From component composition to state management strategies, we'll cover everything you need to know to build applications that can grow with your business needs.",
    fullContent: `
      <p>Building React applications that can scale from a simple prototype to a complex enterprise system requires careful planning and architectural decisions from the very beginning.</p>
      
      <h3>The Foundation: Component Architecture</h3>
      <p>The key to scalable React applications lies in how you structure your components. A well-designed component hierarchy should be:</p>
      <ul>
        <li>Predictable and easy to understand</li>
        <li>Reusable across different parts of the application</li>
        <li>Testable in isolation</li>
        <li>Maintainable as the codebase grows</li>
      </ul>
      
      <h3>State Management Strategies</h3>
      <p>As your application grows, managing state becomes increasingly complex. Here are the strategies I recommend:</p>
      <ul>
        <li><strong>Local state first:</strong> Start with useState and useReducer for component-level state</li>
        <li><strong>Context for shared state:</strong> Use React Context for application-wide state that doesn't change frequently</li>
        <li><strong>External libraries for complex scenarios:</strong> Consider Redux, Zustand, or Jotai for complex state management needs</li>
      </ul>
      
      <h3>Code Organization</h3>
      <p>A scalable React application needs a clear folder structure. I recommend organizing by feature rather than by file type:</p>
      <pre>
src/
  features/
    auth/
      components/
      hooks/
      services/
    dashboard/
      components/
      hooks/
      services/
  shared/
    components/
    hooks/
    utils/
      </pre>
      
      <h3>Performance Considerations</h3>
      <p>Performance optimization should be built into your architecture from the start:</p>
      <ul>
        <li>Use React.memo for components that receive stable props</li>
        <li>Implement code splitting with React.lazy and Suspense</li>
        <li>Optimize bundle size with tree shaking and dynamic imports</li>
        <li>Consider server-side rendering for better initial load times</li>
      </ul>
      
      <p>Remember, scalability isn't just about handling more users—it's about maintaining developer productivity and code quality as your team and codebase grow.</p>
    `
  },
  {
    id: 3,
    title: "The Art of UI Animation",
    category: "Design",
    description: "How thoughtful animations can transform user experience and create delightful interfaces.",
    content: "Animation in UI design isn't just about making things look pretty - it's about creating meaningful interactions that guide users through your application. This article explores the psychology behind motion design and provides practical techniques for implementing animations that enhance rather than distract.",
    fullContent: `
      <p>Animation in user interfaces is often misunderstood. Too many developers treat it as decoration—something to add visual flair after the "real work" is done. But thoughtful animation is a powerful communication tool that can dramatically improve user experience.</p>
      
      <h3>The Psychology of Motion</h3>
      <p>Human brains are wired to notice movement. In the physical world, motion provides crucial information about cause and effect, spatial relationships, and the passage of time. The same principles apply to digital interfaces.</p>
      
      <h3>Types of UI Animation</h3>
      <p>Not all animations serve the same purpose. Understanding the different categories helps you choose the right approach:</p>
      
      <h4>Feedback Animations</h4>
      <p>These confirm user actions and provide immediate response to interactions:</p>
      <ul>
        <li>Button press states</li>
        <li>Form validation feedback</li>
        <li>Loading indicators</li>
      </ul>
      
      <h4>Spatial Animations</h4>
      <p>These help users understand the spatial relationships between interface elements:</p>
      <ul>
        <li>Modal entrances and exits</li>
        <li>Page transitions</li>
        <li>Drawer and menu animations</li>
      </ul>
      
      <h4>Attention-Directing Animations</h4>
      <p>These guide user focus to important elements:</p>
      <ul>
        <li>Notification alerts</li>
        <li>Onboarding highlights</li>
        <li>Call-to-action emphasis</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>Modern web technologies provide several options for implementing animations:</p>
      
      <h4>CSS Animations and Transitions</h4>
      <p>Perfect for simple state changes and hover effects. They're performant and don't require JavaScript.</p>
      
      <h4>JavaScript Animation Libraries</h4>
      <p>Libraries like Framer Motion, React Spring, or GSAP provide more control and complex animation capabilities.</p>
      
      <h4>Web Animations API</h4>
      <p>The native browser API offers a good balance between performance and control.</p>
      
      <h3>Best Practices</h3>
      <ul>
        <li><strong>Respect user preferences:</strong> Always honor prefers-reduced-motion settings</li>
        <li><strong>Keep it fast:</strong> Most UI animations should be between 200-500ms</li>
        <li><strong>Use easing:</strong> Natural easing curves feel more organic than linear animations</li>
        <li><strong>Maintain consistency:</strong> Establish an animation system with consistent timing and easing</li>
      </ul>
      
      <p>When done well, animation becomes invisible—users don't notice it consciously, but they feel the interface is more responsive and pleasant to use. That's the art of UI animation.</p>
    `
  },
  {
    id: 4,
    title: "API Design Philosophy",
    category: "Backend",
    description: "Building APIs that developers love to use - principles for creating intuitive and robust interfaces.",
    content: "Great APIs are invisible to the end user but beloved by developers. This piece covers the fundamental principles of API design, from RESTful conventions to error handling strategies that make integration seamless.",
    fullContent: `
      <p>An API is a contract between your service and the developers who will integrate with it. Like any good contract, it should be clear, comprehensive, and fair to both parties. Great API design is both an art and a science.</p>
      
      <h3>The Foundation: RESTful Principles</h3>
      <p>While REST isn't the only API paradigm, its principles provide an excellent foundation for most use cases:</p>
      
      <h4>Resource-Based URLs</h4>
      <p>Design URLs around resources (nouns) rather than actions (verbs):</p>
      <ul>
        <li>Good: <code>GET /users/123</code></li>
        <li>Bad: <code>GET /getUser?id=123</code></li>
      </ul>
      
      <h4>HTTP Methods with Semantic Meaning</h4>
      <ul>
        <li><strong>GET:</strong> Retrieve data</li>
        <li><strong>POST:</strong> Create new resources</li>
        <li><strong>PUT:</strong> Update entire resources</li>
        <li><strong>PATCH:</strong> Partial updates</li>
        <li><strong>DELETE:</strong> Remove resources</li>
      </ul>
      
      <h3>Response Design</h3>
      <p>Your API responses should be consistent, predictable, and informative:</p>
      
      <h4>Consistent Structure</h4>
      <pre>
{
  "data": { /* actual response data */ },
  "meta": {
    "timestamp": "2024-01-01T00:00:00Z",
    "version": "1.0"
  },
  "errors": []
}
      </pre>
      
      <h4>Proper HTTP Status Codes</h4>
      <ul>
        <li><strong>200 OK:</strong> Successful GET, PUT, PATCH</li>
        <li><strong>201 Created:</strong> Successful POST</li>
        <li><strong>204 No Content:</strong> Successful DELETE</li>
        <li><strong>400 Bad Request:</strong> Client error</li>
        <li><strong>401 Unauthorized:</strong> Authentication required</li>
        <li><strong>403 Forbidden:</strong> Access denied</li>
        <li><strong>404 Not Found:</strong> Resource doesn't exist</li>
        <li><strong>500 Internal Server Error:</strong> Server error</li>
      </ul>
      
      <h3>Error Handling</h3>
      <p>Good error handling can make the difference between a frustrating and delightful developer experience:</p>
      
      <pre>
{
  "errors": [{
    "code": "VALIDATION_ERROR",
    "message": "Email address is required",
    "field": "email",
    "details": {
      "constraint": "required",
      "provided": null
    }
  }]
}
      </pre>
      
      <h3>Documentation as a First-Class Citizen</h3>
      <p>Documentation isn't an afterthought—it's part of your API's user interface:</p>
      
      <ul>
        <li>Use OpenAPI/Swagger specifications</li>
        <li>Provide interactive examples</li>
        <li>Include authentication examples</li>
        <li>Show error responses, not just success cases</li>
        <li>Keep documentation in sync with implementation</li>
      </ul>
      
      <h3>Versioning Strategy</h3>
      <p>Plan for change from the beginning:</p>
      
      <ul>
        <li><strong>URL versioning:</strong> <code>/v1/users</code></li>
        <li><strong>Header versioning:</strong> <code>Accept: application/vnd.myapi.v1+json</code></li>
        <li><strong>Parameter versioning:</strong> <code>?version=1</code></li>
      </ul>
      
      <h3>Security Considerations</h3>
      <ul>
        <li>Use HTTPS everywhere</li>
        <li>Implement proper authentication (OAuth 2.0, JWT)</li>
        <li>Rate limiting to prevent abuse</li>
        <li>Input validation and sanitization</li>
        <li>Never expose sensitive data in URLs</li>
      </ul>
      
      <p>Remember: a great API is one that developers can understand and integrate with quickly, make fewer mistakes with, and continue to find valuable as their needs evolve.</p>
    `
  }
]

export default function ArticleDetail() {
  const { id } = useParams()
  const article = ARTICLES_DATA.find(article => article.id === parseInt(id))

  if (!article) {
    return (
      <div className="page-container">
        <div className="article-not-found">
          <h1>Article Not Found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/articles" className="back-link">← Back to Articles</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <article className="article-detail">
        <div className="article-detail-header">
          <Link to="/articles" className="back-link">← Back to Articles</Link>
          <div className="article-detail-meta">
            <span className="article-detail-category">{article.category}</span>
            <h1 className="article-detail-title">{article.title}</h1>
            <p className="article-detail-description">{article.description}</p>
          </div>
        </div>
        <div className="article-detail-image">
          <img src="https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Article" alt={article.title} />
        </div>
        <div 
          className="article-detail-content"
          dangerouslySetInnerHTML={{ __html: article.fullContent }}
        />
      </article>
    </div>
  )
}