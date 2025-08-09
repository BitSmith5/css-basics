import { useState } from 'react';
import './CSSPracticeScaffold.css';

export default function CSSPracticeScaffold() {
  const [activeSection, setActiveSection] = useState('colors');

  const colorPalette = [
    { name: 'Ocean Blue', hex: '#0077BE', rgb: 'rgb(0, 119, 190)' },
    { name: 'Sunset Orange', hex: '#FF6B35', rgb: 'rgb(255, 107, 53)' },
    { name: 'Forest Green', hex: '#2D5016', rgb: 'rgb(45, 80, 22)' },
    { name: 'Lavender', hex: '#8B7BB8', rgb: 'rgb(139, 123, 184)' },
    { name: 'Coral Pink', hex: '#FF7F7F', rgb: 'rgb(255, 127, 127)' },
    { name: 'Golden Yellow', hex: '#FFD700', rgb: 'rgb(255, 215, 0)' },
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navigation">
        <button
          className={`nav-button ${activeSection === 'colors' ? 'active' : ''}`}
          onClick={() => setActiveSection('colors')}
        >
          Color Palette
        </button>
        <button
          className={`nav-button ${activeSection === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveSection('profile')}
        >
          Profile Card
        </button>
        <button
          className={`nav-button ${activeSection === 'buttons' ? 'active' : ''}`}
          onClick={() => setActiveSection('buttons')}
        >
          Buttons
        </button>
        <button
          className={`nav-button ${activeSection === 'typography' ? 'active' : ''}`}
          onClick={() => setActiveSection('typography')}
        >
          Typography
        </button>
        <button
          className={`nav-button ${activeSection === 'layout' ? 'active' : ''}`}
          onClick={() => setActiveSection('layout')}
        >
          Layout
        </button>
      </nav>

      {/* Main Content */}
      <main className="main-content">

        {/* 1. Color Palette Section */}
        {activeSection === 'colors' && (
          <section className="color-section">
            <h2 className="section-title">Personal Color Palette</h2>
            <div className="color-grid">
              {colorPalette.map((color, index) => (
                <div key={index} className="color-card">
                  <div
                    className="color-swatch"
                    style={{ backgroundColor: color.hex }}
                  >
                    <p className="color-hex">HEX: {color.hex}</p>
                    <p className="color-rgb">RGB: {color.rgb}</p>
                  </div>
                  <h3 className="color-name">{color.name}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. Profile Card Section */}
        {activeSection === 'profile' && (
          <section className="profile-section">
            <div className="profile-card">
              <div className="profile-image">
                <div className="avatar-placeholder">👤</div>
              </div>
              <h2 className="profile-name">Alex Designer</h2>
              <p className="profile-bio">
                Creative frontend developer passionate about beautiful user interfaces and clean code.
                Always learning something new!
              </p>
              <div className="social-links">
                <a href="#" className="social-link github">GitHub</a>
                <a href="#" className="social-link twitter">Twitter</a>
                <a href="#" className="social-link linkedin">LinkedIn</a>
                <a href="#" className="social-link email">Email</a>
              </div>
            </div>
          </section>
        )}

        {/* 3. Button Showcase Section */}
        {activeSection === 'buttons' && (
          <section className="button-section">
            <h2 className="section-title">Button Showcase</h2>
            <div className="button-grid">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-gradient">Gradient Button</button>
              <button className="btn btn-outline">Outline Button</button>
              <button className="btn btn-shadow">Shadow Button</button>
              <button className="btn btn-rounded">Rounded Button</button>
              <button className="btn btn-flat">Flat Button</button>
              <button className="btn btn-neon">Neon Button</button>
              <button className="btn btn-glass">Glass Button</button>
              <button className="btn btn-icon">❤️ Icon Button</button>
              <button className="btn btn-animated">Animated Button</button>
            </div>
          </section>
        )}

        {/* 4. Typography Section */}
        {activeSection === 'typography' && (
          <section className="typography-section">
            <h2 className="section-title">Typography Playground</h2>

            <div className="typography-content">
              <div className="headings">
                <h1 className="heading-1">Heading 1 - Main Title</h1>
                <h2 className="heading-2">Heading 2 - Section Title</h2>
                <h3 className="heading-3">Heading 3 - Subsection</h3>
                <h4 className="heading-4">Heading 4 - Minor Heading</h4>
              </div>

              <div className="paragraphs">
                <p className="paragraph-large">
                  This is a large paragraph with more emphasis. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="paragraph-normal">
                  This is a normal paragraph for regular body text. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="paragraph-small">
                  This is smaller text, often used for captions or secondary information.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                </p>
              </div>

              <div className="quotes">
                <blockquote className="quote-fancy">
                  "Design is not just what it looks like and feels like. Design is how it works."
                  <cite className="quote-author">- Steve Jobs</cite>
                </blockquote>
                <blockquote className="quote-simple">
                  "Simplicity is the ultimate sophistication."
                </blockquote>
              </div>

              <div className="links">
                <p className="link-examples">
                  Here are some <a href="#" className="link-default">default links</a>,
                  <a href="#" className="link-hover">hover effect links</a>,
                  <a href="#" className="link-underline">underlined links</a>, and
                  <a href="#" className="link-button">button-style links</a>.
                </p>
              </div>

              <div className="text-styles">
                <p className="text-sample">
                  <span className="text-bold">Bold text</span>,
                  <span className="text-italic">italic text</span>,
                  <span className="text-underline">underlined text</span>,
                  <span className="text-strikethrough">strikethrough text</span>,
                  <span className="text-highlight">highlighted text</span>, and
                  <code className="text-code">inline code</code>.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 5. Layout Section */}
        {activeSection === 'layout' && (
          <section className="layout-section">
            <h2 className="section-title">2-Column Layout</h2>
            <div className="two-column-layout">
              <main className="main-column">
                <article className="article">
                  <h3 className="article-title">Main Content Area</h3>
                  <p className="article-text">
                    This is the main content column. It should take up more space than the sidebar.
                    You can practice using flexbox or CSS Grid to create this layout.
                  </p>
                  <p className="article-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris.
                  </p>
                  <h4 className="article-subtitle">Another Section</h4>
                  <p className="article-text">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </article>
              </main>

              <aside className="sidebar">
                <div className="sidebar-widget">
                  <h4 className="widget-title">About</h4>
                  <p className="widget-text">
                    This is a sidebar widget. Sidebars typically contain supplementary information.
                  </p>
                </div>

                <div className="sidebar-widget">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul className="widget-list">
                    <li className="widget-list-item"><a href="#" className="widget-link">Home</a></li>
                    <li className="widget-list-item"><a href="#" className="widget-link">About</a></li>
                    <li className="widget-list-item"><a href="#" className="widget-link">Services</a></li>
                    <li className="widget-list-item"><a href="#" className="widget-link">Contact</a></li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h4 className="widget-title">Recent Updates</h4>
                  <div className="update-item">
                    <span className="update-date">Dec 15</span>
                    <span className="update-text">New feature released</span>
                  </div>
                  <div className="update-item">
                    <span className="update-date">Dec 10</span>
                    <span className="update-text">Bug fixes and improvements</span>
                  </div>
                  <div className="update-item">
                    <span className="update-date">Dec 5</span>
                    <span className="update-text">User interface updates</span>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        )}

      </main>
    </div>
  );
}