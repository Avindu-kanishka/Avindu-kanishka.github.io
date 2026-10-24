import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Terminal,
  TrendingUp,
  X,
} from "lucide-react";

const profileImage =
  "https://raw.githubusercontent.com/Avindu-kanishka/Avindu-kanishka.github.io/main/pp2.jpg";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming & Querying",
    note: "Languages for data work and software.",
    skills: ["Python", "SQL", "JavaScript", "Java", "C", "PHP"],
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data Science & Analytics",
    note: "Explore data and communicate findings.",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI", "EDA", "Data visualization"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & AI",
    note: "Train, compare, and interpret models.",
    skills: ["Scikit-learn", "XGBoost", "Random Forest", "Logistic Regression", "Classification", "Regression", "Feature engineering", "Cross-validation", "Model evaluation", "SHAP", "Anomaly detection"],
  },
  {
    icon: TrendingUp,
    title: "Forecasting & Time Series",
    note: "Model trends and evaluate forecasts.",
    skills: ["SARIMA", "Seasonal Naive", "Random Forest Forecasting", "Time-series analysis", "Seasonality", "Train/test validation", "MAE & RMSE", "MAPE & WAPE"],
  },
  {
    icon: Database,
    title: "Data Engineering & Databases",
    note: "Build repeatable data workflows.",
    skills: ["PostgreSQL", "SQLAlchemy", "ETL pipelines", "REST APIs", "Prefect", "Data cleaning", "Data validation", "CSV / Excel processing", "SQL queries"],
  },
  {
    icon: Terminal,
    title: "Development & Tools",
    note: "Build, test, and share applications.",
    skills: ["Streamlit", "Flask", "React", "Vite", "Node.js", "Next.js", "HTML & CSS", "Git & GitHub", "Jupyter Notebook", "VS Code", "MLflow"],
  },
];

const projects = [
  {
    title: "Food Price Intelligence",
    category: "Machine Learning",
    icon: TrendingUp,
    number: "01",
    description:
      "Explore Sri Lankan vegetable prices with forecasting, price-trend classification, and anomaly detection using HARTI market data.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Streamlit"],
    repo: "https://github.com/Avindu-kanishka/food-price-intelligence-sri-lanka",
    accent: "mint",
  },
  {
    title: "Sri Lanka Tourism Analytics",
    category: "Data Analytics",
    icon: ChartNoAxesCombined,
    number: "02",
    description:
      "Analyze tourist-arrival trends from SLTDA data, compare source markets, and explore time-series forecasting and market segments.",
    tags: ["Python", "Pandas", "Forecasting", "Analytics"],
    repo: "https://github.com/Avindu-kanishka/SLTDA-Tourism-Capstone",
    accent: "blue",
  },
  {
    title: "Sri Lanka Weather ETL",
    category: "Data Engineering",
    icon: Database,
    number: "03",
    description:
      "Collect and transform weather data for Sri Lankan districts, store observations in PostgreSQL, and explore trends in a dashboard.",
    tags: ["Python", "PostgreSQL", "ETL", "Streamlit"],
    repo: "https://github.com/Avindu-kanishka/weather-etl-pipeline",
    accent: "gold",
  },
  {
    title: "Sri Lankan Review Sentiment",
    category: "NLP",
    icon: BrainCircuit,
    number: "04",
    description:
      "Study sentiment in local app reviews, with special attention to Sinhala-English code-mixed text commonly written in Singlish.",
    tags: ["NLP", "TF-IDF", "XLM-RoBERTa", "MLflow"],
    repo: "https://github.com/Avindu-kanishka/sri-lankan-sentiment-analysis",
    accent: "violet",
  },
  {
    title: "Student Performance ML",
    category: "Machine Learning",
    icon: ChartNoAxesCombined,
    number: "05",
    description:
      "Investigate whether mental-health and lifestyle indicators predict CGPA, using model comparisons and transparent baseline evaluation.",
    tags: ["Python", "Regression", "Scikit-learn", "SHAP"],
    repo: "https://github.com/Avindu-kanishka/student-performance-ml",
    accent: "rose",
  },
];

