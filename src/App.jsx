import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="top-nav">
          <div className="logo">Quetext</div>
          <ul className="nav-links">
            <li>Plagiarism Checker</li>
            <li>AI Detector</li>
            <li>AITutorMe</li>
            <li>Citation Generator</li>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
          <div className="auth-buttons">
            <button className="login-button">Login</button>
            <button className="get-started-button">Get Started</button>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1>Original Writing, Made Easy With <br /> Quetext</h1>
        <p>Quetext's deep search technology analyzes your text to identify plagiarism and AI, to resolve writing issues, and build citations with ease. You wouldn't want to write without it.</p>
        <div className="hero-buttons">
          <button className="check-plagiarism-button">Check for Plagiarism</button>
          <button className="check-ai-button">Check for AI</button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <span className="feature-icon">🔍</span>
          <h3>DeepSearch™ technology</h3>
          <p>With contextual analysis, word placement, and our smart algorithms, checking your writing has never been easier.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">⚡</span>
          <h3>Lightspeed recognition</h3>
          <p>Our software pairs speed with the accuracy of DeepSearch™ technology.</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🔒</span>
          <h3>Privacy comes standard</h3>
          <p>We back industry-leading technology with a three-part pledge, Our Commitment to you</p>
        </div>
      </section>

      <section className="tool-section">
        <div className="tool-image">
          {/* Placeholder for the image */}
        </div>
        <div className="tool-content">
          <h2>The #1 Tool for Detecting Plagiarism and AI for students.</h2>
          <p>We've helped more than 5 million students, teachers, and professionals identify potential plagiarism in their work. Now offering AI Content Detection!</p>
          <ul className="tool-features">
            <li><span>✓</span> Remarks Tools</li>
            <li><span>✓</span> Enhanced Citation Generator</li>
            <li><span>✓</span> Bulk Uploads</li>
            <li><span>✓</span> Grammar &amp; Spell Check</li>
            <li><span>✓</span> Source Exclusion</li>
            <li><span>✓</span> Deep Search</li>
          </ul>
          <div className="tool-buttons">
            <button className="free-plagiarism-checker">Free Plagiarism Checker <span>→</span></button>
            <button className="free-ai-content-detector">Free AI Content Detector <span>→</span></button>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <div className="feedback-content">
          <h2>Rich &amp; Intuitive Feedback.</h2>
          <p>Detect plagiarism and AI with less stress with a click of a button and an easy, immersive experience.</p>

          <div className="feedback-features">
            <div className="feedback-feature">
              <span className="feedback-icon">🔵</span>
              <h3>ColorGrade™ Feedback</h3>
              <p>Easily spot exact plagiarism, AI and remarks exact matches vs. near-exact or 'fuzzy' matches with corresponding colors.</p>
            </div>
            <div className="feedback-feature">
              <span className="feedback-icon">👓</span>
              <h3>Interactive Snippet Text</h3>
              <p>Easily drill-down on your matches side-by-side with our interactive and intuitive snippet text viewer.</p>
            </div>
            <div className="feedback-feature">
              <span className="feedback-icon">🔒</span>
              <h3>Comprehensive Scoring</h3>
              <p>Our comprehensive scoring for plagiarism and AI is backed by billions of internet sources.</p>
            </div>
          </div>
        </div>
        <div className="feedback-image">
          {/* Placeholder for the feedback image */}
        </div>
      </section>

      <section className="inspiration-section">
        <h2>Need some inspiration?</h2>
        <p>Check out our latest blog posts!</p>
        <div className="blog-posts">
          <div className="blog-post">
            <div className="blog-image">
              {/* Placeholder for blog post image */}
            </div>
            <h3>Best AI for Writing: 15 Best AI Content Tools</h3>
            <p className="blog-date">January, 3</p>
          </div>
          <div className="blog-post">
            <div className="blog-image">
              {/* Placeholder for blog post image */}
            </div>
            <h3>Why Is Plagiarism Bad? And How To Avoid It</h3>
            <p className="blog-date">December, 12</p>
          </div>
          <div className="blog-post">
            <div className="blog-image">
              {/* Placeholder for blog post image */}
            </div>
            <h3>How to paraphrase content: Step-by-step guide</h3>
            <p className="blog-date">December, 6</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Is Quetext reliable?</h2>
        <p>Quetext is reliable, safe, and extremely effective for verifying original work with ease. Rigorous testing is involved with every update made to the product, and the comprehensive plagiarism score users receive is backed by billions of internet sources. Students, teachers, and content writers alike rely on Quetext for fast and accurate verification.</p>

        <h2>What languages does Quetext support?</h2>
        <p>Quetext currently supports the following languages:</p>
        <div className="language-flags">
          <div className="language">
            {/* Placeholder for US flag */}
            <p>English (US)</p>
          </div>
          <div className="language">
            {/* Placeholder for Australian flag */}
            <p>English (Australia)</p>
          </div>
          <div className="language">
            {/* Placeholder for British flag */}
            <p>English (British)</p>
          </div>
          <div className="language">
            {/* Placeholder for Canadian flag */}
            <p>English (Canada)</p>
          </div>
          <div className="language">
            {/* Placeholder for New Zealand flag */}
            <p>English (New Zealand)</p>
          </div>
          <div className="language">
            {/* Placeholder for South African flag */}
            <p>English (South Africa)</p>
          </div>
          <div className="language">
            {/* Placeholder for French flag */}
            <p>French (Français)</p>
          </div>
          <div className="language">
            {/* Placeholder for Spanish flag */}
            <p>Spanish (Español)</p>
          </div>
          <div className="language">
            {/* Placeholder for German flag */}
            <p>German (Deutsch)</p>
          </div>
          <div className="language">
            {/* Placeholder for Italian flag */}
            <p>Italian (Italiana)</p>
          </div>
          <div className="language">
            {/* Placeholder for Portuguese flag */}
            <p>Portuguese (Portuguesa)</p>
          </div>
          <div className="language">
            {/* Placeholder for Polish flag */}
            <p>Polish (Polski)</p>
          </div>
          <div className="language">
            {/* Placeholder for Romanian flag */}
            <p>Romanian (Romana)</p>
          </div>
          <div className="language">
            {/* Placeholder for Dutch flag */}
            <p>Dutch (Nederlands)</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Try Quetext today!</h2>
        <p>Ready to stop wasting time with that old-school "plagiarism tool" from the 90's? Start using Quetext today for free!</p>
        <button className="signup-button">Signup Free!</button>
      </section>

      <footer className="footer">
        <div className="footer-logo">Quetext</div>
        <p>support@quetext.com</p>
        <p>© 2025, Quetext Software LLC.</p>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>Our Commitment</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Plagiarism Checker</h3>
            <ul>
              <li>Plagiarism Checker</li>
              <li>Alternatives to Turnitin</li>
              <li>Alternatives to Grammarly</li>
              <li>For Students</li>
              <li>For Teachers</li>
              <li>For Copywriters</li>
              <li>Chrome Extension</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>AI Content Detector</li>
              <li>AITutorMe</li>
              <li>Citation Generator</li>
              <li>Pricing</li>
              <li>Technology</li>
              <li>Signup</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <ul>
              <li>Help Center</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>DMCA Notice</li>
              <li>Cookie Policy</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
