import { Link } from "react-router-dom";
import { LogoImage } from "../components/BrandMark";
import HeroVisual from "../components/HeroVisual";
import Icon from "../components/icons";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  aiChips,
  audiences,
  capabilities,
  differentiators,
  engagementModels,
  heroProof,
  lifecycleSteps,
  pipelineNotes,
  pipelineRows,
  showcases,
  signalCards
} from "../data/siteContent";
import usePageMeta from "../hooks/usePageMeta";

function IconWrap({ name }) {
  return (
    <div className="icon-wrap" aria-hidden="true">
      <Icon name={name} />
    </div>
  );
}

function PreventSubmit(event) {
  event.preventDefault();
}

export default function HomePage() {
  usePageMeta({
    title: "VMT | Engineering Intelligence into Every System",
    description:
      "Meta description placeholder: VMT builds AI-powered products, scalable applications, and intelligent infrastructure with a premium, product-grade engineering approach.",
    keywords:
      "keywords placeholder, VMT, AI engineering, intelligent systems, scalable applications, digital infrastructure, LLM pipelines"
  });

  return (
    <main id="top">
      <section className="section hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <Reveal>
              <SectionHeading
                eyebrow="AI-first engineering"
                title="Engineering Intelligence into Every System"
                description="VMT builds AI-powered products, scalable applications, and intelligent infrastructure for teams that want software to think, adapt, and operate at product scale."
                titleAs="h1"
              />
            </Reveal>

            <Reveal className="hero-actions" delay={120}>
              <Link className="btn btn-primary" to="/#contact">
                Build With Us
              </Link>
              <Link className="btn btn-secondary" to="/#capabilities">
                Explore Capabilities
              </Link>
            </Reveal>

            <Reveal className="hero-proof" delay={200}>
              {heroProof.map((item) => (
                <article key={item.title} className="proof-card">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </article>
              ))}
            </Reveal>

            <Reveal className="branding-preview" delay={280}>
              <div className="brand-icon-preview">
                <LogoImage alt="VMT app icon preview" />
              </div>
              <div className="branding-copy">
                <strong>Brand system preview</strong>
                <p>Folded geometry from the VMT mark carries through the interface with layered planes, restrained glow, and deep-indigo contrast.</p>
              </div>
              <div className="swatches" aria-hidden="true">
                <span className="swatch" style={{ background: "#313270" }} />
                <span className="swatch" style={{ background: "#2a5fff" }} />
                <span className="swatch" style={{ background: "#6a3dff" }} />
                <span className="swatch" style={{ background: "linear-gradient(135deg,#2a5fff,#6a3dff)" }} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container section-grid">
          <Reveal className="capabilities-intro">
            <SectionHeading
              eyebrow="Capabilities"
              title="Engineering disciplines built around intelligent products"
              description="VMT operates like an AI product company. These capabilities are the layers assembled into durable systems, not a menu of disconnected services."
            />
          </Reveal>

          <div className="capabilities-grid">
            {capabilities.map((item, index) => (
              <Reveal key={item.title} as="article" className="capability-card" delay={80 + index * 40}>
                <IconWrap name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="differentiator">
        <div className="container section-grid">
          <Reveal className="differentiator-copy">
            <SectionHeading
              eyebrow="Core differentiator"
              title="Built Like a Product. Delivered Like a Partner."
              description="The work is structured around architecture, system integrity, and long-term product value. VMT integrates tightly, ships cleanly, and builds with the same rigor expected from internal product engineering teams."
            />

            <div className="feature-list">
              {differentiators.map((item) => (
                <div key={item} className="feature-item">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="differentiator-visual" delay={120}>
            <div className="visual-stack">
              <div className="stack-plane secondary" aria-hidden="true" />
              <div className="stack-plane tertiary" aria-hidden="true" />
              <div className="stack-plane main">
                <div>
                  <span className="eyebrow">Product signal</span>
                </div>
                <div>
                  <h3>Precision in structure, not just polish</h3>
                  <p>Every layer is designed to support behavior, scale, and clarity. The visual system is only one expression of a deeper engineering model.</p>
                </div>
                <div className="signal-grid">
                  {signalCards.map((item) => (
                    <article key={item.title} className="signal-card">
                      <strong>{item.label}</strong>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="ai-core">
        <div className="container ai-layout">
          <Reveal className="ai-copy">
            <SectionHeading
              eyebrow="AI core"
              title="AI at the Core of Everything We Build"
              description="Intelligent products need more than a model call. VMT designs the surrounding system: orchestration, memory, interfaces, feedback loops, automation, guardrails, and the infrastructure that makes AI useful in production."
            />
            <div className="chip-cluster">
              {aiChips.map((item) => (
                <span key={item} className="feature-chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="ai-visual" delay={120}>
            <div className="pipeline-panel">
              <div className="pipeline-map">
                {pipelineRows.map((row, rowIndex) => (
                  <div key={`row-${rowIndex}`} className="pipeline-row">
                    {row.map((item) => (
                      <article key={item.title} className="pipeline-node">
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </article>
                    ))}
                  </div>
                ))}

                <div className="pipeline-note">
                  {pipelineNotes.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="lifecycle">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Engineering lifecycle"
              title="From intelligence strategy to operating system scale"
              description="Each phase is structured to reduce ambiguity, tighten feedback loops, and move from concept to durable production architecture."
            />
          </Reveal>

          <div className="timeline-shell">
            <div className="timeline-track" aria-hidden="true" />
            <div className="timeline-grid">
              {lifecycleSteps.map((item, index) => (
                <Reveal key={item.index} as="article" className="timeline-step" delay={80 + index * 60}>
                  <div className="step-index">{item.index}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="showcase">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Capability showcase"
              title="Concept systems that illustrate the kind of intelligence VMT can ship"
              description="These are concept and demo directions, not client work. They show how product, AI, and infrastructure can converge into premium operating interfaces."
            />
          </Reveal>

          <div className="showcase-grid">
            {showcases.map((item, index) => (
              <Reveal key={item.title} as="article" className="showcase-card" delay={80 + index * 60}>
                <span className="showcase-label">Concept / Demo System</span>
                <div className={`demo-visual ${item.visual}`} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="showcase-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="audience">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Who it's for"
              title="Built for teams moving toward intelligent systems"
              description="VMT fits best where software, automation, and product quality are strategic rather than optional."
            />
          </Reveal>

          <div className="audience-grid">
            {audiences.map((item, index) => (
              <Reveal key={item.title} as="article" className="segment-card" delay={80 + index * 60}>
                <span className="segment-label">{item.label}</span>
                <IconWrap name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="engagement">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Engagement models"
              title="Flexible structures for high-trust engineering collaboration"
              description="Engagements are framed around outcomes, architecture, and execution continuity, not generic resourcing."
            />
          </Reveal>

          <div className="engagement-grid">
            {engagementModels.map((item, index) => (
              <Reveal key={item.title} as="article" className="engagement-card" delay={80 + index * 60}>
                <span className="engagement-label">{item.label}</span>
                <IconWrap name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.items.map((listItem) => (
                    <li key={listItem}>{listItem}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <Reveal className="cta-shell">
            <div className="cta-layout">
              <div className="cta-copy">
                <SectionHeading
                  eyebrow="Start the build"
                  title="Let's Engineer Something Intelligent"
                  description="From idea to intelligent system, VMT builds with product discipline, architectural clarity, and execution precision."
                />
                <div className="cta-trust">
                  <span>AI-first architecture</span>
                  <span>Scalable application layers</span>
                  <span>Cloud-ready infrastructure</span>
                  <span>No fake case studies</span>
                </div>
              </div>

              <div className="cta-form-wrap">
                <div className="form-card">
                  <div className="form-card-header">
                    <h3 className="form-card-title">Project inquiry</h3>
                    <p className="form-note">Form UI placeholder ready for CRM, email, or scheduling integration.</p>
                  </div>
                  <form onSubmit={PreventSubmit}>
                    <div className="form-grid">
                      <div className="field">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Your name" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="you@company.com" />
                      </div>
                      <div className="field full">
                        <label htmlFor="project-type">Project type</label>
                        <select id="project-type" name="project-type" defaultValue="Product Development">
                          <option>Product Development</option>
                          <option>AI Integration & Automation</option>
                          <option>Dedicated Engineering Team</option>
                          <option>Exploration / Strategy</option>
                        </select>
                      </div>
                      <div className="field full">
                        <label htmlFor="project">Project overview</label>
                        <textarea
                          id="project"
                          name="project"
                          placeholder="Tell us what you are building, what intelligence the system needs, and what stage you are in."
                        />
                      </div>
                    </div>
                    <div className="form-actions">
                      <button className="btn btn-primary" type="submit">
                        Send Inquiry
                      </button>
                      <p className="form-note">Built for conversion, structured for SEO, and ready for backend wiring.</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