const filters = ["All", "Machine Learning", "Data Analytics", "Data Engineering", "NLP"];

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Avindu Kanishka home">
            <span className="brand-mark">AK<span>.</span></span>
            <span className="brand-name">Avindu Kanishka</span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Open to Data Science & ML opportunities
            </div>
            <p className="hero-kicker">DATA SCIENCE · MACHINE LEARNING · ANALYTICS</p>
            <h1>
              Turning data into <span>decisions</span> and intelligent products.
            </h1>
            <p className="hero-description">
              I'm Avindu Kanishka, a Data Science undergraduate interested in building practical
              machine learning solutions, uncovering useful patterns, and creating data products
              that solve real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              <a href="https://github.com/Avindu-kanishka" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/avindu-kanishka-0891ab332/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="mailto:Avindu665@gmail.com">
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Profile and areas of focus">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="profile-frame">
              <img src={profileImage} alt="Avindu Kanishka" />
              <div className="profile-caption">
                <span className="profile-caption-icon"><Sparkles size={16} /></span>
                <span><strong>Curious by nature.</strong><small>Driven by data.</small></span>
              </div>
            </div>
            <div className="floating-note note-top">
              <span className="note-icon note-icon--green"><ChartNoAxesCombined size={17} /></span>
              <span><strong>Data → Insight</strong><small>Find the signal</small></span>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-icon note-icon--blue"><BrainCircuit size={17} /></span>
              <span><strong>ML & AI</strong><small>Build with purpose</small></span>
            </div>
            <div className="visual-index">01 / DATA-DRIVEN THINKING</div>
          </div>
        </section>

        <section className="quick-facts" aria-label="Portfolio highlights">
          <div className="quick-facts-inner">
            <div className="fact"><span className="fact-symbol">01</span><span><strong>Real-world projects</strong><small>Data, ML and engineering</small></span></div>
            <div className="fact"><span className="fact-symbol">02</span><span><strong>End-to-end thinking</strong><small>From raw data to insight</small></span></div>
            <div className="fact"><span className="fact-symbol">03</span><span><strong>Based in Sri Lanka</strong><small>Learning by building</small></span></div>
          </div>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="about-intro">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity first.<br /><span className="heading-accent">Impact always.</span></>} />
            <div className="about-body">
              <p>
                I'm pursuing a BSc (Hons) in Data Science at Sabaragamuwa University of Sri Lanka.
                I enjoy exploring how data can explain what is happening, why it matters, and what
                we can do next.
              </p>
              <p>
                My projects span analytics, forecasting, machine learning, natural language
                processing, and data pipelines. I care about more than model scores: I value clear
                evaluation, reproducible workflows, and results that people can understand and use.
              </p>
              <a className="text-link" href="#projects">See what I've been building <ArrowDownRight size={17} /></a>
            </div>
          </div>

          <div className="education-panel">
            <div className="education-panel-top">
              <span className="panel-icon"><Terminal size={20} /></span>
              <span className="panel-label">CURRENTLY</span>
              <span className="panel-dot" />
            </div>
            <h3>Learning by building.</h3>
            <p>Connecting academic foundations with practical, portfolio-driven projects.</p>
            <div className="education-detail">
              <span className="education-icon"><Code2 size={18} /></span>
              <span><small>Education</small><strong>BSc (Hons) in Data Science</strong><em>Sabaragamuwa University of Sri Lanka</em></span>
            </div>
            <div className="education-detail">
              <span className="education-icon"><MapPin size={18} /></span>
              <span><small>Location</small><strong>Sri Lanka</strong><em>Interested in remote and local opportunities</em></span>
            </div>
            <div className="panel-bottom-line"><span /> Learn. Build. Evaluate. Improve.</div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="TECH STACK & METHODS"
              title={<>Tools for <span className="heading-accent">real-world work.</span></>}
              description="Libraries, platforms, and methods used across my data science, forecasting, and software projects. I keep expanding this toolkit as I learn."
              align="center"
            />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-top">
                      <span className="skill-icon"><Icon size={21} /></span>
                      <span className="skill-number">0{index + 1}</span>
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.note}</p>
                    <div className="skill-tags">
                      {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="projects-heading-row">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title={<>Projects with a <span className="heading-accent">purpose.</span></>}
              description="A selection of experiments and end-to-end projects built around real datasets and practical questions."
            />
            <a className="github-more-link" href="https://github.com/Avindu-kanishka" target="_blank" rel="noreferrer">
              All repositories <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? "filter-pill filter-pill--active" : "filter-pill"}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className={`project-card project-card--${project.accent}`} key={project.title}>
                  <div className="project-card-top">
                    <span className="project-icon"><Icon size={21} /></span>
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
                    View source code <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
          <div className="projects-footer-note"><Sparkles size={16} /> More experiments and learning projects live on GitHub.</div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-copy">
              <span className="eyebrow eyebrow--light">LET'S CONNECT</span>
              <h2>Good things happen when <span>curiosity meets collaboration.</span></h2>
              <p>
                Looking to connect with teams working on data science, machine learning, and
                analytics. I'm happy to talk about projects, internships, or ideas worth exploring.
              </p>
              <a className="button button-light" href="mailto:Avindu665@gmail.com">
                Say hello <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="contact-links">
              <a href="mailto:Avindu665@gmail.com" className="contact-link-card">
                <span className="contact-link-icon"><Mail size={20} /></span>
                <span><small>EMAIL</small><strong>Avindu665@gmail.com</strong></span>
                <ArrowUpRight size={18} />
              </a>
              <a href="https://www.linkedin.com/in/avindu-kanishka-0891ab332/" target="_blank" rel="noreferrer" className="contact-link-card">
                <span className="contact-link-icon"><Linkedin size={20} /></span>
                <span><small>LINKEDIN</small><strong>Let's connect professionally</strong></span>
                <ArrowUpRight size={18} />
              </a>
              <a href="https://github.com/Avindu-kanishka" target="_blank" rel="noreferrer" className="contact-link-card">
                <span className="contact-link-icon"><Github size={20} /></span>
                <span><small>GITHUB</small><strong>Explore my repositories</strong></span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand brand--footer" href="#home"><span className="brand-mark">AK<span>.</span></span><span className="brand-name">Avindu Kanishka</span></a>
          <p>Designed with intention. Built with React.</p>
          <a className="back-to-top" href="#home">Back to top ↑</a>
          <small>© {new Date().getFullYear()} Avindu Kanishka</small>
        </div>
      </footer>
    </>
  );
}

export default App;
