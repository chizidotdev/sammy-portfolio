import { useParams, Link } from 'react-router-dom'

const ARTICLES_DATA = [
  {
    id: 1,
    title: "Kill The NPC",
    category: "Life",
    description: "God said 'Thou shalt not kill,' then told his people to wipe out entire nations. Those people didn't matter to the story.",
    content: "They were NPCs. Most people are NPCs and they have no idea. They wake up, go to work, do whatever their boss tells them, come home, watch Netflix, sleep, repeat. They're not good at anything specific. If they disappeared tomorrow, nothing would change.",
    fullContent: `
      <p>"Thou shalt not kill." - Exodus 20:13</p>
      
      <p>God commanded his children - Do not kill, but then you keep reading the Bible and God's telling his people to go wipe out entire nations. The Canaanites, the Philistines, the Amalekites. All gone. And you're like, wait, what happened to "thou shalt not kill"? Here's the thing though. Those people didn't matter to the story. Whether they lived or died, nothing changed. They were NPCs.</p>
      
      <p>In video games, there are two types of characters: the ones you control, and the ones that just exist in the background. Those background characters are called NPCs, Non-Player Characters. They're the shopkeeper who says the same three lines every time you talk to him. The guard standing at the gate who never moves. The villagers who walk in circles doing nothing important. They're there, but they don't matter. The game would be exactly the same if they disappeared.</p>
      
      <p>Now look around at real life.</p>
                  
      <p>Every religion has this same idea buried in it. Some people matter. Some people don't. And it's not about where you were born or how much money you have. It's about whether you decided to be good at something or just stayed comfortable being nobody.</p>
      
      <p>Most people are NPCs and they have no idea. They wake up, go to work, do whatever their boss tells them, come home, watch Netflix, sleep, repeat. They're not good at anything specific. They're not known for anything. If you asked them what makes them different from anyone else, they'd probably say something generic like "I'm a good person" or "I work hard." Cool. So does everyone else.</p>
      
      <p>And honestly? If they disappeared tomorrow, nothing would change. Someone else would do their job. Their friends would be sad for a bit and then move on. Life would continue exactly the same. That's an NPC. Someone who's alive but not really doing anything with it.</p>
      
      <p>The uncomfortable truth is that most people are like this. They're just existing. Going through the motions. Doing what they're told. Never building anything. Never mastering anything. Just coasting.</p>
      
      <p>And look, I get it. It's comfortable. It's safe. You don't have to risk failing if you never really try. But that's also how you end up being 40 years old with nothing to show for it except some bills and a job you hate.</p>
      
      <p>Here's what makes someone not an NPC: being really good at something. That's it. It doesn't even matter what it is. You could be an amazing engineer. You could be the best barber in your city. You could make the best jollof rice anyone's ever tasted. Just be the person people think of when they need that thing done right.</p>
      
      <p>But most people never get there because they don't commit. They try something for two weeks and quit. They tell themselves they'll start next month. They're waiting for motivation or the perfect time or whatever. And they stay average forever.</p>
      
      <p>The version of you that's okay with being average? Kill that guy. I'm serious. That's the only person you need to get rid of. Because as long as you're listening to that voice that says "it's fine to be mediocre," you're going to stay an NPC.</p>
      
      <p>What does killing your inner NPC actually look like? It's picking something and sticking with it until you're actually good. Not kind of good. Actually good. Good enough that people notice. It's showing up every day even when you're tired. It's failing and not quitting. It's being so undeniable at something that people can't ignore you.</p>
      
      <p>Most people won't do this. They'll read this, think "yeah that makes sense," and then go back to doing exactly what they were doing before. They'll keep waiting. Keep making excuses. Keep telling themselves they'll start eventually. And they'll die as background characters.</p>
      
      <p>But maybe you're different. Maybe you're actually tired of being invisible. Maybe you're ready to stop talking and start building.</p>
      
      <p>So what are you going to be great at? What are you actually building? What's going to make people remember you?</p>
      
      <p>Because here's what nobody wants to admit: the world has enough NPCs. It doesn't need more people just existing and taking up space. It needs people who...</p>
      
      <p><em>[This article is still being written. Check back soon.]</em></p>
    `
  },
  {
    id: 2,
    title: "Sit on the Floor, Stand on the Chair",
    category: "Life",
    description: "You have free will. Like, actually. You can do basically anything you want right now and nobody can stop you.",
    content: "You could quit your job tomorrow. You could move to a different city next week. You could start learning Japanese today. You could delete all your social media. You could eat pizza for breakfast. You could tell that person you like them. You could start that business idea you've been thinking about for three years.",
    fullContent: `
      <p>Sit on the floor. Stand on the chair.</p>
      
      <p>You have free will. Like, actually. You can do basically anything you want right now and nobody can stop you.</p>
      
      <p>You could quit your job tomorrow. You could move to a different city next week. You could start learning Japanese today. You could delete all your social media. You could eat pizza for breakfast. You could tell that person you like them. You could start that business idea you've been thinking about for three years.</p>
      
      <p>The only reason you're not doing any of these things is because you decided not to. Not because you can't. Because you chose not to.</p>
      
      <p>And that's the weird part about free will that nobody talks about. We have it, but most of us don't use it. We just do what we're supposed to do. Wake up at the same time. Go to the same job. Hang out with the same people. Eat the same food. Watch the same shows. Repeat.</p>
      
      <p>We act like we're trapped, but we're not. We're just comfortable. And comfort is the biggest trap of all because it doesn't feel like a trap. It feels safe.</p>
      
      <p>But here's the thing about free will. It's not just about being able to do whatever you want. It's about...</p>
      
      <p><em>[This article is still being written. Check back soon.]</em></p>
    `
  },
  {
    id: 3,
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
      
      <p>Remember, scalability isn't just about handling more users - it's about maintaining developer productivity and code quality as your team and codebase grow.</p>
    `
  },
  {
    id: 4,
    title: "The Art of UI Animation",
    category: "Design",
    description: "How thoughtful animations can transform user experience and create delightful interfaces.",
    content: "Animation in UI design isn't just about making things look pretty - it's about creating meaningful interactions that guide users through your application. This article explores the psychology behind motion design and provides practical techniques for implementing animations that enhance rather than distract.",
    fullContent: `
      <p>Animation in user interfaces is often misunderstood. Too many developers treat it as decoration - something to add visual flair after the "real work" is done. But thoughtful animation is a powerful communication tool that can dramatically improve user experience.</p>
      
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
      
      <p>When done well, animation becomes invisible - users don't notice it consciously, but they feel the interface is more responsive and pleasant to use. That's the art of UI animation.</p>
    `
  },
  {
    id: 5,
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
      <p>Documentation isn't an afterthought - it's part of your API's user interface:</p>
      
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
        {article.id === 1 && (
          <div className="article-detail-image">
            <img src="/images/articles/kill-the-npc.jpg" alt={article.title} />
          </div>
        )}
        <div 
          className="article-detail-content"
          dangerouslySetInnerHTML={{ __html: article.fullContent }}
        />
      </article>
    </div>
  )
}