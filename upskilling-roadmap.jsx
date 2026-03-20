import { useState } from "react";

const plans = [
  {
    id: "y1",
    label: "Year 1",
    subtitle: "2026 — Survival Layer",
    tagline: "Stop competing with AI. Start governing it.",
    accent: "#E8FF47",
    phases: [
      {
        quarter: "Q1",
        title: "Tooling Fluency",
        risk: "URGENT",
        items: [
          {
            skill: "Claude Code / Cursor mastery",
            why: "You need to be the person who sets up, configures, and audits AI coding assistants on your team — not the person who eventually gets replaced by someone who does.",
            how: "Ship 3 real features using AI-assisted coding. Document what it got wrong, why, and how you corrected it. That correction log is your judgment artifact.",
            hard: "Knowing when NOT to accept AI output. Developing taste for its failure modes.",
          },
          {
            skill: "CLAUDE.md / .cursorrules authoring",
            why: "The engineer who defines how AI behaves in a codebase is the one who controls the codebase. This is leverage.",
            how: "Write and iterate a production-grade CLAUDE.md for your team's primary repo. Include architecture constraints, forbidden patterns, code style.",
            hard: "Making it specific enough to be useful without being brittle.",
          },
          {
            skill: "LLM API basics — Anthropic + OpenAI",
            why: "You cannot evaluate AI-integrated systems you've never built. This is your entry ticket to the next job tier.",
            how: "Build one real thing: a RAG tool over your team's internal docs, a code review bot, or a SQL explainer. Deploy it. Use it.",
            hard: "Understanding context window management and failure modes under real load.",
          },
        ],
      },
      {
        quarter: "Q2",
        title: "Data Engineering Upgrade",
        risk: "HIGH",
        items: [
          {
            skill: "dbt (data build tool)",
            why: "Your SQL reporting role is being automated. dbt moves you from writing queries to designing the models those queries run against. Architecturally different risk level.",
            how: "Complete dbt Fundamentals cert (free). Rebuild one ad hoc report as a dbt model in your actual data environment.",
            hard: "Testing and documentation discipline — dbt rewards it, most engineers skip it.",
          },
          {
            skill: "Airflow or Prefect basics",
            why: "Orchestration is infrastructure. The person who designed the pipeline is harder to replace than the person who queried it.",
            how: "Build one scheduled pipeline. Can be simple. The goal is mental model, not production grade.",
            hard: "Debugging DAG failures in non-obvious ways.",
          },
        ],
      },
      {
        quarter: "Q3",
        title: "Judgment Artifacts",
        risk: "MEDIUM",
        items: [
          {
            skill: "Architecture Decision Records (ADRs)",
            why: "Your cross-domain judgment and architecture instincts are your moat. They need to be visible and documented to compound. ADRs make your thinking legible.",
            how: "Write 5 ADRs this quarter. Two for past decisions (retrospective). Three for upcoming ones. Share them in your team's repo.",
            hard: "Being honest about tradeoffs and what you were uncertain about. That honesty is the signal.",
          },
          {
            skill: "Internal tech talks / written guidance",
            why: "Informal mentoring is invisible. Formalized mentoring is a career artifact. Same work, radically different compound interest.",
            how: "Give one internal talk on a topic you know deeply. Publish one internal guide that junior engineers actually use.",
            hard: "Making complex things genuinely legible without dumbing them down.",
          },
        ],
      },
      {
        quarter: "Q4",
        title: "Staff Engineering Groundwork",
        risk: "STRATEGIC",
        items: [
          {
            skill: "Staff/Principal eng scope framing",
            why: "At your experience level, the next lever isn't another technical skill — it's operating at a different scope. An engineer who shapes what gets built is insulated from AI replacing engineers who build it.",
            how: "Read 'The Staff Engineer's Path' (Tanya Reilly). Map your current work against the archetypes. Identify one initiative where you can operate at that scope.",
            hard: "Letting go of being the person who solves every technical problem personally.",
          },
          {
            skill: "Evals for LLM systems",
            why: "By end of 2026, most teams building with LLMs will have someone responsible for eval design. That person has job security. Learn this before it becomes a specialty.",
            how: "Build a simple eval harness for a real AI output — even something small like classifying internal tickets. Learn what makes a good eval.",
            hard: "Evals that are both automatable and actually signal quality. Most first attempts measure the wrong thing.",
          },
        ],
      },
    ],
  },
  {
    id: "y3",
    label: "Year 3",
    subtitle: "2028 — Differentiation Layer",
    tagline: "The AI can write code. Can it do what you do?",
    accent: "#47CDFF",
    phases: [
      {
        quarter: "Theme 1",
        title: "AI Systems Ownership",
        risk: "CORE",
        items: [
          {
            skill: "Agentic system design",
            why: "By 2028, agent pipelines will be standard infrastructure at any serious tech company. The engineer who can design, debug, and govern multi-agent systems is in a completely different risk tier than the engineer who uses them.",
            how: "Go beyond RAG. Build a system with tool use, planning loops, and failure recovery. Study how your outputs degrade at edges.",
            hard: "Failure modes in agentic systems are non-obvious and often silent. Knowing when the agent is confidently wrong is a skill in itself.",
          },
          {
            skill: "AI safety basics for production systems",
            why: "Prompt injection, jailbreaks, data leakage in RAG — these are your team's problems now, not a research paper concern. You need to own this.",
            how: "Work through OWASP LLM Top 10. Audit one production AI integration in your codebase. Write a threat model for it.",
            hard: "Threat modeling a system with non-deterministic behavior requires a different mental model than traditional security.",
          },
          {
            skill: "Fine-tuning and LoRA concepts",
            why: "You don't need to be an ML researcher. You need to know when fine-tuning is the right tool vs RAG vs prompt engineering, and why. That decision-making is architecture.",
            how: "Run one LoRA fine-tune on an open model (Mistral or similar) on a small domain task. Understand the tradeoffs firsthand.",
            hard: "LoRA is accessible, but understanding overfitting and eval in small-data regimes takes time.",
          },
        ],
      },
      {
        quarter: "Theme 2",
        title: "Formal Seniority",
        risk: "STRATEGIC",
        items: [
          {
            skill: "Staff or Principal Engineer title/scope",
            why: "By 2028 the mid-level engineer tier will be significantly compressed. The floor is moving up. You need to be above it before then, not after.",
            how: "If your company can't give you the scope, find one that will. The title matters less than the operating level. Be the person running technical strategy on at least one significant initiative.",
            hard: "This requires politics and visibility, not just technical excellence. Most senior engineers underinvest here.",
          },
          {
            skill: "Cross-org technical influence",
            why: "Your cross-domain experience is a rare asset. It needs to compound across teams, not just within one. The engineer who can translate between data, backend, infra, and product is nearly impossible to automate.",
            how: "Own one initiative that cuts across at least two teams. Document the outcome and the decisions you made.",
            hard: "This requires saying no to things that keep you heads-down in implementation.",
          },
        ],
      },
      {
        quarter: "Theme 3",
        title: "Data/ML Hybrid Identity",
        risk: "UPSIDE",
        items: [
          {
            skill: "Dimensional modeling + data contracts",
            why: "The data engineer who also understands ML pipelines and can architect the data layer that feeds AI systems is a premium hire in 2028.",
            how: "Go beyond dbt basics. Study Kimball's dimensional modeling. Design one star schema for a domain you own. Add data contracts to your pipelines.",
            hard: "Modeling for ML consumption is different from modeling for BI. Learn both.",
          },
          {
            skill: "MLOps fundamentals",
            why: "You don't need to train models to be valuable in the ML space. Managing model deployment, versioning, drift detection, and rollback is pure engineering work with high AI adjacency.",
            how: "Work through MLflow or Weights & Biases in a real project. Instrument one model's performance over time.",
            hard: "Understanding what model drift actually looks like in production metrics vs toy examples.",
          },
        ],
      },
    ],
  },
  {
    id: "y5",
    label: "Year 5",
    subtitle: "2030 — Leverage Layer",
    tagline: "You're not racing the model. You're setting the rules.",
    accent: "#FF7A47",
    phases: [
      {
        quarter: "Theme 1",
        title: "Human-AI System Architect",
        risk: "APEX",
        items: [
          {
            skill: "Designing human-in-the-loop systems",
            why: "By 2030, the highest-leverage engineering work will be defining *where* humans remain in AI-automated workflows and *why*. This is not a soft skill — it requires deep systems thinking and domain expertise.",
            how: "Own the architecture of at least one human-AI collaborative system at your company. Document the decision logic explicitly: what AI handles, what it cannot, and why.",
            hard: "Requires simultaneously understanding AI limitations AND organizational trust and risk tolerance. Most engineers only know one side.",
          },
          {
            skill: "AI governance and evaluation frameworks",
            why: "Regulation of AI systems in enterprise contexts will be significant by 2030. The engineer who understands how to design auditable, explainable AI behavior is not a compliance person — they're a technical architect.",
            how: "Build familiarity with EU AI Act requirements for high-risk systems. Design one internal eval framework that satisfies a plausible regulatory audit.",
            hard: "Translating regulatory language into technical system requirements without over-engineering.",
          },
        ],
      },
      {
        quarter: "Theme 2",
        title: "Principal / Distinguished Engineer",
        risk: "CAREER CEILING",
        items: [
          {
            skill: "Technical strategy at org level",
            why: "At this horizon, the engineers with real security are the ones who shape org-level technical direction. Not because AI can't code — it can — but because navigating org constraints, tradeoffs, and long-term bets requires judgment earned over time.",
            how: "If you've followed this plan, you have 5 years of documented architecture decisions, cross-team influence, and AI system ownership. Synthesize it into a technical vision for your domain. Put it in writing.",
            hard: "Requires accepting that you'll never be the best coder in the room again, and being completely fine with that.",
          },
          {
            skill: "Building and shipping AI-native products",
            why: "The highest upside option by 2030 is not being an employee at all. Engineers who understand AI systems deeply enough to build products with small teams will have extraordinary leverage.",
            how: "Scope one internal tool or side project that could become a real product. Build it with AI-native architecture from day one. Ship it to real users.",
            hard: "Product judgment is the hardest thing to learn. Start now — it takes years to develop.",
          },
        ],
      },
      {
        quarter: "Theme 3",
        title: "Irreplaceable Judgment",
        risk: "MOAT",
        items: [
          {
            skill: "Deep domain expertise in 1-2 verticals",
            why: "Generalist software engineers are high-risk by 2030. Engineers who deeply understand a specific domain (fintech, healthcare, logistics, security) AND can build AI systems within it are a different animal entirely. Domain context is not in the training data.",
            how: "Pick the domain you've been in longest. Go deep on its regulatory, operational, and technical constraints. Become the person who audits AI outputs in that domain because no one else can.",
            hard: "Committing to depth over breadth feels wrong for engineers who survive by being generalists. Do it anyway.",
          },
          {
            skill: "Teaching and knowledge transfer",
            why: "By 2030, the engineers who can effectively teach humans to work with AI systems — and help organizations build that capability — will be rare and highly valued. This is not soft skills. It is strategic leverage.",
            how: "Build something that teaches others: a course, a playbook, a structured mentoring program. Measure its impact.",
            hard: "Most technical people are bad at this until they've done it dozens of times.",
          },
        ],
      },
    ],
  },
];

