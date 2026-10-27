
import React from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  ShoppingBag,
  BriefcaseBusiness,
  Clapperboard,
  Sparkles,
  Menu,
  X,
  Layers3,
  Zap,
  ShieldCheck,
} from "lucide-react";

const products = [
  {
    number: "01",
    name: "Web Developer",
    category: "BUILD & SHIP",
    description:
      "Turn ideas into polished websites and applications. Build, preview, test, and prepare to launch.",
    icon: Code2,
    color: "blue",
    features: ["Website builder", "Code workspace", "Deployment tools"],
  },
  {
    number: "02",
    name: "Dropshipper",
    category: "SELL & SCALE",
    description:
      "Research products, compare suppliers, understand margins, and manage your online store.",
    icon: ShoppingBag,
    color: "green",
    features: ["Product research", "Supplier comparison", "Store operations"],
  },
  {
    number: "03",
    name: "Business",
    category: "ORGANIZE & GROW",
    description:
      "Bring your customers, tasks, documents, and business workflows into one organized workspace.",
    icon: BriefcaseBusiness,
    color: "blue",
    features: ["Customer management", "Task planning", "Workflow tools"],
  },
  {
    number: "04",
    name: "Creator",
    category: "CREATE & PUBLISH",
    description:
      "Organize your media, develop creative projects, and manage your content publishing workflow.",
    icon: Clapperboard,
    color: "green",
    features: ["Media library", "Creative projects", "Publishing tools"],
  },
];

function ProductCard({ product }) {
  const Icon = product.icon;

  return (
    <article className={`product-card ${product.color}`}>
      <div className="product-card-top">
        <span className="product-number">{product.number}</span>
        <span className="product-category">{product.category}</span>
      </div>

      <div className="product-icon">
        <Icon size={25} strokeWidth={1.7} />
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <ul className="feature-list">
        {product.features.map((feature) => (
          <li key={feature}>
            <span className="feature-dot" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className="product-link"
        onClick={() =>
          document.getElementById("get-started")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Explore workspace <ArrowRight size={16} />
      </button>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollTo = (id) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Peak 11 home"
        >
          <span className="brand-mark">
            <Layers3 size={21} />
          </span>
          <span>peak<span className="brand-number">11</span></span>
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <button
            className="nav-cta"
            onClick={() => scrollTo("get-started")}
          >
            Get started <ArrowRight size={16} />
          </button>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            ONE PLATFORM. FOUR WAYS TO BUILD.
          </div>

          <h1>
            Your ambition.
            <br />
            <span className="hero-highlight">Without limits.</span>
          </h1>

          <p className="hero-description">
            The tools to build your website, grow your business,
            run your store, and bring your creative ideas to life.
            All in one place.
          </p>

          <div className="hero-actions">
            <button
              className="button-primary"
              onClick={() => scrollTo("get-started")}
            >
              Find your workspace <ArrowRight size={18} />
            </button>
            <button
              className="button-secondary"
              onClick={() => scrollTo("products")}
            >
              Explore products <ArrowDown size={17} />
            </button>
          </div>

          <div className="hero-proof">
            <span><ShieldCheck size={16} /> Purpose-built workspaces</span>
            <span><Zap size={16} /> Built to help you move faster</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="floating-panel panel-back">
            <Code2 size={23} />
            <span>Build something real.</span>
          </div>

          <div className="hero-core">
            <div className="core-glow" />
            <div className="core-mark">
              <Layers3 size={49} strokeWidth={1.3} />
            </div>
            <span className="core-label">PEAK 11</span>
            <span className="core-caption">YOUR NEXT CHAPTER</span>
          </div>

          <div className="floating-panel panel-front">
            <Sparkles size={19} />
            <div>
              <strong>Ideas into action.</strong>
              <span>One workspace at a time.</span>
            </div>
          </div>

          <span className="art-label art-label-top">01 / IMAGINE</span>
          <span className="art-label art-label-bottom">04 / CREATE</span>
        </div>

        <button
          className="scroll-cue"
          onClick={() => scrollTo("products")}
          aria-label="Scroll to explore products"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </button>
      </section>

      <section className="products-section section-wrap" id="products">
        <div className="section-heading">
          <div>
            <span className="section-kicker">YOUR WORKSPACE, YOUR RULES</span>
            <h2>Four paths.<br />One starting point.</h2>
          </div>
          <p>
            Choose what you want to accomplish. Get a workspace designed
            around your goals, without the clutter of tools you don't need.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.number} product={product} />
          ))}
        </div>
      </section>

      <section className="workflow-section" id="how-it-works">
        <div className="section-wrap">
          <span className="section-kicker">SIMPLE BY DESIGN</span>
          <h2>Less setup.<br />More getting things done.</h2>

          <div className="workflow-grid">
            <div className="workflow-step">
              <span className="step-number">01</span>
              <h3>Create your account</h3>
              <p>Start with a straightforward sign-in experience.</p>
            </div>
            <div className="workflow-step">
              <span className="step-number">02</span>
              <h3>Choose your path</h3>
              <p>Select the product workspace that fits your goals.</p>
            </div>
            <div className="workflow-step">
              <span className="step-number">03</span>
              <h3>Make real progress</h3>
              <p>Work in a focused space designed for your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta section-wrap" id="get-started">
        <div className="cta-orb" aria-hidden="true" />
        <span className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>What will you<br />build with Peak 11?</h2>
        <p>Choose a direction. Give your ambition room to grow.</p>
        <button
          className="button-primary"
          onClick={() =>
            window.alert(
              "Account setup is coming next. Authentication is not connected yet."
            )
          }
        >
          Get started <ArrowRight size={18} />
        </button>
        <span className="cta-note">A focused workspace for your next big idea.</span>
      </section>

      <footer className="site-footer" id="about">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Layers3 size={19} /></span>
          <span>peak<span className="brand-number">11</span></span>
        </a>
        <p>AI Tools. Real Businesses. Infinite Possibilities.</p>
        <span className="footer-copy">© {new Date().getFullYear()} Peak 11</span>
      </footer>
    </main>
  );
    }
    