const riskColors = {
  URGENT: "#FF4747",
  HIGH: "#FF9A3C",
  MEDIUM: "#E8FF47",
  STRATEGIC: "#47CDFF",
  CORE: "#B47AFF",
  UPSIDE: "#47FF9A",
  "APEX": "#FF7A47",
  "CAREER CEILING": "#FF47CD",
  MOAT: "#FFD747",
};

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState("y1");
  const [expandedItem, setExpandedItem] = useState(null);

  const plan = plans.find((p) => p.id === activePhase);

  return (
    <div style={{
      fontFamily: "'Courier New', Courier, monospace",
      background: "#0A0A0A",
      minHeight: "100vh",
      color: "#E8E8E0",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #222",
        padding: "40px 48px 32px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: "400px", height: "100%",
          background: `radial-gradient(ellipse at top right, ${plan.accent}15 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{
          fontSize: "11px", letterSpacing: "0.2em", color: "#555",
          textTransform: "uppercase", marginBottom: "12px"
        }}>
          Richard · Senior SWE · AI Survival Plan · March 2026
        </div>
        <h1 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "900",
          margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1.1,
          fontFamily: "'Georgia', serif",
        }}>
          The 5-Year<br />
          <span style={{ color: plan.accent }}>Upskilling Roadmap</span>
        </h1>
        <p style={{ color: "#666", fontSize: "13px", margin: "16px 0 0", maxWidth: "500px" }}>
          Built under the assumption that generalist software engineering is structurally shrinking.
          This plan is designed to move you into the irreplaceable tier — not gradually, but deliberately.
        </p>
      </div>

      {/* Tab selector */}
      <div style={{
        display: "flex", gap: "0", borderBottom: "1px solid #222",
        padding: "0 48px",
      }}>
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => { setActivePhase(p.id); setExpandedItem(null); }}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "20px 32px", fontSize: "13px", letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: activePhase === p.id ? p.accent : "#444",
              borderBottom: activePhase === p.id ? `2px solid ${p.accent}` : "2px solid transparent",
              transition: "all 0.2s",
              fontFamily: "inherit",
            }}
          >
            {p.label}
            <span style={{ display: "block", fontSize: "10px", color: "#444", marginTop: "2px" }}>
              {p.subtitle.split("—")[0].trim()}
            </span>
          </button>
        ))}
      </div>

      {/* Plan header */}
      <div style={{ padding: "32px 48px 24px", borderBottom: "1px solid #141414" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: plan.accent, fontWeight: "700"
          }}>{plan.subtitle}</span>
        </div>
        <p style={{
          fontSize: "22px", fontFamily: "'Georgia', serif", fontStyle: "italic",
          color: "#C8C8C0", margin: "8px 0 0", lineHeight: 1.4,
        }}>"{plan.tagline}"</p>
      </div>

      {/* Phases */}
      <div style={{ padding: "32px 48px 64px" }}>
        {plan.phases.map((phase, pi) => (
          <div key={pi} style={{ marginBottom: "48px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
              <div style={{
                width: "36px", height: "36px", border: `1px solid ${plan.accent}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "10px", color: plan.accent, letterSpacing: "0.05em",
                flexShrink: 0,
              }}>{phase.quarter}</div>
              <div>
                <div style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                  {phase.title}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {phase.items.map((item, ii) => {
                const key = `${pi}-${ii}`;
                const isOpen = expandedItem === key;
                return (
                  <div
                    key={ii}
                    style={{
                      border: `1px solid ${isOpen ? plan.accent + "60" : "#1E1E1E"}`,
                      background: isOpen ? "#111" : "#0D0D0D",
                      transition: "all 0.2s",
                      cursor: "pointer",
                    }}
                    onClick={() => setExpandedItem(isOpen ? null : key)}
                  >
                    <div style={{
                      padding: "16px 20px", display: "flex",
                      alignItems: "center", gap: "16px",
                    }}>
                      <div style={{
                        padding: "3px 8px", fontSize: "9px", letterSpacing: "0.15em",
                        textTransform: "uppercase", fontWeight: "700",
                        color: riskColors[item.risk] || "#888",
                        border: `1px solid ${riskColors[item.risk] || "#888"}`,
                        flexShrink: 0, display: "none",
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.02em" }}>
                          {item.skill}
                        </div>
                      </div>
                      <div style={{
                        color: isOpen ? plan.accent : "#333",
                        fontSize: "18px", transition: "all 0.2s",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        flexShrink: 0,
                      }}>+</div>
                    </div>

                    {isOpen && (
                      <div style={{
                        padding: "0 20px 20px",
                        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "16px",
                        borderTop: "1px solid #1A1A1A", paddingTop: "20px",
                        marginTop: "0",
                      }}>
                        <div>
                          <div style={{
                            fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase",
                            color: plan.accent, marginBottom: "8px", fontWeight: "700",
                          }}>Why it matters</div>
                          <p style={{ fontSize: "13px", color: "#999", lineHeight: 1.7, margin: 0 }}>
                            {item.why}
                          </p>
                        </div>
                        <div>
                          <div style={{
                            fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase",
                            color: "#47FF9A", marginBottom: "8px", fontWeight: "700",
                          }}>How to build it</div>
                          <p style={{ fontSize: "13px", color: "#999", lineHeight: 1.7, margin: 0 }}>
                            {item.how}
                          </p>
                        </div>
                        <div>
                          <div style={{
                            fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase",
                            color: "#FF7A47", marginBottom: "8px", fontWeight: "700",
                          }}>What's actually hard</div>
                          <p style={{ fontSize: "13px", color: "#999", lineHeight: 1.7, margin: 0 }}>
                            {item.hard}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1A1A1A", padding: "24px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "12px",
      }}>
        <span style={{ fontSize: "11px", color: "#333", letterSpacing: "0.1em" }}>
          GENERATED MARCH 2026 · REVIEW QUARTERLY · EXPECT THIS TO BE WRONG IN INTERESTING WAYS
        </span>
        <span style={{ fontSize: "11px", color: "#333" }}>
          Click any skill to expand →
        </span>
      </div>
    </div>
  );
}
